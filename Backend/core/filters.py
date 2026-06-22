import django_filters
from .models import Nota

class FiltroNota(django_filters.FilterSet):
    titulo = django_filters.CharFilter(field_name='titulo', lookup_expr='icontains')
    conteudo = django_filters.CharFilter(field_name='conteudo', lookup_expr='icontains')
    data_criacao = django_filters.DateFilter(field_name='data_criacao', lookup_expr='exact')

    class Meta:
        model = Nota
        fields = ['titulo', 'conteudo', 'data_criacao']