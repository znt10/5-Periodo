
from django.contrib import admin
from django.urls import include, path
from app.api.v1.router import urlpatterns as api_urlpatterns

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(api_urlpatterns)),
]
