from django.urls import path
from .views import StockList
app_name = 'api'

urlpatterns = [
    path('stock/',StockList.as_view(),name="stock"),
    
]
