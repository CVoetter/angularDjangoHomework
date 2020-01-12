from rest_framework import serializers
from .models import Shelter, Animal, Species, Caregiver


class ShelterOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shelter
        fields = ['id', 'name', 'street', 'city', 'postcode', 'healthcare']


class SpeciesOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Species
        fields = ['id', 'name']


class CaregiverOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Caregiver
        fields = ['id', 'first_name', 'last_name']


class AnimalListSerializer(serializers.ModelSerializer):
    shelter_name = serializers.SerializerMethodField()
    species_name = serializers.SerializerMethodField()

    class Meta:
        model = Animal
        fields = ['id', 'name', 'species_name', 'shelter_name']

    def get_shelter_name(self, obj):
        return obj.shelter.name if obj.shelter else ''

    def get_species_name(self, obj):
        return obj.species.name if obj.species else ''


class ShelterListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Shelter
        fields = ['id', 'name', 'street', 'city', 'postcode', 'healthcare']


class AnimalFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = Animal
        fields = '__all__'


class ShelterFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = Shelter
        fields = ['id', 'name', 'street', 'city', 'postcode', 'healthcare']
