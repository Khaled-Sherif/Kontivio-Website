import os
from rest_framework import serializers
from .models import Department, JobPosition, JobResponsibility, JobRequirement, JobApplication

CV_MAX_SIZE_BYTES = 5 * 1024 * 1024
CV_ALLOWED_EXTENSIONS = {'.pdf', '.doc', '.docx'}
CV_ALLOWED_CONTENT_TYPES = {
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
}


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ['id', 'name', 'slug']


class JobResponsibilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = JobResponsibility
        fields = ['text']


class JobRequirementSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobRequirement
        fields = ['text']


class JobPositionListSerializer(serializers.ModelSerializer):
    department = DepartmentSerializer(read_only=True)
    responsibilities_count = serializers.IntegerField(
        source='responsibilities.count', read_only=True
    )
    requirements_count = serializers.IntegerField(
        source='requirements.count', read_only=True
    )

    class Meta:
        model = JobPosition
        fields = [
            'id', 'title', 'slug', 'department', 'location',
            'employment_type', 'level', 'salary', 'summary',
            'is_active', 'responsibilities_count', 'requirements_count',
            'created_at',
        ]


class JobPositionDetailSerializer(JobPositionListSerializer):
    responsibilities = JobResponsibilitySerializer(many=True, read_only=True)
    requirements = JobRequirementSerializer(many=True, read_only=True)

    class Meta(JobPositionListSerializer.Meta):
        fields = JobPositionListSerializer.Meta.fields + ['responsibilities', 'requirements']


class JobApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobApplication
        fields = [
            'id', 'position', 'full_name', 'email', 'phone',
            'linkedin_url', 'cover_letter', 'cv_file', 'status',
            'ip_address', 'created_at',
        ]
        read_only_fields = ['id', 'status', 'ip_address', 'created_at']

    def validate_cv_file(self, value):
        if value.size > CV_MAX_SIZE_BYTES:
            raise serializers.ValidationError(
                'CV file size must not exceed 5 MB.'
            )

        ext = os.path.splitext(value.name)[1].lower()
        if ext not in CV_ALLOWED_EXTENSIONS:
            raise serializers.ValidationError(
                f'Unsupported file type. Allowed types: {", ".join(CV_ALLOWED_EXTENSIONS)}.'
            )

        content_type = getattr(value, 'content_type', None)
        if content_type and content_type not in CV_ALLOWED_CONTENT_TYPES:
            raise serializers.ValidationError(
                'Unsupported file content type.'
            )

        return value
