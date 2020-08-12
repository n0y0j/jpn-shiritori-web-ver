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
    


def home(request):
    Query_name = request.POST
    words = Query_name['name']
    print(words)
    return JsonResponse (request.POST)

def word(request) :
    Query_word = request.POST
    words = Query_word['word']
    print(words)
    return JsonResponse (request.POST)
