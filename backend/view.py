# Importing required modules
from django.shortcuts import render, redirect
from .models import Event
from .forms import AddEventForm

# View function for adding an event
def add_event(request):
    if request.method == 'POST':
        form = AddEventForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = AddEventForm()
    return render(request, 'add_event.html', {'form': form})
