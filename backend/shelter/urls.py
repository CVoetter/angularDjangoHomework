from django.conf.urls import url
from django.contrib import admin
from django.urls import path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework_jwt.views import obtain_jwt_token

from . import views

schema_view = get_schema_view(
    openapi.Info(
        title='API',
        default_version='v1'
    ),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('shelter/options', views.shelter_option_list),
    path('species/options', views.species_option_list),
    path('caregiver/options', views.caregiver_option_list),
    path('animal/list', views.animals_list),
    path('animal/create', views.animal_form_create),
    path('animal/<int:pk>/get', views.animal_form_get),
    path('animal/<int:pk>/update', views.animal_form_update),
    path('animal/<int:pk>/delete', views.animal_delete),
    path('shelter/list', views.shelter_list),
    path('shelter/create', views.shelter_form_create),
    path('shelter/<int:pk>/get', views.shelter_form_get),
    path('shelter/<int:pk>/update', views.shelter_form_update),
    path('shelter/<int:pk>/delete', views.shelter_delete),

    url(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    url(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    url(r'^api-token-auth/', obtain_jwt_token),
]
