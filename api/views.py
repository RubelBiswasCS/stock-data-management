from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import StockSerializer
from smdata_analyzer.models import Stock

class StockList(APIView):
    def get(self,request):
        stocks = Stock.objects.all()
        stocks = StockSerializer(stocks,many=True)
    
        data = stocks.data
        return Response(data,status=status.HTTP_200_OK)
