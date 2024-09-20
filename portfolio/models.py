from django.db import models


class Portfolio(models.Model):
    name = models.CharField(max_length=100)
    picture = models.ImageField(upload_to='users')
    big_title = models.CharField(max_length=100)
    projects = models.ManyToManyField('Project')
    about = models.TextField(default="Write about yourself")
    twitter = models.URLField(blank=True, null=True)
    linkedin = models.URLField(blank=True, null=True)
    github = models.URLField(blank=True, null=True)
    youtube = models.URLField(blank=True, null=True)
    email = models.URLField(blank=True, null=True)

    def __str__(self):
        return f"{self.name} Portfolio"


class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='projects', default='default.jpg')

    def __str__(self):
        return self.title


class ProjectDetail(models.Model):
    project = models.OneToOneField(Project, on_delete=models.CASCADE)
    youtube_demo_link = models.URLField()
    code_link = models.URLField()
    live_link = models.URLField(blank=True, null=True)

    def __str__(self):
        return f"{self.project.title} Details"