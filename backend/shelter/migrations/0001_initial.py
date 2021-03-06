# Generated by Django 2.2.7 on 2019-12-20 16:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Shelter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('street', models.TextField(null=True)),
                ('city', models.TextField(null=True)),
                ('postcode', models.PositiveIntegerField(null=True)),
                ('healthcare', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='Species',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Caregiver',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.TextField()),
                ('last_name', models.TextField()),
                ('year_of_birth', models.IntegerField()),
                ('trained', models.BooleanField()),
                ('workplace', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='shelter.Shelter')),
            ],
        ),
        migrations.CreateModel(
            name='Animal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('spayed', models.CharField(choices=[('y', 'Yes'), ('n', 'No')], max_length=1, null=True)),
                ('entry_date', models.DateField(null=True)),
                ('age', models.PositiveIntegerField()),
                ('caregiver', models.ManyToManyField(blank=True, to='shelter.Caregiver')),
                ('shelter', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='shelter.Shelter')),
                ('species', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='shelter.Species')),
            ],
        ),
    ]
