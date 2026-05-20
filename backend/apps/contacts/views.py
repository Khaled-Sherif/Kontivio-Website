from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.throttling import AnonRateThrottle

from .models import ContactSubmission
from .serializers import ContactSubmissionSerializer
from .tasks import send_contact_notification


class ContactThrottle(AnonRateThrottle):
    scope = 'contact'


class ContactSubmissionCreateView(CreateAPIView):
    serializer_class = ContactSubmissionSerializer
    throttle_classes = [ContactThrottle]

    def get_client_ip(self, request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            return x_forwarded_for.split(',')[0].strip()
        return request.META.get('REMOTE_ADDR')

    def perform_create(self, serializer):
        instance = serializer.save(ip_address=self.get_client_ip(self.request))
        send_contact_notification.delay(str(instance.id))

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {'message': 'Your message has been sent successfully.'},
            status=status.HTTP_201_CREATED,
        )
