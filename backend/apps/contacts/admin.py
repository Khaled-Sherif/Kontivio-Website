from django.contrib import admin
from .models import ContactSubmission


@admin.register(ContactSubmission)
class ContactSubmissionAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'company', 'submission_type', 'is_read', 'created_at']
    list_filter = ['submission_type', 'is_read']
    search_fields = ['name', 'email', 'company']
    readonly_fields = ['created_at', 'ip_address']
    date_hierarchy = 'created_at'
    actions = ['mark_as_read']

    @admin.action(description='Mark selected submissions as read')
    def mark_as_read(self, request, queryset):
        updated = queryset.update(is_read=True)
        self.message_user(request, f'{updated} submission(s) marked as read.')
