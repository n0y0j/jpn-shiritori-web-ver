from django.http import JsonResponse, HttpResponse
from django.shortcuts import render
from rest_framework import generics
from rest_framework.decorators import api_view
from .models import User
from .serializers import UserSerializer
from selenium import webdriver
from bs4 import BeautifulSoup
import time
import lxml

class ListUser(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class DetailUser(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

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
        '/home/n0y0j/workspace/jpn-shiritori-web-ver/shiritori_web/server/chromedriver', chrome_options=options)
    driver.get('https://ja.dict.naver.com/#/search?query=' + words)
    time.sleep(1)

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
                "div#searchPage_entry.section.section_keyword > div.component_keyword.has-saving-function > div.row > ul.mean_list > li.mean_item p.mean")

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

    queryset = User.objects.all()
    qs1 = queryset.filter(name=query['userName'])

    if (qs1):
        user_instance = User.objects.get(id=qs1[0].id)
        if ( user['score'] > user_instance.score ):
            user_instance.score = user['score']
            user_instance.save()
    else:
        p1 = User(name=user['name'], score=user['score'])
        p1.save()

    return HttpResponse(user)