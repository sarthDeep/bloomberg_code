# Generated by Django 2.2.10 on 2020-07-31 17:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('foodtype', models.CharField(max_length=120)),
                ('address', models.CharField(max_length=120)),
                ('rating', models.IntegerField()),
                ('contact', models.CharField(max_length=120)),
                ('speciality', models.CharField(max_length=120)),
            ],
        ),
    ]
