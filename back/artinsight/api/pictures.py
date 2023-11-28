#
import json

#
from datetime import datetime

#
from django.views.generic import View
from django.core.exceptions import ObjectDoesNotExist
from django.utils.decorators import method_decorator

#
from ..tools.http_tools import (
    HttpMissedRequiredField,
    HttpObjectNotFound,
    HttpMethodNotAllowed,
)
from ..tools.return_tools import ok_status, data_status, delete_status
from ..tools.error_tools import get_error_message

#
from ..models.users import ArtUser
from ..models.gallery import Gallery
from ..models.exhibitions import Exhibition


class PictureView(View):
    def get(self, request, id):
        picture = Gallery.objects.get(pk=id)

        data = self.get_data(picture)
        return data_status(data)

    @staticmethod
    def get_all_pictures(request):
        pictures = Gallery.objects.all()

        data = {"first": [], "second": []}

        for picture in pictures:
            if picture.show_first:
                data['first'].append(PictureView.get_data(picture))
            else:
                data['second'].append(PictureView.get_data(picture))

        return data_status(data)

    @staticmethod
    def get_data(picture):
        data = {
            "id": picture.id,
            "user": "{} {}".format(picture.user.name, picture.user.surname),
            "title": picture.title,
            "width": picture.width,
            "height": picture.height,
            "date": str(picture.date),
            "sales_value": picture.sales_value,
            "description": picture.description,
            "material": picture.material,
            "purpose": picture.purpose,
            "url": picture.image.name,
        }
        return data
