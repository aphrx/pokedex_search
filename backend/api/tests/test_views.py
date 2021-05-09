from django.test import TestCase, Client
from django.urls import reverse
from api.models import Pokemon, PokemonImageSearch
import json

class TestViews(TestCase):
    def setup(self):
        self.client = Client()
        self.pokemon_url = reverse('pokemon')

    # Test status code for GET ALL
    def test_pokemon_list_GET(self):
        self.setup()
        response = self.client.get(self.pokemon_url)
        self.assertEquals(response.status_code, 200)
    
    # Test status code for POST NONE
    def test_pokemon_list_POST_no_data(self):
        self.setup()
        response = self.client.post(self.pokemon_url, {})
        self.assertEquals(response.status_code, 400)

    # Test status code for POST Abra
    def test_pokemon_list_POST_sample(self):
        self.setup()
        response = self.client.post(self.pokemon_url, {
            'url': 'https://firebasestorage.googleapis.com/v0/b/pokedex-b8e96.appspot.com/o/pokemon%2FAbra.gif?alt=media&token=702a6430-4198-4187-b247-229ff85ca56d'
        })
        self.assertEquals(response.status_code, 201)

