from django import forms
from .models import Event

class AddEventForm(forms.ModelForm):
    class Meta:
        model = Event
        fields = ['event_name', 'data', 'time', 'location', 'image']
