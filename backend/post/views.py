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

@api_view(["POST"])
def word(request) :
    mean = []
    a = ''
    Query_word = request.data
    words = Query_word['word']
    
    options = webdriver.ChromeOptions()
    options.add_argument('headless')
    options.add_argument('disable-gpu')
    driver = webdriver.Chrome(
        '/usr/bin/chromedriver', chrome_options=options)
    driver.get('https://ja.dict.naver.com/#/search?query=' + words)
    print(words)

    time.sleep(3)

    html = driver.page_source
    soup = BeautifulSoup(html, "lxml")

    hotKeys = soup.select(
        "div.component_keyword.has-saving-function div.row div.origin a.link strong.highlight")

    for key in hotKeys:
        check_text = key.get_text()

    if (words == check_text):
        mean_Keys = soup.select(
            "div#searchPage_entry.section.section_keyword div.component_keyword.has-saving-function div.row ul.mean_list li.mean_item p.mean")

        for mKey in mean_Keys:
            a += mKey.get_text()
        


    mean = a.replace('\t', '').split('\n\n')


    for i in range(len(mean)):
        mean[i]=mean[i].strip('\n ')

    print(mean)


    return JsonResponse (request.POST)
