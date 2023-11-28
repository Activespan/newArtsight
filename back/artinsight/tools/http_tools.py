from django.http import HttpResponse


#
class WBHttpResponse(HttpResponse):
    def __init__(self, *args, **kwargs):
        super(WBHttpResponse, self).__init__(*args, **kwargs)
        self["Content-Type"] = "application/json"


#
class HttpCreated(WBHttpResponse):
    status_code = 201


#
class HttpAccepted(WBHttpResponse):
    status_code = 202


#
class HttpNoContent(WBHttpResponse):
    status_code = 204

    def __init__(self, *args, **kwargs):
        super(HttpNoContent, self).__init__(*args, **kwargs)
        del self["Content-Type"]


#
class HttpInformation(WBHttpResponse):
    status_code = 200


#
class HttpMultipleChoices(WBHttpResponse):
    status_code = 300


#
class HttpSeeOther(WBHttpResponse):
    status_code = 303


#
class HttpNotModified(WBHttpResponse):
    status_code = 304


#
class HttpBadRequest(WBHttpResponse):
    status_code = 400


#
class HttpUnAuthorized(WBHttpResponse):
    status_code = 401


#
class HttpMissedRequiredField(WBHttpResponse):
    status_code = 402


#
class HttpForbidden(WBHttpResponse):
    status_code = 403


#
class HttpNotFound(WBHttpResponse):
    status_code = 404


#
class HttpMethodNotAllowed(WBHttpResponse):
    status_code = 405


#
class HttpNotAcceptable(WBHttpResponse):
    status_code = 406


#
class HttpMultipleObjectsFound(WBHttpResponse):
    status_code = 407


#
class HttpObjectNotFound(WBHttpResponse):
    status_code = 408


#
class HttpConflict(WBHttpResponse):
    status_code = 409


#
class HttpGone(WBHttpResponse):
    status_code = 410


#
class HttpRequestNotPermitted(WBHttpResponse):
    status_code = 411


#
class HttpUnsupportedMediaType(WBHttpResponse):
    status_code = 415


#
class HttpUnprocessableEntity(WBHttpResponse):
    status_code = 422


#
class HttpTooManyRequests(WBHttpResponse):
    status_code = 429


#
class HttpApplicationError(WBHttpResponse):
    status_code = 500


#
class HttpNotImplemented(WBHttpResponse):
    status_code = 501
