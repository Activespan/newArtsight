#
from django.db import models
from django.contrib import admin

from .users import ArtUser


class Exhibition(models.Model):
    TYPE = [(1, "Individual"), (2, "Group")]
    user = models.ForeignKey(ArtUser, on_delete=models.CASCADE, blank=True, null=True)
    name = models.CharField(max_length=200)
    type = models.PositiveSmallIntegerField(choices=TYPE)
    venue = models.CharField(max_length=100)
    date = models.CharField(max_length=100)
    organizer = models.CharField(max_length=50)


@admin.register(Exhibition)
class ExhibitionAdmin(admin.ModelAdmin):
    pass
