import io
from django.core.files.uploadedfile import SimpleUploadedFile
from rest_framework import status
from rest_framework.test import APITestCase
from apps.careers.models import Department, JobPosition, JobApplication


def make_cv_file(name='cv.pdf', size=1024, content_type='application/pdf'):
    content = b'%PDF-1.4 fake pdf content ' + b'x' * size
    return SimpleUploadedFile(name, content, content_type=content_type)


class JobPositionListTests(APITestCase):
    def setUp(self):
        self.dept = Department.objects.create(name='Customer Support')
        self.active = JobPosition.objects.create(
            title='Support Agent',
            department=self.dept,
            location='Remote',
            employment_type='full_time',
            level='entry',
            summary='Handle customer queries.',
        )
        self.inactive = JobPosition.objects.create(
            title='Old Role',
            department=self.dept,
            location='Cairo',
            employment_type='contract',
            level='mid',
            summary='Archived position.',
            is_active=False,
        )

    def test_list_returns_only_active_positions(self):
        response = self.client.get('/api/v1/careers/positions/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        slugs = [r['slug'] for r in response.data['results']]
        self.assertIn('support-agent', slugs)
        self.assertNotIn('old-role', slugs)

    def test_filter_by_department_slug(self):
        response = self.client.get(
            '/api/v1/careers/positions/', {'department__slug': 'customer-support'}
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['results']), 1)

    def test_filter_by_employment_type(self):
        response = self.client.get(
            '/api/v1/careers/positions/', {'employment_type': 'full_time'}
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        for item in response.data['results']:
            self.assertEqual(item['employment_type'], 'full_time')


class JobPositionDetailTests(APITestCase):
    def setUp(self):
        self.dept = Department.objects.create(name='Tech')
        self.position = JobPosition.objects.create(
            title='Backend Developer',
            department=self.dept,
            location='Remote',
            employment_type='full_time',
            level='senior',
            summary='Build APIs.',
        )

    def test_detail_returns_position(self):
        response = self.client.get(f'/api/v1/careers/positions/{self.position.slug}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], 'Backend Developer')
        self.assertIn('responsibilities', response.data)
        self.assertIn('requirements', response.data)

    def test_inactive_position_returns_404(self):
        self.position.is_active = False
        self.position.save()
        response = self.client.get(f'/api/v1/careers/positions/{self.position.slug}/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


class JobApplicationCreateTests(APITestCase):
    def setUp(self):
        self.dept = Department.objects.create(name='Sales')
        self.position = JobPosition.objects.create(
            title='Sales Rep',
            department=self.dept,
            location='Remote',
            employment_type='full_time',
            level='mid',
            summary='Drive sales.',
        )

    def _post_application(self, **overrides):
        data = {
            'position': str(self.position.id),
            'full_name': 'John Smith',
            'email': 'john@example.com',
            'phone': '+1234567890',
            'cv_file': make_cv_file(),
        }
        data.update(overrides)
        return self.client.post('/api/v1/careers/applications/', data, format='multipart')

    def test_valid_application_returns_201(self):
        response = self._post_application()
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['message'], 'Application submitted successfully.')

    def test_application_saved_to_database(self):
        self._post_application()
        self.assertEqual(JobApplication.objects.count(), 1)
        app = JobApplication.objects.first()
        self.assertEqual(app.full_name, 'John Smith')
        self.assertEqual(app.status, 'pending')

    def test_oversized_cv_returns_400(self):
        large_file = make_cv_file(size=6 * 1024 * 1024)
        response = self._post_application(cv_file=large_file)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('cv_file', response.data)

    def test_wrong_file_type_returns_400(self):
        bad_file = SimpleUploadedFile(
            'cv.exe', b'MZ bad content', content_type='application/octet-stream'
        )
        response = self._post_application(cv_file=bad_file)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('cv_file', response.data)

    def test_missing_required_fields_returns_400(self):
        response = self.client.post('/api/v1/careers/applications/', {}, format='multipart')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_general_application_without_position(self):
        data = {
            'full_name': 'Mary Jane',
            'email': 'mary@example.com',
            'cv_file': make_cv_file(),
        }
        response = self.client.post('/api/v1/careers/applications/', data, format='multipart')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
