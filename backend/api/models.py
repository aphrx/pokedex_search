from django.db import models

class Pokemon(models.Model):
    name = models.CharField(max_length=255)

class PokemonImageSearch(models.Model):
    url = models.CharField(max_length=255)
    result = models.IntegerField()
