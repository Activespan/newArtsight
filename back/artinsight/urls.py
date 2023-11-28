"""
URL configuration for artinsight project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from .api.users import ArtUserView
from .api.pictures import PictureView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/v1/users/register", ArtUserView.as_view()),
    path("api/v1/picture/<int:id>", PictureView.as_view()),
    path("api/v1/users/<int:id>", ArtUserView.get_user_info),
    path("api/v1/pictures", PictureView.get_all_pictures),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += staticfiles_urlpatterns()
