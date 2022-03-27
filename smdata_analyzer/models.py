from django.db import models

# fields = ['date','trade_code','high','low','open','close','volume']
class Stock(models.Model):
    date = models.CharField(max_length=25)
    trade_code = models.CharField(max_length=25)
    high = models.FloatField()
    low = models.FloatField()
    open = models.FloatField()
    close = models.FloatField()
    volume = models.CharField(max_length=25)
