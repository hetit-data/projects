from django.shortcuts import render,redirect
from .models import registertable
from .models import feedbacktable,contacttable
from django.contrib import messages
import requests

# Create your views here.
def index(request):
    return render(request,'index.html')

def index2(request):
    return render(request,'index2.html')

def index3(request):
    return render(request,'index3.html')

def form(request):
    return render(request,'form.html')

def form_advanced(request):
    return render(request,'form_advanced.html')

def projects(request):
    return render(request, 'projects.html')

def project_detail(request):
    return render(request, 'project_detail.html')

def contacts(request):
    query = feedbacktable.objects.all()
    context = {
        'data':query
    }
    return render(request, 'contacts.html',context)

def profile(request):
    return render(request, 'profile.html')

def page_403(request):
    return render(request, 'page_403.html')

def page_404(request):
    return render(request, 'page_404.html')

def page_500(request):
    return render(request, 'page_500.html')

def login(request):
    return render(request, 'login.html')

def pricing_tables(request):
    return render(request, 'pricing_tables.html')


def tables_dynamic(request):
        records = {}
        data = requests.get(url="https://invisibleeye.000webhostapp.com/fetchsmokeapi.php")
        livedata = data.json()
        records['smokedata'] = livedata
        print(records)

        return render(request, 'tables_dynamic.html', records)




def ldr(request):
    records = {}
    data = requests.get(url="https://invisibleeye.000webhostapp.com/fetchldrapi.php")
    livedata = data.json()
    records['ldrdata'] = livedata
    print(records)

    return render(request,'ldr_table.html',records)

def fire(request):
    records = {}
    data = requests.get(url="https://invisibleeye.000webhostapp.com/fetchfireapi.php")
    livedata = data.json()
    records['firedata'] = livedata
    print(records)

    return render(request,'fire_table.html',records)

def motion(request):
    records = {}
    data = requests.get(url="https://invisibleeye.000webhostapp.com/fetchmotionapi.php")
    livedata2 = data.json()
    records['motiondata'] = livedata2
    print(records)
    return render(request,'motion_table.html',records)

def warning(request):
    records = {}
    data = requests.get(url="https://invisibleeye.000webhostapp.com/fetchwarningapi.php")
    livedata = data.json()
    records['warningdata'] = livedata
    print(records)

    return render(request,'warning_table.html',records)


def tables(request):
    return render(request,'tables.html')



def fetchregdata(request):
    if request.method == 'POST':
        uname = request.POST.get("username")
        uemail = request.POST.get("useremail")
        upass = request.POST.get("userpass")

        insertdata = registertable(name=uname,email=uemail,password=upass)
        insertdata.save()
        messages.success(request,"successfully registered !!!")

    else:
        messages.error(request,"error occured")

    return render(request,'login.html')


def fetchlogindata(request):
    email = request.POST.get("useremail")
    password = request.POST.get("userpass")

    if email == 'solankishubhamit@gmail.com' and password == '12345':
        return render(request, 'index3.html')

    if request.method == 'POST':
        uemail = request.POST.get("useremail")
        upass = request.POST.get("userpass")

        try:
            userdetails = registertable.objects.get(email=uemail, password=upass)
        except:
            userdetails = None

        if userdetails is not None:
            request.session['user_email'] = uemail
            return render(request, 'tables_dynamic.html')
        else:
            return render(request, 'page_403.html')

    else:
        return render(request, 'login.html')

def fetchfeedback(request):
    if request.method == 'POST':
        message = request.POST.get("message")
        name = request.POST.get("name")
        email = request.POST.get("email")
        des = request.POST.get("des")


        insertdata = feedbacktable(message=message, name=name, email=email, description=des)
        insertdata.save()
        messages.success(request, "DATA SUBMITTED !")

    else:
        messages.error(request, "DATA NOT SUBMITTED")

    return render(request, 'form.html')



def showfeedback(request):
    getproductdata=feedbacktable.objects.all()
    context={
        'data':getproductdata
    }
    return render(request,"contact.html",context)


def fetchcontactdata(request):
    if request.method == 'POST':
        fname = request.POST.get("fname")
        lname = request.POST.get("lname")
        mname = request.POST.get("mname")
        gender = request.POST.get("gender")

        insertdata = contacttable(fname=fname,lname=lname,mname=mname,gender=gender)

        insertdata.save()
        messages.success(request,"contact submitted")


    else:
        messages.error(request, "wrong information")

    return render(request,'profile.html')