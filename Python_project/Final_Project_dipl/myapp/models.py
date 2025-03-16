from django.db import models
from django.utils.safestring import mark_safe

class registertable(models.Model):
    name = models.CharField(max_length=36)
    email = models.EmailField()
    password = models.CharField(max_length=30)


class feedbacktable(models.Model):
    message=models.CharField(max_length=36)
    name = models.CharField(max_length=36)
    email = models.EmailField()
    description = models.TextField()


class contacttable(models.Model):
    fname = models.CharField(max_length=36)
    lname = models.CharField(max_length=36)
    mname = models.CharField(max_length=36)
    gender = models.CharField(max_length=36)