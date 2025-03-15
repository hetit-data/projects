# # # # # # # # # # # # # # # # # # a=3
# # # # # # # # # # # # # # # # # # print(a)
# # # # # # # # # # # # # # # # # # a=6.2
# # # # # # # # # # # # # # # # # # print(a)
# # # # # # # # # # # # # # # # # # c= False
# # # # # # # # # # # # # # # # # # print(c)
# # # # # # # # # # # # # # # # # # d="harry"
# # # # # # # # # # # # # # # # # # print(d)
# # # # # # # # # # # # # # # # # # e= None
# # # # # # # # # # # # # # # # # # print(e)
# # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # f="5"
# # # # # # # # # # # # # # # # # print(int(f)+1)
# # # # # # # # # # # # # # # # # x=6
# # # # # # # # # # # # # # # # # y=6
# # # # # # # # # # # # # # # # # print(x==y)
# # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # import pandas
# # # # # # # # # # # # # # # # df = pandas.read_excel("Book1.xlsx")
# # # # # # # # # # # # # # # # print(df)
# # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # name ='harry'
# # # # # # # # # # # # # # # print(name)
# # # # # # # # # # # # # # # print(name[0:3])
# # # # # # # # # # # # # # # print(name[0:])
# # # # # # # # # # # # # # # print(name[:0])
# # # # # # # # # # # # # # # print(name.upper())
# # # # # # # # # # # # # # # print(name.capitalize())
# # # # # # # # # # # # # # # print(name.isnumeric())
# # # # # # # # # # # # # # # print(name.count('r'))
# # # # # # # # # # # # # # li=[1,9,2,3,0,7]
# # # # # # # # # # # # # # print(type(li))
# # # # # # # # # # # # # # print(li[1])
# # # # # # # # # # # # # # li[1]=5
# # # # # # # # # # # # # # print(li)
# # # # # # # # # # # # # # li.sort()
# # # # # # # # # # # # # # print(li)
# # # # # # # # # # # # # # li.append(78)
# # # # # # # # # # # # # # print(li)
# # # # # # # # # # # # # # li.insert(5,2)
# # # # # # # # # # # # # # print(li)
# # # # # # # # # # # # # # li.extend([1,2,23,4,5])
# # # # # # # # # # # # # # print(li)
# # # # # # # # # # # # # #
# # # # # # # # # # # # # #
# # # # # # # # # # # # # #
# # # # # # # # # # # # # #
# # # # # # # # # # # # # t=("h",1,2,3,4,5,4,23)
# # # # # # # # # # # # # print(t)
# # # # # # # # # # # # # a={"h",1,2,3,2,2,2,2}
# # # # # # # # # # # # # a2={3,2,2,2,2}
# # # # # # # # # # # # # print(a)
# # # # # # # # # # # # #
# # # # # # # # # # # # #
# # # # # # # # # # # # # print(a.pop())
# # # # # # # # # # # # # a.union(a2)
# # # # # # # # # # # # # a.add(992)
# # # # # # # # # # # # # print(a)
# # # # # # # # # # # # #
# # # # # # # # # # # # #
# # # # # # # # # # # # marks={"get":12,"gge":"to bring"}
# # # # # # # # # # # # print(marks["get"])
# # # # # # # # # # # # a=2
# # # # # # # # # # # # match a:
# # # # # # # # # # # #     case 1:
# # # # # # # # # # # #         print("case is 1")
# # # # # # # # # # # #     case 2:
# # # # # # # # # # # #         print("case is 2")
# # # # # # # # # # # #
# # # # # # # # # # # #
# # # # # # # # # # # # for i in range(5):
# # # # # # # # # # # #     print(i+1)
# # # # # # # # # # # #
# # # # # # # # # # # # def hello():
# # # # # # # # # # # #     print("hello")
# # # # # # # # # # # # hello()
# # # # # # # # # # # # def hey(s,e):
# # # # # # # # # # # #     print("hello"+s)
# # # # # # # # # # # #     print("hello")
# # # # # # # # # # # #     print("hello")
# # # # # # # # # # # #     print(e)
# # # # # # # # # # # # hey("het","ty")
# # # # # # # # # # # #
# # # # # # # # # # # def letter(name,date):
# # # # # # # # # # #     sf = f"hy mam my name is {name} and i will not come to schl on this {date}"
# # # # # # # # # # #     print(sf)
# # # # # # # # # # #
# # # # # # # # # # # letter("harry","26 oct 2023")
# # # # # # # # # # #
# # # # # # # # # # #
# # # # # # # # # # #
# # # # # # # # # # #
# # # # # # # # # # # def average(a,b):
# # # # # # # # # # #     return (a+b)/2
# # # # # # # # # # #     print(average(34,32))
# # # # # # # # # # #
# # # # # # # # # # # try:
# # # # # # # # # # #     a=int(input("enter name"))
# # # # # # # # # # #     print(a+3)
# # # # # # # # # # # except Exception as e:
# # # # # # # # # # #     print("some error",e)
# # # # # # # # # # #
# # # # # # # # # # # s="het patel sardar"
# # # # # # # # # # # with open("test.txt","w") as f:
# # # # # # # # # # #     f.write(s)
# # # # # # # # # # #
# # # # # # # # # # class emp:
# # # # # # # # # #     sal=23
# # # # # # # # # #     name ="rohan"
# # # # # # # # # #     def getsalary(self):
# # # # # # # # # #         return self.sal
# # # # # # # # # # rohan= emp()
# # # # # # # # # # print(rohan.sal)
# # # # # # # # # # print(rohan.name)
# # # # # # # # # # class employee:
# # # # # # # # # #     def __init__(self,name,salary):
# # # # # # # # # #         self.name=name
# # # # # # # # # #         self.salary=salary
# # # # # # # # # #
# # # # # # # # # #     def getsal(self):
# # # # # # # # # #         print(self.salary)
# # # # # # # # # #
# # # # # # # # # # rohan=employee("rohan","3433")
# # # # # # # # # # print(rohan.salary)
# # # # # # # # # # print(rohan.name)
# # # # # # # # # #
# # # # # # # # # # rohan.getsal()
# # # # # # # # # class computer:
# # # # # # # # #     def __int__(self):
# # # # # # # # #         print("helloo")
# # # # # # # # #
# # # # # # # # #     def config(self):
# # # # # # # # #         print("config is")
# # # # # # # # #
# # # # # # # # #
# # # # # # # # # comp1=computer()
# # # # # # # # # comp1.config()
# # # # # # # # # class computer1:
# # # # # # # # #     def __init__(self):
# # # # # # # # #         self.name="navin"
# # # # # # # # #         self.age=13
# # # # # # # # #
# # # # # # # # # c1=computer1()
# # # # # # # # # c2=computer1()
# # # # # # # # # c1.name="raashi"
# # # # # # # # # c1.age="12"
# # # # # # # # # print(c1.name)
# # # # # # # # # print(c2.name)
# # # # # # # # #
# # # # # # # # #
# # # # # # # # # class computer2:
# # # # # # # # #     def __init__(self):
# # # # # # # # #         self.name="navin"
# # # # # # # # #         self.age=13
# # # # # # # # #
# # # # # # # # #     def update(self):
# # # # # # # # #         self.age=30
# # # # # # # # #     def compare(self,other):
# # # # # # # # #         if self.age== other.age:
# # # # # # # # #             return True
# # # # # # # # #         else:
# # # # # # # # #             return False
# # # # # # # # #
# # # # # # # # # c1=computer2()
# # # # # # # # # c2=computer2()
# # # # # # # # # c1.name="raashi"
# # # # # # # # # c1.age="12"
# # # # # # # # # if c1.compare(c2):
# # # # # # # # #     print("same")
# # # # # # # # # else:
# # # # # # # # #     print("differ")
# # # # # # # # #
# # # # # # # # #
# # # # # # # # # c1.update()
# # # # # # # # #
# # # # # # # # # print(c1.name)
# # # # # # # # # print(c2.name)
# # # # # # # # # print(c1.age)
# # # # # # # # #
# # # # # # # # #
# # # # # # # # #
# # # # # # # # #
# # # # # # # #
# # # # # # # # class student:
# # # # # # # #     def __init__(self,m1,m2,m3):
# # # # # # # #         self.m1=m1
# # # # # # # #         self.m2=m2
# # # # # # # #         self.m3=m3
# # # # # # # #
# # # # # # # #     def avg(self):
# # # # # # # #         return (self.m1+self.m2+self.m3)/3
# # # # # # # # s1=student(34,323,33)
# # # # # # # # s2=student(1,2,22)
# # # # # # # #
# # # # # # # # print(s1.avg())
# # # # # # # # print(s2.avg())
# # # # # # # #
# # # # # # # # class student:
# # # # # # # #     school="get"
# # # # # # # #     def __init__(self,m1,m2,m3):
# # # # # # # #         self.m1=m1
# # # # # # # #         self.m2=m2
# # # # # # # #         self.m3=m3
# # # # # # # #     # instance
# # # # # # # #
# # # # # # # #     def avg(self):
# # # # # # # #         return (self.m1+self.m2+self.m3)/3
# # # # # # # #     # class method using decorator
# # # # # # # #     @classmethod
# # # # # # # #     def getinfo(cls):
# # # # # # # #
# # # # # # # #         return cls.school
# # # # # # # #
# # # # # # # #     @staticmethod
# # # # # # # #     def info():
# # # # # # # #         print("this is static ")
# # # # # # # # s1=student(1,2,3)
# # # # # # # # s2=student(4,5,6)
# # # # # # # #
# # # # # # # # print(s1.avg())
# # # # # # # # print(s2.avg())
# # # # # # # # print(student.getinfo())
# # # # # # # #
# # # # # # # #
# # # # # # # # student.info()
# # # # # # # #
# # # # # # # class myeditor:
# # # # # # #     def execute(self):
# # # # # # #         print("self")
# # # # # # #         print("made")
# # # # # # #         print("khakhara")
# # # # # # # class laptop:
# # # # # # #     def code(self,ide):
# # # # # # #         ide.execute()
# # # # # # #
# # # # # # # ide=myeditor()
# # # # # # # lap=laptop()
# # # # # # # lap.code(ide)
# # # # # # #
# # # # # # # class myeditor:
# # # # # # #     def execute(self):
# # # # # # #         print("seklfd")
# # # # # # # class laptop:
# # # # # # #     def code(self,ide):
# # # # # # #         ide.execute()
# # # # # # # ide=myeditor
# # # # # # # lap=laptop
# # # # # # # lap.code(ide)
# # # # # # class student:
# # # # # #     def __init__(self,m1,m2):
# # # # # #         self.m1=m1
# # # # # #         self.m2=m2
# # # # # #
# # # # # #     def sum(self,a=None,b=None,c=None):
# # # # # #         if a!=None and b!=None and c!=None:
# # # # # #             s=a+b+c
# # # # # #         elif a!=None and b!=None:
# # # # # #             s=a+b
# # # # # #
# # # # # #         else:
# # # # # #             s=a
# # # # # #         return s
# # # # # #
# # # # # # s1=student(1,2)
# # # # # # print(s1.sum(5))
# # # # # #
# # # # # # class a:
# # # # # #     def show(self):
# # # # # #         print("nokia")
# # # # # # class b(a):
# # # # # #     def show(self):
# # # # # #         print("sak")
# # # # # #
# # # # # # a1=b()
# # # # # # a1.show()
# # # # # # class MyNumbers:
# # # # # #   def __iter__(self):
# # # # # #     self.a = 1
# # # # # #     return self
# # # # # #   def __next__(self):
# # # # # #     if self.a <= 20:
# # # # # #       x = self.a
# # # # # #       self.a += 1
# # # # # #       return x
# # # # # #     else:
# # # # # #       raise StopIteration
# # # # # # myclass = MyNumbers()
# # # # # # myiter = iter(myclass)
# # # # # #
# # # # # # class number:
# # # # # #     def __iter__(self):
# # # # # #         self.a=1
# # # # # #         return self
# # # # # #     def __next__(self):
# # # # # #         if self.a<=20:
# # # # # #             x=self.a
# # # # # #             self.a+=1
# # # # # #             return x
# # # # # #         else:
# # # # # #             raise StopIteration
# # # # # # myclass=number()
# # # # # # myiter=iter(myclass)
# # # # # #
# # # # # #
# # # # # class number:
# # # # #     def __iter__(self):
# # # # #         self.a=1
# # # # #         return self
# # # # #     def __next__(self):
# # # # #         if self.a<=20:
# # # # #             x=self.a
# # # # #             self.a+=1
# # # # #             return x
# # # # #         else
# # # # #             raise StopIteration
# # # # # myclass = number()
# # # # # myiter= iter(myclass)
# # # # #
# # # # #
# # # # #
# # # # a="hellop"
# # # # b=2
# # # # try:
# # # #     print(a/b)
# # # # except Exception as e:
# # # #     print("error",e)
# # # # print("bye")
# # # #
# # # # from time import sleep
# # # # from threading import *
# # # # class hello(Thread):
# # # #     def run(self):
# # # #         for i in range(5):
# # # #             print("Hello")
# # # #             sleep(1)
# # # #
# # # #
# # # # class hi(Thread):
# # # #     def run(self):
# # # #         for i in range(5):
# # # #             print("hi")
# # # #             sleep(1)
# # # #
# # # # t1=hello()
# # # # t2=hi()
# # # #
# # # # t1.start()
# # # # sleep(0.2)
# # # # t2.start()
# # # #
# # # # t1.join()
# # # # t2.join()
# # # # print("bye")
# # # #
# # # # from time import sleep
# # # # from threading import *
# # # # class hello(Thread):
# # # #     def run(self):
# # # #         for i in range(5):
# # # #             print("hello")
# # # #             sleep(1)
# # # #
# # # #
# # # # class hu(Thread):
# # # #     def run(self):
# # # #         for i in range(5):
# # # #             print("hu")
# # # #             sleep(1)
# # # #
# # # #
# # # # t1=hello()
# # # # t2=hu()
# # # #
# # # #
# # # # t1.start()
# # # # sleep(0.3)
# # # # t2.start()
# # # # t1.join()
# # # # t2.join()
# # # # print("bye")
# # # #
# # # #
# # # #
# # # pos=-1
# # # def search(list,n):
# # #     i=0
# # #     for i in range(len(list)):
# # #         if list[i]==n:
# # #             globals()['pos']=i
# # #             return True
# # #
# # #     return False
# # #
# # #
# # # list = [1,23,4,44,55,5]
# # # n=466
# # #
# # # if search(list, n):
# # #     print("found at ",pos+1)
# # #
# # # else:
# # #     print("not found")
# # #
# # #
# # # pos=-1
# # # def search(list,n):
# # #     i=0
# # #     for i in range(len(list)):
# # #         if list[i]==n:
# # #             globals()['pos']=1
# # #             return True
# # #     return False
# # #
# # #
# # # list=[123,3,33,33,33]
# # # n=33
# # #
# # # if search(list,n):
# # #     print("found",pos+1)
# # # else:
# # #     print("not found")
# # #
# # pos=-1
# # def search(list ,n):
# #     l=0
# #     u=len(list)-1
# #     while l<=n:
# #         mid = l+u//2
# #         if list[mid]==n:
# #             globals()['pos']=1
# #             return True
# #         else:
# #             if list[mid]<n:
# #                 l=mid;
# #             else:
# #                 u=mid;
# #
# # list=[12,22,2,222,34,55,66,33,6566,4444,66,4544,6]
# # n=6
# #
# # if search(list , n):
# #     print("found",pos+1)
# # else:
# #     print("sry try again")
#
#
# pos=-1
# def search(list ,n):
#     l=0
#     u=len(list)-1
#     while len(list)<=n:
#         mid=l+u//2
#
#         if list[mid]==n:
#             globals()['pos']=mid
#             return True
#
#         else:
#             if list[mid]<n:
#                 mid=l
#             else:
#                 mid=u
#
def sort(num):
    for i in range(len(num)-1,0,-1):
        for j in range(i):
            if num[j]>num[j+1]:
                temp=num[j]
                num[j]=num[j+1]
                num[j+1]=temp
num=[1,2,9,6,4,2,4,11,1]
sort(num)
print(num)



def sort(nums):
    for i in range(5):
        for j in range(i,6):
            minpos=i
            if nums[j]<nums[minpos]:
                minpos=j
        temp=nums[i]
        nums[i]=nums[minpos]
        nums[minpos]=temp

nums=[1,2,9,6,7,4,3]
sort(nums)

print(nums)



