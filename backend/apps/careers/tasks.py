from celery import shared_task
from django.core.mail import send_mail
from django.conf import settings


@shared_task
def send_application_confirmation(application_id):
    from .models import JobApplication

    try:
        application = JobApplication.objects.select_related('position').get(id=application_id)
    except JobApplication.DoesNotExist:
        return

    position_title = application.position.title if application.position else 'General Application'

    confirmation_body = (
        f'Hi {application.full_name},\n\n'
        f'Thank you for applying for the {position_title} role at Kontivio. '
        f'We have received your application and our team will review it shortly.\n\n'
        f'If your profile matches our requirements, we will be in touch to arrange next steps.\n\n'
        f'Best regards,\nThe Kontivio HR Team'
    )
    send_mail(
        subject=f'Application received — {position_title} at Kontivio',
        message=confirmation_body,
        from_email=settings.EMAIL_HOST_USER or 'noreply@kontivio.com',
        recipient_list=[application.email],
        fail_silently=True,
    )

    hr_body = (
        f'New application received.\n\n'
        f'Position: {position_title}\n'
        f'Applicant: {application.full_name}\n'
        f'Email: {application.email}\n'
        f'Phone: {application.phone or "N/A"}\n'
        f'LinkedIn: {application.linkedin_url or "N/A"}\n'
    )
    send_mail(
        subject=f'New Application: {application.full_name} — {position_title}',
        message=hr_body,
        from_email=settings.EMAIL_HOST_USER or 'noreply@kontivio.com',
        recipient_list=[settings.HR_EMAIL],
        fail_silently=True,
    )
