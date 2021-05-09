from django.db import models

def default_value():
    return 'default'

class Pokemon(models.Model):
    name = models.CharField(max_length=255)
    type1 = models.CharField(max_length=255, null=True)
    type2 = models.CharField(max_length=255, null=True)
    desc = models.CharField(max_length=1024)
    hp = models.IntegerField()
    atk = models.IntegerField()
    df = models.IntegerField()
    spa = models.IntegerField()
    spd = models.IntegerField()
    spe = models.IntegerField()

class PokemonImageSearch(models.Model):
    url = models.CharField(max_length=255)
    result = models.IntegerField()
