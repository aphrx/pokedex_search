from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import PokemonSerializer, PokemonImageSearchSerializer
from .models import Pokemon, PokemonImageSearch
from .classifier.model import Model

class PokemonList(APIView):
    def get(self, request):
        pokemons = Pokemon.objects.all()
        query = self.request.GET.get('search')
        if query is not None:
            pokemons = pokemons.filter(name__contains=s_query)
        serializer = PokemonSerializer(pokemons, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        url = ""
        serializer = PokemonImageSearchSerializer(data=request.data)
        print(serializer)
        print(serializer.is_valid())
        if serializer.is_valid():
            url = serializer.data.get("url")
            print(url)
            m = Model(url)
            m.execute()
            return Response({'Loading'}, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
    