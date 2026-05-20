import uuid
from django.db import models


class ContactSubmission(models.Model):
    SUBMISSION_TYPES = [
        ('contact', 'Contact'),
        ('schedule', 'Schedule Call'),
    ]
    PREFERRED_TIMES = [
        ('morning', 'Morning'),
        ('afternoon', 'Afternoon'),
        ('evening', 'Evening'),
        ('flexible', 'Flexible'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    submission_type = models.CharField(
        max_length=20, choices=SUBMISSION_TYPES, default='contact'
    )
    name = models.CharField(max_length=200)
    email = models.EmailField()
    company = models.CharField(max_length=200, blank=True)
    message = models.TextField()
    preferred_time = models.CharField(
        max_length=20, choices=PREFERRED_TIMES, blank=True
    )
    timezone = models.CharField(max_length=100, blank=True)
    is_read = models.BooleanField(default=False)
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.name} <{self.email}> ({self.submission_type})'
