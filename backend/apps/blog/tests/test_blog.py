from django.utils import timezone
from rest_framework import status
from rest_framework.test import APITestCase
from apps.blog.models import Category, BlogPost


class BlogPostListTests(APITestCase):
    def setUp(self):
        self.category = Category.objects.create(name='Industry News')
        self.published = BlogPost.objects.create(
            title='Published Post',
            slug='published-post',
            excerpt='A published excerpt.',
            content='Full content here.',
            category=self.category,
            is_published=True,
            published_at=timezone.now(),
        )
        self.draft = BlogPost.objects.create(
            title='Draft Post',
            slug='draft-post',
            excerpt='A draft excerpt.',
            content='Draft content.',
            category=self.category,
            is_published=False,
        )

    def test_list_returns_only_published_posts(self):
        response = self.client.get('/api/v1/blog/posts/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        slugs = [r['slug'] for r in response.data['results']]
        self.assertIn('published-post', slugs)
        self.assertNotIn('draft-post', slugs)

    def test_list_pagination_default_page_size(self):
        for i in range(10):
            BlogPost.objects.create(
                title=f'Post {i}',
                slug=f'post-{i}',
                excerpt='Excerpt.',
                content='Content.',
                is_published=True,
                published_at=timezone.now(),
            )
        response = self.client.get('/api/v1/blog/posts/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertLessEqual(len(response.data['results']), 9)

    def test_filter_by_category_slug(self):
        other_cat = Category.objects.create(name='Tech')
        BlogPost.objects.create(
            title='Tech Post',
            slug='tech-post',
            excerpt='Tech excerpt.',
            content='Tech content.',
            category=other_cat,
            is_published=True,
            published_at=timezone.now(),
        )
        response = self.client.get('/api/v1/blog/posts/', {'category__slug': 'industry-news'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        for item in response.data['results']:
            self.assertEqual(item['category']['slug'], 'industry-news')

    def test_search_by_title(self):
        response = self.client.get('/api/v1/blog/posts/', {'search': 'Published'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['results']), 1)
        self.assertEqual(response.data['results'][0]['slug'], 'published-post')


class BlogPostDetailTests(APITestCase):
    def setUp(self):
        self.category = Category.objects.create(name='Guides')
        self.post = BlogPost.objects.create(
            title='Detailed Post',
            slug='detailed-post',
            excerpt='An excerpt.',
            content='Full detailed content.',
            category=self.category,
            is_published=True,
            published_at=timezone.now(),
        )
        self.draft = BlogPost.objects.create(
            title='Hidden Draft',
            slug='hidden-draft',
            excerpt='Hidden.',
            content='Hidden content.',
            is_published=False,
        )

    def test_detail_returns_post_with_content(self):
        response = self.client.get(f'/api/v1/blog/posts/{self.post.slug}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], 'Detailed Post')
        self.assertIn('content', response.data)
        self.assertEqual(response.data['content'], 'Full detailed content.')

    def test_unpublished_post_returns_404(self):
        response = self.client.get(f'/api/v1/blog/posts/{self.draft.slug}/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_nonexistent_slug_returns_404(self):
        response = self.client.get('/api/v1/blog/posts/does-not-exist/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


class CategoryListTests(APITestCase):
    def setUp(self):
        Category.objects.create(name='Customer Success')
        Category.objects.create(name='BPO Insights')

    def test_list_all_categories(self):
        response = self.client.get('/api/v1/blog/categories/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)
