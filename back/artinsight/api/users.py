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


class ArtUserView(View):
    def post(self, request):
        data = dict(request.POST)
        print(data)
        files = dict(request.FILES)
        galleries = files["gallery"]
        name = data["name"][0]
        surname = data["surname"][0]
        email = data["email"][0]
        address = data["address"][0]
        website = data["website"][0]
        phone = data["phone"][0]
        education = data["education"][0]
        art_type = int(data["art_type"][0])
        style = int(data["style"][0])
        info = data["info"][0]
        exhibitions = data["exhibitions"]
        files_info = json.loads(data["files_info"][0])
        avatar = files["avatar"][0]
        cv = files["cv"][0]
        user = ArtUser.objects.create(
            name=name,
            surname=surname,
            email=email,
            address=address,
            website=website,
            phone=phone,
            education=education,
            art_type=art_type,
            style=style,
            info=info,
            cv=cv,
            avatar=avatar,
        )

        for exhibition in exhibitions:
            exhibition = json.loads(exhibition)
            Exhibition.objects.create(
                user=user,
                name=exhibition["name"],
                type=exhibition["type"],
                venue=exhibition["venue"],
                date=exhibition["date"] if "date" in exhibition else None,
                organizer=exhibition["organizer"],
            ).save()
        for n, item in enumerate(files_info):
            info = files_info[item]
            gal = galleries[n]

            Gallery.objects.create(
                user=user,
                title=info["title"],
                image=gal,
                width=info["width"],
                height=info["height"],
                date=info["date"] if "date" in exhibition else None,
                sales_value=info["sales_value"],
                description=info["description"],
                material=info["material"],
                purpose=info["purpose"],
            ).save()

        return data_status({})

    @staticmethod
    def get_user_info(request, id):
        user = ArtUser.objects.get(pk=id)

        data = {
            "name": user.name,
            "surname": user.surname,
            "website": user.website,
            "education": user.education,
            "art_type": user.get_art_type_display(),
            "style": user.get_art_type_display(),
            "info": user.info,
        }

        return data_status(data)
