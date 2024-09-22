from django.http import JsonResponse
from .models import Entrepreneur

def entrepreneur_list(request):
    entrepreneurs = Entrepreneur.objects.all().values('id', 'name', 'business_name')
    return JsonResponse(list(entrepreneurs), safe=False)
