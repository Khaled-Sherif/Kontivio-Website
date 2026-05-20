from django.db import transaction
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView
from rest_framework.response import Response
from rest_framework import status
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter

from .models import JobPosition, JobApplication
from .serializers import (
    JobPositionListSerializer,
    JobPositionDetailSerializer,
    JobApplicationSerializer,
)
from .tasks import send_application_confirmation


class JobPositionListView(ListAPIView):
    serializer_class = JobPositionListSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['department__slug', 'employment_type', 'level']
    ordering_fields = ['title', 'created_at']
    ordering = ['-created_at']

    def get_queryset(self):
        return (
            JobPosition.objects
            .filter(is_active=True)
            .select_related('department')
            .prefetch_related('responsibilities', 'requirements')
        )


class JobPositionDetailView(RetrieveAPIView):
    serializer_class = JobPositionDetailSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        return (
            JobPosition.objects
            .filter(is_active=True)
            .select_related('department')
            .prefetch_related('responsibilities', 'requirements')
        )


class JobApplicationCreateView(CreateAPIView):
    serializer_class = JobApplicationSerializer

    def get_client_ip(self, request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            return x_forwarded_for.split(',')[0].strip()
        return request.META.get('REMOTE_ADDR')

    @transaction.atomic
    def perform_create(self, serializer):
        instance = serializer.save(ip_address=self.get_client_ip(self.request))
        transaction.on_commit(
            lambda: send_application_confirmation.delay(str(instance.id))
        )

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {'message': 'Application submitted successfully.'},
            status=status.HTTP_201_CREATED,
        )
