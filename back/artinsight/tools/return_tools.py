#
import json

#
from django.http import HttpResponse


#
def bad_status():
    return HttpResponse(
        json.dumps(
            {
                "status": "ok",
            }
        ),
        status=401,
        content_type="application/json",
    )


#
def data_status(data):
    return HttpResponse(
        json.dumps({"data": data, "status": "ok"}),
        status=200,
        content_type="application/json",
    )


#
def ok_status():
    return HttpResponse(
        json.dumps({"status": "ok"}), status=200, content_type="application/json"
    )


#
def delete_status():
    return HttpResponse(
        json.dumps({"status": "ok"}), status=202, content_type="application/json"
    )


#
def not_auth():
    return HttpResponse(
        json.dumps(
            {
                "error": "User not authorized",
            }
        ),
        status=401,
        content_type="application/json",
    )
