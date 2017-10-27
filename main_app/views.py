# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def index(request):

	return render(request, 'main_app/home.html')

def house(request):
	return render(request, 'main_app/house2.html')