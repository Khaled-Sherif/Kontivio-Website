from django.contrib import admin
from .models import Department, JobPosition, JobResponsibility, JobRequirement, JobApplication


@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'created_at']
    prepopulated_fields = {'slug': ('name',)}


class JobResponsibilityInline(admin.TabularInline):
    model = JobResponsibility
    extra = 1
    fields = ['text', 'order']


class JobRequirementInline(admin.TabularInline):
    model = JobRequirement
    extra = 1
    fields = ['text', 'order']


@admin.register(JobPosition)
class JobPositionAdmin(admin.ModelAdmin):
    list_display = ['title', 'department', 'employment_type', 'level', 'is_active']
    list_filter = ['is_active', 'department', 'employment_type', 'level']
    search_fields = ['title', 'summary']
    prepopulated_fields = {'slug': ('title',)}
    inlines = [JobResponsibilityInline, JobRequirementInline]


@admin.register(JobApplication)
class JobApplicationAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email', 'position', 'status', 'created_at']
    list_filter = ['status']
    search_fields = ['full_name', 'email']
    readonly_fields = ['created_at', 'ip_address', 'cv_file']
