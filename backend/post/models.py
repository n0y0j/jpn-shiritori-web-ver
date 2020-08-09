from django.db import models

class Post(models.Model):
  word = models.CharField(max_length=20)
  count = models.IntegerField(null=True)
  start_char= models.CharField(max_length=1, null=True)
  word_list = []



  def __str__(self):
        return self.word
