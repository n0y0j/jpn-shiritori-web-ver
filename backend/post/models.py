from django.db import models

class Post(models.Model):
  word_mean = models.TextField(null=True)
  valid = models.BooleanField(null=False)

  def __str__(self):
        return self.word
