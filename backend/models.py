# Importing required modules
from django.db import models

# Creating model class for the Event table
class Event(models.Model):
    event_name = models.CharField(max_length=50)
    data = models.DateField()
    time = models.TimeField()
    location = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/')
    is_liked = models.BooleanField(default=False)

    # Adding string representation of the object
    def __str__(self):
        return self.event_name
