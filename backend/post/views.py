import requests
from django.shortcuts import render
from rest_framework import generics
from .models import Post
from .serializers import PostSerializer
from django.http import JsonResponse
from selenium import webdriver
from bs4 import BeautifulSoup
import time
from rest_framework.decorators import api_view

class ListPost(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class DetailPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

@api_view(['POST'])
def word(request) :
    temp_mean = ''
    mean = []
    valid = False
    Query_word = request.data
    words = Query_word['word']

    game_res = {
        'word_mean': mean,
        'valid': valid
    }
    
    options = webdriver.ChromeOptions()
    options.add_argument('headless')
    options.add_argument('disable-gpu')
    driver = webdriver.Chrome(
        '/usr/bin/chromedriver', chrome_options=options)
    driver.get('https://ja.dict.naver.com/#/search?query=' + words)

    driver.implicitly_wait(3)

    html = driver.page_source
    soup = BeautifulSoup(html, "lxml")

    hotKeys = soup.select(
        "div.component_keyword.has-saving-function > div.row > div.origin > a.link > strong.highlight")

    if (hotKeys != []):
        for key in hotKeys:
            check_text = key.get_text()

        if (words == check_text):
            valid = True
            mean_Keys = soup.select(
                "div#searchPage_entry.section.section_keyword div.component_keyword.has-saving-function div.row ul.mean_list li.mean_item p.mean")

            for mKey in mean_Keys:
                temp_mean += mKey.get_text()

        mean = temp_mean.replace('\t', '').split('\n\n')

        for i in range(len(mean)):
            mean[i]=mean[i].strip('\n ')
            

        game_res = {
            'word_mean': mean,
            'valid': valid
        }

    return JsonResponse(game_res)

@api_view(["POST"])
def rank(request):
    query = request.data

    user = {
        'name': query['userName'],
        'score': query['count']
    }

    queryset = Post.objects.all()
    qs1 = queryset.filter(name=query['userName'])
    post_instance = Post.objects.get(id=qs1[0].id)
    if (qs1):
        if ( user['score'] > post_instance.score ):
            post_instance.score = user['score']
            post_instance.save()
    else:
        requests.post("http://127.0.0.1:8000/api/", data=user)

    return JsonResponse(user)
