from drf_yasg.utils import swagger_auto_schema
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response

from shelter.models import Shelter, Animal, Species, Caregiver
from shelter.serializers import ShelterOptionSerializer, AnimalListSerializer, AnimalFormSerializer, \
    SpeciesOptionSerializer, CaregiverOptionSerializer, ShelterListSerializer, ShelterFormSerializer


@swagger_auto_schema(method='GET', responses={200: ShelterOptionSerializer(many=True)})
@api_view(['GET'])
def shelter_option_list(request):
    shelters = Shelter.objects.all()
    serializer = ShelterOptionSerializer(shelters, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='GET', responses={200: SpeciesOptionSerializer(many=True)})
@api_view(['GET'])
def species_option_list(request):
    species = Species.objects.all()
    serializer = SpeciesOptionSerializer(species, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='GET', responses={200: CaregiverOptionSerializer(many=True)})
@api_view(['GET'])
def caregiver_option_list(request):
    caregiver = Caregiver.objects.all()
    serializer = CaregiverOptionSerializer(caregiver, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='GET', responses={200: AnimalListSerializer(many=True)})
@api_view(['GET'])
def animals_list(request):
    animals = Animal.objects.all()
    serializer = AnimalListSerializer(animals, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='GET', responses={200: ShelterListSerializer(many=True)})
@api_view(['GET'])
def shelter_list(request):
    shelters = Shelter.objects.all()
    serializer = ShelterListSerializer(shelters, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='POST', request_body=AnimalFormSerializer, responses={200: AnimalFormSerializer()})
@api_view(['POST'])
def animal_form_create(request):
    data = JSONParser().parse(request)
    serializer = AnimalFormSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='POST', request_body=ShelterFormSerializer, responses={200: ShelterFormSerializer()})
@api_view(['POST'])
def shelter_form_create(request):
    data = JSONParser().parse(request)
    serializer = ShelterFormSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='PUT', request_body=AnimalFormSerializer, responses={200: AnimalFormSerializer()})
@api_view(['PUT'])
def animal_form_update(request, pk):
    try:
        animal = Animal.objects.get(pk=pk)
    except Animal.DoesNotExist:
        return Response({'error': 'Animal does not exist.'}, status=404)

    data = JSONParser().parse(request)
    serializer = AnimalFormSerializer(animal, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='PUT', request_body=ShelterFormSerializer, responses={200: ShelterFormSerializer()})
@api_view(['PUT'])
def shelter_form_update(request, pk):
    try:
        shelter = Shelter.objects.get(pk=pk)
    except Shelter.DoesNotExist:
        return Response({'error': 'Shelter does not exist.'}, status=404)

    data = JSONParser().parse(request)
    serializer = ShelterFormSerializer(shelter, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='GET', responses={200: AnimalFormSerializer()})
@api_view(['GET'])
def animal_form_get(request, pk):
    try:
        animal = Animal.objects.get(pk=pk)
    except Animal.DoesNotExist:
        return Response({'error': 'Animal does not exist.'}, status=404)

    serializer = AnimalFormSerializer(animal)
    return Response(serializer.data)


@swagger_auto_schema(method='GET', responses={200: ShelterFormSerializer()})
@api_view(['GET'])
def shelter_form_get(request, pk):
    try:
        shelter = Shelter.objects.get(pk=pk)
    except Shelter.DoesNotExist:
        return Response({'error': 'Shelter does not exist.'}, status=404)

    serializer = ShelterFormSerializer(shelter)
    return Response(serializer.data)


@api_view(['DELETE'])
def animal_delete(request, pk):
    try:
        animal = Animal.objects.get(pk=pk)
    except Animal.DoesNotExist:
        return Response({'error': 'Animal does not exist.'}, status=404)
    animal.delete()
    return Response(status=204)


@api_view(['DELETE'])
def shelter_delete(request, pk):
    try:
        shelter = Shelter.objects.get(pk=pk)
    except Shelter.DoesNotExist:
        return Response({'error': 'Shelter does not exist.'}, status=404)
    shelter.delete()
    return Response(status=204)
