from django.test import TestCase, Client
from django.urls import reverse
from api.models import Pokemon, PokemonImageSearch
import json

class TestViews(TestCase):
    def setup(self):
        self.client = Client()
        self.pokemon_url = reverse('pokemon')

    def test_pokemon_list_GET(self):
        self.setup()
        response = self.client.get(self.pokemon_url)
        self.assertEquals(response.status_code, 200)
    
    def test_pokemon_list_POST(self):
        test_url = 'https://firebasestorage.googleapis.com/v0/b/pokedex-b8e96.appspot.com/o/Squirtle2.jpg?alt=media&token=de32d254-9f10-4cea-8af1-c5f84f73c2d3'
        response = self.client.post(self.pokemon_url, {
            'url': test_url
        })

        self.assertEquals(response.status_code, 201)
        self.assertEquals(PokemonImageSearch.objects.first().url, test_url)
        
