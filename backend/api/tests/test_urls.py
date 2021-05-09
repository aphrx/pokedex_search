from django.test import SimpleTestCase
from django.urls import reverse, resolve
from api.views import PokemonList

class TestUrls(SimpleTestCase):

    # Test if /api/pokemon endpoint is resolved
    def test_list_url_is_resolved(self):
        url = reverse('pokemon')
        self.assertEquals(resolve(url).func.view_class, PokemonList)
