#
import json

#
from django.db import models
from django.contrib import admin
from django.contrib.auth.models import User


#
class ArtUser(models.Model):
    ART_TYPES=[
        (1, 'Painting'),
        (2, 'Photography'),
        (3, 'Sculpture')
    ]

    STYLE = [
        (1, 'Cubism'),
        (2, 'Futurism'),
        (3, 'Dadaism'),
        (4, 'Surrealism'),
        (5, 'Pop Art'),
        (6, 'Street Art'),
        (7, 'Documentary'),
        (8, 'Modern'),
        (9, 'Abstractionism'),
        (10, 'Realism')
    ]

    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    address = models.TextField(null=True)
    website = models.URLField(max_length=200)
    phone = models.CharField(max_length=15)
    education = models.CharField(max_length=50)
    art_type = models.PositiveSmallIntegerField(choices=ART_TYPES)
    style = models.PositiveSmallIntegerField(choices=STYLE)
    info = models.TextField(null=True)
    avatar = models.ImageField(upload_to='users/avatar/', blank=True, null=True)
    cv = models.FileField(upload_to='users/cv/', blank=True, null=True)
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return str({"id": self.id, "name": self.name})

    def to_dict(self):
        return {
            "id": self.id,
            "full_name": self.user.get_full_name(),
        }



@admin.register(ArtUser)
class ArtUserAdmin(admin.ModelAdmin):
    pass
