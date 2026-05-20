from celery import shared_task
from django.core.mail import send_mail
from django.conf import settings


@shared_task
def send_contact_notification(submission_id):
    from .models import ContactSubmission

    try:
        submission = ContactSubmission.objects.get(id=submission_id)
    except ContactSubmission.DoesNotExist:
        return

    subject = f'New {submission.get_submission_type_display()} from {submission.name}'
    admin_body = (
        f'Name: {submission.name}\n'
        f'Email: {submission.email}\n'
        f'Company: {submission.company or "N/A"}\n'
        f'Type: {submission.get_submission_type_display()}\n'
        f'Message:\n{submission.message}\n'
    )
    if submission.submission_type == 'schedule':
        admin_body += (
            f'Preferred Time: {submission.get_preferred_time_display()}\n'
            f'Timezone: {submission.timezone or "N/A"}\n'
        )

    send_mail(
        subject=subject,
        message=admin_body,
        from_email=settings.EMAIL_HOST_USER or 'noreply@kontivio.com',
        recipient_list=[settings.ADMIN_EMAIL],
        fail_silently=True,
    )

    confirmation_body = (
        f'Hi {submission.name},\n\n'
        f'Thank you for reaching out to Kontivio. We have received your message '
        f'and will get back to you as soon as possible.\n\n'
        f'Best regards,\nThe Kontivio Team'
    )
    send_mail(
        subject='We received your message — Kontivio',
        message=confirmation_body,
        from_email=settings.EMAIL_HOST_USER or 'noreply@kontivio.com',
        recipient_list=[submission.email],
        fail_silently=True,
    )
