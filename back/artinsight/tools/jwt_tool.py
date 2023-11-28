#
import json
import pytz
import jwt
from datetime import datetime, timedelta

#
from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist

#
from .error_tools import error_status
from ..models.users import CladeUser


#
class JWTClient:

    """
    The JWTClient is implementation of JWT authentication in a web application.
    To do this, you would first need to create a JWTClient object
    and set the secret key and algorithm.
    This JWTClient is decorator based to easy implement JWT Auth to app.

    jwt_client is object of JWTClient class

    @jwt_client
    def post(request):
        // your code here
    """

    _instance = None
    local_tz = pytz.timezone("Asia/Yerevan")

    #
    def __init__(self, secret_key=settings.SECRET_KEY, algorithm="HS256"):
        self.__secret_key = secret_key
        self.__algorithm = algorithm

    #
    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            cls._instance = super().__new__(cls, *args, **kwargs)
        return cls._instance

    #
    def __call__(self, view_func):
        def wrapped_view(request, *args, **kwargs):
            try:
                try:
                    token = request.META.get("HTTP_AUTHORIZATION").split()[1]
                except (KeyError, AttributeError):
                    try:
                        data = json.loads(request.data)
                        token = data["access_token"]
                    except (json.JSONDecodeError, KeyError):
                        try:
                            data = json.loads(request.body)
                            token = data["access_token"]
                        except (json.JSONDecodeError, KeyError):
                            return error_status("Token not found", 404)
                decoded_token = self.decode_jwt(token)
                if decoded_token is None:
                    raise jwt.ExpiredSignatureError

                try:
                    user = CladeUser.objects.get(id=int(decoded_token["user_id"]))
                except ObjectDoesNotExist:
                    return error_status("No such user exists", 404)

                if self.is_authorized(user):
                    return view_func(request, *args, **{"user": user, **kwargs})
                else:
                    return error_status("User not authorized", 401)
            except jwt.DecodeError:
                return error_status("Invalid access token", 401)
            except jwt.ExpiredSignatureError:
                return error_status("Access token expired", 401)

        return wrapped_view

    #
    def is_authorized(self, user):
        return user.user.is_authenticated

    #
    def generate_jwt(self, user, refresh=False, owner=False):
        now = datetime.utcnow().replace(tzinfo=pytz.utc).astimezone(self.local_tz)
        if refresh:
            expiration = now + timedelta(days=24)
        else:
            expiration = now + timedelta(days=1)
        jwt_payload = {
            "user_id": user.id,
            "email": user.user.email,
            "first_name": user.user.first_name,
            "last_name": user.user.last_name,
            "expiration_seconds": (expiration - now).total_seconds(),
            "expiration": str(expiration),
            "issued_at_time": str(now),
        }
        jwt_token = jwt.encode(
            jwt_payload, self.__secret_key, algorithm=self.__algorithm
        )
        return jwt_token

    #
    def decode_jwt(self, token):
        try:
            payload = jwt.decode(
                token, self.__secret_key, algorithms=[self.__algorithm]
            )
            current_time = (
                datetime.utcnow().replace(tzinfo=pytz.utc).astimezone(self.local_tz)
            )

            if "expiration" in payload:
                expiration_time = payload["expiration"]
                if str(current_time) > expiration_time:
                    return None
            return payload
        except (jwt.ExpiredSignatureError, jwt.InvalidTokenError):
            return None

    #
    def refresh_jwt(self, token):
        try:
            payload = self.decode_jwt(token)
            if payload is None:
                return None
            try:
                user = CladeUser.objects.get(id=int(payload["user_id"]))
            except ObjectDoesNotExist:
                return error_status("No such user exist's", 404)

            return self.generate_jwt(user, refresh=True)
        except jwt.DecodeError:
            return error_status("Invalid token", 401)
        except jwt.ExpiredSignatureError:
            return error_status("Access token expired", 401)

    #
    def refresh_jwt_handler(self, view_func):
        def wrapped_view(request, *args, **kwargs):
            try:
                token = request.META.get("HTTP_AUTHORIZATION").split()[1]
            except (AttributeError, KeyError):
                try:
                    data = json.loads(request.data)
                    token = data["refresh_token"]
                except (json.JSONDecodeError, KeyError):
                    try:
                        data = json.loads(request.body)
                        token = data["refresh_token"]
                    except (json.JSONDecodeError, KeyError):
                        return error_status("User not authorized", 401)

            user_info = self.decode_jwt(token)
            try:
                bot_user = CladeUser.objects.get(id=int(user_info["user_id"]))
            except ObjectDoesNotExist:
                return error_status("No such user exist's", 404)

            access_token = self.generate_jwt(bot_user)
            refresh_jwt_token = self.generate_jwt(bot_user, True)
            return view_func(
                request,
                *args,
                **{
                    "access_token": access_token,
                    "refresh_token": refresh_jwt_token,
                    **kwargs,
                }
            )

        return wrapped_view
