from .base import *
import environ

env = environ.Env()

DEBUG = False

DATABASES = {
    'default': env.db('DATABASE_URL')
}

CORS_ALLOWED_ORIGINS = env.list('CORS_ALLOWED_ORIGINS')

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

# Cloudflare R2 (S3-compatible, no egress fees)
STORAGES = {
    'default': {
        'BACKEND': 'storages.backends.s3boto3.S3Boto3Storage',
        'OPTIONS': {
            'bucket_name': env('R2_BUCKET_NAME'),
            'endpoint_url': env('R2_ENDPOINT_URL'),
            'access_key': env('R2_ACCESS_KEY_ID'),
            'secret_key': env('R2_SECRET_ACCESS_KEY'),
            'region_name': 'auto',
            'file_overwrite': False,
            'default_acl': 'private',
        },
    },
    'staticfiles': {
        'BACKEND': 'whitenoise.storage.CompressedManifestStaticFilesStorage',
    },
}

SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
SECURE_HSTS_SECONDS = 31536000
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True
SECURE_CONTENT_TYPE_NOSNIFF = True
