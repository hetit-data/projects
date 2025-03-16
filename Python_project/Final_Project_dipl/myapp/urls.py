from django.urls import path
from django.contrib import admin
from . import views
urlpatterns = [
    path('',views.login,name='login.html'),
    path('index.html', views.index, name='index.html'),
    path('index2.html', views.index2, name='index2.html'),
    path('index3.html', views.index3, name='index3.html'),
    path('tables_dynamic.html', views.tables_dynamic, name='tables_dynamic.html'),
    path('form.html', views.form, name='form.html'),
    path('form_advanced.html', views.form_advanced, name='form_advanced.html'),
    path('projects.html', views.projects, name='projects.html'),
    path('project_detail.html', views.project_detail, name='project_detail.html'),
    path('contacts.html', views.contacts, name='contacts.html'),
    path('profile.html', views.profile, name='profile.html'),
    path('page_403.html', views.page_403, name='page_403.html'),
    path('page_404.html', views.page_404, name='page_404.html'),
    path('page_500.html', views.page_500, name='page_500.html'),
    path('login.html', views.login, name='login.html'),
    path('pricing_tables.html', views.pricing_tables, name='pricing_tables.html'),
    path('tables.html', views.tables, name='tables'),
    path('ldr_table.html', views.ldr, name='ldr_table'),
    path('motion_table.html', views.motion, name='motion_table'),
    path('warning_table.html', views.warning, name='warning_table'),
    path('fire_table.html', views.fire, name='fire_table'),

    path('fetchregdata', views.fetchregdata, name='fetchregdata'),
    path('fetchlogindata', views.fetchlogindata, name="fetchlogindata"),
    path('fetchfeedback', views.fetchfeedback, name='fetchfeedback'),
    path('showfeedback', views.showfeedback, name="showfeedback"),
    path('fetchcontactdata', views.fetchcontactdata, name="fetchcontactdata")

]

