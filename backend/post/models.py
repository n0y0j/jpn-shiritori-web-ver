from django.db import models

class Post(models.Model):
  name = models.CharField(null=False, max_length=200)
  score = models.IntegerField(null=False)

  def __str__(self):
        return self.word
