from django.db import models

class Stock(models.Model):
    date = models.CharField(max_length=25)
    trade_code = models.CharField(max_length=25)
    high = models.FloatField()
    low = models.FloatField()
    open = models.FloatField()
    close = models.FloatField()
    volume = models.CharField(max_length=25)
