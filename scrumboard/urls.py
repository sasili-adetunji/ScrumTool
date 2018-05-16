from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('scrum/', include('scrum.urls')),
    url(r'^$', TemplateView.as_view(template_name='scrum/home.html')),
    url(r'^auth_api/', include('auth_api.urls')),


]
