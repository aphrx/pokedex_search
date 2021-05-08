from django.db import models

def default_value():
    return 'default'

class Pokemon(models.Model):
    name = models.CharField(max_length=255)
    type1 = models.CharField(max_length=255, default=default_value, null=True)
    type2 = models.CharField(max_length=255, default=default_value, null=True)
    desc = models.CharField(max_length=1024, default=default_value)
    hp = models.IntegerField(default=0)
    atk = models.IntegerField(default=0)
    df = models.IntegerField(default=0)
    spa = models.IntegerField(default=0)
    spd = models.IntegerField(default=0)
    spe = models.IntegerField(default=0)

class PokemonImageSearch(models.Model):
    url = models.CharField(max_length=255)
    result = models.IntegerField()
