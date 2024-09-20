from django.shortcuts import render
from .models import Portfolio



def index(request):

    portfolio = Portfolio.objects.first()
    projects = portfolio.projects.all()

    context = {
        'portfolio': portfolio,
        'projects': projects,
    }

    return render(request, 'portfolio/index.html', context)

