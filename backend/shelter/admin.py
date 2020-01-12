from django.contrib import admin
from .models import *


class AnimalAdmin(admin.ModelAdmin): pass


class CaregiverAdmin(admin.ModelAdmin): pass


class ShelterAdmin(admin.ModelAdmin): pass


admin.site.register(Animal, AnimalAdmin)
admin.site.register(Caregiver, CaregiverAdmin)
admin.site.register(Shelter, ShelterAdmin)

