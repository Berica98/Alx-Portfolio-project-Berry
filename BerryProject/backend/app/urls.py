from django.urls import path
from . import views

urlpatterns = [
    path('api/entrepreneurs', views.entrepreneur_list, name='entrepreneur_list'),
]
