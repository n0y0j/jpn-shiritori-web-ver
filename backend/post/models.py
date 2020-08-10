from django.db import models

class Post(models.Model):
  word = models.CharField(max_length=20, null=True)
  count = models.IntegerField(null=True)
  start_char= models.CharField(max_length=1, null=True)
  word_mean = models.TextField(null=True)
  nickname = models.CharField(max_length=10, null=True)
  word_list = []

  def data_delete(self, post) :
    return post.object.all().delete()

  def __str__(self):
        return self.word
