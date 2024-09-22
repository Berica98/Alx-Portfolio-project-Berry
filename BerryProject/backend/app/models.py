from django.db import models

class Entrepreneur(models.Model):
    name = models.CharField(max_length=100)
    bio = models.TextField()
    business_name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

