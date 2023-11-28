#
import json

#
from django.db import models
from django.contrib import admin
from .users import ArtUser


class Gallery(models.Model):
    user = models.ForeignKey(ArtUser, on_delete=models.CASCADE, blank=True, null=True)
    title = models.CharField(max_length=50)
    image = models.ImageField(upload_to="gallery", blank=True, null=True)
    width = models.FloatField()
    height = models.FloatField()
    date = models.CharField(max_length=100)
    sales_value = models.FloatField()
    description = models.TextField(null=True)
    material = models.CharField(max_length=50)
    purpose = models.CharField(max_length=200)
    show_first = models.BooleanField(default=False)


@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):
    list_display = (
        "id", 
        "user_info",
        "title",
        "sales_value",
        "description",
        "material",
        "purpose",
        "show_first"
    )

    def user_info(self, obj):
        if obj.user:
            return "{} {}".format(obj.user.name, obj.user.surname)
        return None
    user_info.short_description = "Artist"

