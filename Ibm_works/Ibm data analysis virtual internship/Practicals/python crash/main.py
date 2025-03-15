# # # # # import os
# # # # # if __name__ == '__main__':
# # # # #     x=input("enter to pronounce")
# # # # #
# # # # #     command = f"say {x}"
# # # # #
# # # # #     os.system(command)
# # # # #
# # # # #
# # # # #
# # # #
# # # # import requests
# # # # import json
# # # # city = input("en ter the name ")
# # # # url =f"https://api.tomorrow.io/v4/weather/realtime?location=toronto&apikey=XXX={city}"
# # # # r= requests.get(url)
# # # # print(r.text)
# # # # w=json.loads(r.text)
# # # # print(w["current"]["temp_c"])
# # # #
# # # import array
# # #
# # # for i in range(4):
# # #     for j in range(4):
# # #         print("#",end="")
# # #     print()
# # #
# # # from array import *
# # # vals = array('i',[1,2,2,3,2,1,-1])
# # # print(vals)
# # #
# # # import array as ar
# # # # ar.array()
# # # #
# # from array import *
# # a = array('i',[])
# # n= int(input("enter length"))
# # for i in range(n):
# #     x= int(input("enter val"))
# #     a.append(x)
# #
# # print(a)
# #
# # val=int(input("enter value to search"))
# # k=0
# # for i in a:
# #     if i==val:
# #         print(k)
# #         break
# #
# #     k=k+1
# #
# from numpy import *
# a= linspace(0,15)
# print(a)
# from numpy import *
# a= arange(1,15,2)
# print(a)
#
# a1=array([1,2,3,3,3])
# a2=array([1,2,3,3,3])
# a3=a1+a2
# print(a3)
#
# array1=array([
#     [1,2,3,4,5,6],
#     [4,5,6,7,8,9]
#
# ])
#
#
# print(array1.reshape(3,4))
# print(array1.ndim)
# m = matrix('1,2,3;4,5,6;7,8,9')
# print(m)
# print(m.max())
# def add_sub(x,y):
#     c=x+y
#     d=x-y
#     return c,d
# result1,result2=add_sub(5,4)
# print(result1,result2)
#
#
# def update(x):
#     print(id(x))
#     x=8
#     print(id(x))
#     print("x ",x)
#
# a=10
# print(id(a))
# update(a)
# print("a ",a)
#
#
#
# def person(name,**data):
#     print(name)
#     for i,j in data.items():
#         print(i,j)
#
# person('navin',age=23,city='mumbai',mob=987865)
# a=10
# print(id(a))
# def something():
#     a=9
#     x=globals()['a']
#     print(id(x))
#     print("in fun",a)
#     globals()['a']=15
#
#
#
# something()
#
# print("out ",a)
# def oddeven(lst):
#     even=0
#     odd=0
#     for i in lst:
#         if i%2==0:
#             even+=1
#         else:
#             odd+=1
#
#         return even,odd
# lst=[20,23,2,3,22,33,22,343,2334,44]
# even,odd=oddeven(lst)
# print(even)
# print(odd)
# a=square(5)
# print(a)
# f= lambda a,b:a+b
# result = f(5,6)
# print(result)
# f= lambda a,b:a+b
# result=f(5,6)
# print(result)
#
# from functools import reduce
# nums=[1,2,3,4,45,5]
# evens = list(filter(lambda n:n%2==0 ,nums))
# doubles=list(map(lambda n:n*2,evens))
# print(doubles)
# sum=reduce(lambda a,b:a+b,doubles)
# print(sum)
#
# nums=[1,2,3,4,5]
# evens=list(filter(lambda n:n%2==0,nums))
# evens=list(filter(lambda n:n%2==0,nums))
# def div(a,b):
#     if a<b:
#         a,b=b,a
#         print(a/b)
#
# div(2,4)

# decorators

def div(a,b):
    print(a/b)

def smartdiv(func):
    def inner(a,b):
        if(a<b):
            a,b=b,a
        return func(a,b)
    return inner

div=smartdiv(div)
div(2,4)

