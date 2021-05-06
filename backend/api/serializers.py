from rest_framework import serializers
from .models import Pokemon, PokemonImageSearch

class PokemonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pokemon
        fields = ('id', 'name')

class PokemonImageSearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = PokemonImageSearch
        fields = ('id', 'url') 