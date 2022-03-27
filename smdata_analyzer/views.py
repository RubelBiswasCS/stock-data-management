from django.shortcuts import render
import json

def home(request):
    json_data = open('smdata_analyzer/static/json/stock_market_data.json')
    data1 = json.load(json_data) # deserialises it
    # data2 = json.dumps(data1) # json formatted string
    json_data.close()

    template_name='home.html'

    context ={
        "data":data1
    }

    return render(request,template_name=template_name,context=context)
