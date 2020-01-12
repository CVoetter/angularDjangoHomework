from django.db import models


class Shelter(models.Model):

    name = models.TextField()
    street = models.TextField(null=True)
    city = models.TextField(null=True)
    postcode = models.PositiveIntegerField(null=True)
    healthcare = models.BooleanField()

    def __str__(self):
        return self.name


class Species(models.Model):

    name = models.TextField()

    def __str__(self):
        return self.name


class Caregiver(models.Model):

    first_name = models.TextField()
    last_name = models.TextField()
    year_of_birth = models.IntegerField()
    workplace = models.ForeignKey(Shelter, on_delete=models.CASCADE, null=True)   # ManyToOne?
    trained = models.BooleanField()

    def __str__(self):
        return '%s %s (%s)' % (self.first_name, self.last_name, self.year_of_birth)


class Animal(models.Model):

    CHOICES = (
        ('y', 'Yes'),
        ('n', 'No')
    )

    name = models.TextField()
    species = models.ForeignKey(Species, on_delete=models.CASCADE, null=True)
    spayed = models.CharField(max_length=1, choices=CHOICES, null=True)
    entry_date = models.DateField(null=True)
    age = models.PositiveIntegerField()
    shelter = models.ForeignKey(Shelter, on_delete=models.CASCADE, null=True)
    caregiver = models.ManyToManyField('Caregiver', blank=True)

    def __str__(self):
        return self.name
