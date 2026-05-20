from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from apps.contacts.models import ContactSubmission


class ContactSubmissionTests(APITestCase):
    url = '/api/v1/contacts/'

    def _valid_contact_payload(self, **overrides):
        payload = {
            'submission_type': 'contact',
            'name': 'Jane Doe',
            'email': 'jane@example.com',
            'company': 'Acme Corp',
            'message': 'Hello, I would like more information.',
        }
        payload.update(overrides)
        return payload

    def test_create_contact_submission_returns_201(self):
        response = self.client.post(self.url, self._valid_contact_payload(), format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['message'], 'Your message has been sent successfully.')

    def test_create_schedule_submission_without_preferred_time_returns_400(self):
        payload = self._valid_contact_payload(submission_type='schedule')
        response = self.client.post(self.url, payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('preferred_time', response.data)

    def test_create_schedule_submission_with_preferred_time_returns_201(self):
        payload = self._valid_contact_payload(
            submission_type='schedule',
            preferred_time='morning',
            timezone='Europe/London',
        )
        response = self.client.post(self.url, payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_missing_required_fields_returns_400(self):
        response = self.client.post(self.url, {}, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('name', response.data)
        self.assertIn('email', response.data)
        self.assertIn('message', response.data)

    def test_submission_is_saved_to_database(self):
        self.client.post(self.url, self._valid_contact_payload(), format='json')
        self.assertEqual(ContactSubmission.objects.count(), 1)
        submission = ContactSubmission.objects.first()
        self.assertEqual(submission.name, 'Jane Doe')
        self.assertEqual(submission.email, 'jane@example.com')
        self.assertFalse(submission.is_read)
