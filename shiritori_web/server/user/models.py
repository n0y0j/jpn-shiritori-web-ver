from django.db import models

class User(models.Model):
    name = models.CharField(null=False, max_length=10)
    score = models.IntegerField(null=False)