from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Category, BlogPost
from .serializers import CategorySerializer, BlogPostListSerializer, BlogPostDetailSerializer


class CategoryListView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    pagination_class = None


class BlogPostListView(ListAPIView):
    serializer_class = BlogPostListSerializer
    filterset_fields = ['category__slug']
    search_fields = ['title', 'excerpt']

    def get_queryset(self):
        return (
            BlogPost.objects
            .filter(is_published=True)
            .select_related('category')
        )


class BlogPostDetailView(RetrieveAPIView):
    serializer_class = BlogPostDetailSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        return BlogPost.objects.filter(is_published=True).select_related('category')
