from rest_framework import serializers
from smdata_analyzer.models import Stock

class StockSerializer(serializers.ModelSerializer):

    class Meta:
        model = Stock
        fields = ['id','date','trade_code','high','low','open','close','volume']
