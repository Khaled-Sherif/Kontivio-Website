from rest_framework import serializers
from .models import ContactSubmission


class ContactSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactSubmission
        fields = [
            'id', 'submission_type', 'name', 'email', 'company',
            'message', 'preferred_time', 'timezone', 'is_read',
            'ip_address', 'created_at',
        ]
        read_only_fields = ['id', 'is_read', 'ip_address', 'created_at']

    def validate(self, attrs):
        if attrs.get('submission_type') == 'schedule' and not attrs.get('preferred_time'):
            raise serializers.ValidationError(
                {'preferred_time': 'This field is required for schedule call submissions.'}
            )
        return attrs
