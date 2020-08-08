from django.shortcuts import render
from rest_framework import generics
from .models import Post
from .serializers import PostSerializer
from django.http import JsonResponse

class ListPost(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class DetailPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


def word (request) :
    print(request.POST)
    return JsonResponse ({ 'response_text': 'hello world!'})
