from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import PokemonSerializer
from .models import Pokemon

class PokemonList(APIView):
    def get(self, request):
        queryset = Pokemon.objects.all()
        s_query = self.request.GET.get('search')
        if s_query is not None:
            queryset = queryset.filter(name__contains=s_query)
        serializer = PokemonSerializer(queryset, many=True)
        return Response(serializer.data)
