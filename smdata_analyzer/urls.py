from django.urls import path
from . import views

app_name = 'smdata_analyze'

urlpatterns = [
    path('',views.home,name='home'),
]
