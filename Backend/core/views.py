from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Nota

from .serializers import (
    NotaSerializer
)

"""from .filters import (
    FiltroPet, FiltroEstado, FiltroCidade, FiltroEndereco,
    FiltroFuncionario, FiltroCliente
)"""


class NotaViewSet(viewsets.ModelViewSet):
    queryset = Nota.objects.all()
    serializer_class = NotaSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
   # filterset_class = FiltroNota
    ordering_fields = ['titulo', 'conteudo', 'data_criacao']
    ordering = ['titulo']
    search_fields = ['titulo', 'conteudo']