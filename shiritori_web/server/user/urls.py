from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListUser.as_view()),
    path('<int:pk>/', views.DetailUser.as_view()),
    path('word/', views.word, name="word"),
    path('rank/', views.rank, name="rank")
]