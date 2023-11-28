#
import os
import uuid
import base64
from pathlib import Path

#
from django.conf import settings
from django.core.files.base import ContentFile
from django.core.files.storage import default_storage

from PIL import Image

# Paths
TMP_DIR = os.path.join(settings.MEDIA_ROOT, "temp_images")
if not os.path.exists(TMP_DIR):
    os.makedirs(TMP_DIR)


if not os.path.exists(settings.STATIC_DIR):
    os.makedirs(settings.STATIC_DIR)

if not os.path.exists(settings.MEDIA_ROOT):
    os.makedirs(Path().joinpath(settings.MEDIA_ROOT, "user_product/images/"))
    os.makedirs(Path().joinpath(settings.MEDIA_ROOT, "user_product/thumbnails/"))


#
class WriterException(Exception):
    #
    def __init__(self, errors):
        self.errors = errors


#
def base64_image(data):
    file_format, base64str = data.split(";base64,")
    ext = file_format.split("/")[-1]
    base64str = base64str.encode("ascii")
    return base64str, ext


#
def data_image_size(data):
    return (len(data) * 3) // 4 - data.count("=", -2)


#
def base64_thumbnail(data, size=(256, 256), is_thumbnail=False):
    base64str, ext = base64_image(data)
    try:
        file_path = os.path.join(TMP_DIR, str(uuid.uuid4()) + "." + ext)
        with open(file_path, "wb") as fh:
            fh.write(base64.b64decode(base64str))

        im = Image.open(file_path)

        image_path = os.path.join(TMP_DIR, str(uuid.uuid4()) + ".jpg")
        im = im.convert("RGB")
        if is_thumbnail:
            im.thumbnail(size, Image.ANTIALIAS)

        im.save(image_path, ext.upper())

        image_base64 = None
        with open(image_path, "rb") as fh:
            image_base64 = base64.b64encode(fh.read()).decode("ascii")

        # Удаление временных файлов
        os.remove(file_path)
        os.remove(image_path)

    except FileNotFoundError as e:
        print("Error: File not found -", str(e))
        return None, None

    except Exception as e:
        print("Error:", str(e))
        return None, None

    return image_base64, "jpg"


#
def file_to_content_file(file, _type, max_size=10 * 1024 * 1024, thumbnail=False):
    name, data = None, None
    if isinstance(file, dict):
        if "name" not in file or "data" not in file:
            return None, False
        name, data = file["name"], file["data"]
        size_bytes = data_image_size(data)
        if size_bytes >= max_size:
            return None, True

    try:
        if data is None:
            return None, False

        if thumbnail:
            base64_bytes, ext = base64_thumbnail(
                data, size=thumbnail, is_thumbnail=True
            )
        else:
            base64_bytes, ext = base64_thumbnail(data)
        name_path = str(
            Path(settings.MEDIA_ROOT).joinpath(_type + str(uuid.uuid4()) + ".jpg")
        )
        d = ContentFile(base64.b64decode(base64_bytes), name=name_path)
        default_storage.save(name_path, d)
        return "/".join(str(d.name).split("/")[-3:]), False

    except Exception:
        return None, False


#
def validate_content_file(args, error_cat=None, field_name=None):
    value, too_big = args
    if too_big:
        raise WriterException({error_cat: {field_name: "File is too big"}})
    elif value is None:
        raise WriterException(
            {error_cat: {field_name: "Couldn't identify file as an image."}}
        )
    return value


#
def manage_content(data):
    preview_file = file_to_content_file(
        data,
        "user_product/images/",
        max_size=settings.MAX_IMAGE_UPLOAD_SIZE,
        thumbnail=False,
    )
    image = validate_content_file(preview_file, error_cat="image", field_name="image")

    thumbnail_file = file_to_content_file(
        data,
        "user_product/thumbnails/",
        max_size=settings.MAX_IMAGE_UPLOAD_SIZE,
        thumbnail=(settings.THUMBNAIL_SIZE),
    )
    thumbnail = validate_content_file(
        thumbnail_file, error_cat="image", field_name="image"
    )
    return image, thumbnail
