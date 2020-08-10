from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListPost.as_view()),
    path('<int:pk>/', views.DetailPost.as_view()),
    path('word/', views.word, name="word"),
    path('home/', views.home, name="home")
]