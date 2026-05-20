from django.urls import path
from .views import JobPositionListView, JobPositionDetailView, JobApplicationCreateView

urlpatterns = [
    path('positions/', JobPositionListView.as_view(), name='job-position-list'),
    path('positions/<slug:slug>/', JobPositionDetailView.as_view(), name='job-position-detail'),
    path('applications/', JobApplicationCreateView.as_view(), name='job-application-create'),
]
