from django.urls import path
from .views import StockList, StockDetail
app_name = 'api'

urlpatterns = [
    path('stock/',StockList.as_view(),name="stocklist"),
    path('stock/<int:pk>/', StockDetail.as_view(),name='stockdetail'),
]
