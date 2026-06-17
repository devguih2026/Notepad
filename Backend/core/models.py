from django.db import models

# A Note model with fields like title, content, and created_at
class Nota(models.Model):
    titulo = models.CharField(max_length=100)
    conteudo = models.TextField()
    data_criacao = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo