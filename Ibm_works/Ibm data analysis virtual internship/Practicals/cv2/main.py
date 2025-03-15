# import cv2
# img = cv2.imread("robbery-burglary-crime-theft-png-favpng-u2WpgwN6RQreSzwfzseN04bk6.jpg")
# cv2.imshow("het ",img)
# cv2.waitKey(0)
# cv2.destroyAllWindows()
# cv2.destroyWindow()
#
# import cv2
# import numpy as np
# img = cv2.imread(r"robbery-burglary-crime-theft-png-favpng-u2WpgwN6RQreSzwfzseN04bk6.jpg")
# re_img = cv2.resize(img,(300,300))
#
#
# h=np.hstack((re_img,re_img))
#
# v=np.vstack((h,h))
#
# cv2.imshow("het",v)
# cv2.waitKey(0)
# cv2.destroyAllWindows()
#
#
# v = np.array([1,2,3,1,2,3])
# np.hstack((v,v))
#
# print(v)
#
#
#
#
#

#
# import cv2
# import numpy as np
# import os
# img = cv2.imread(r"robbery-burglary-crime-theft-png-favpng-u2WpgwN6RQreSzwfzseN04bk6.jpg")
# re_img = cv2.resize(img,(300,300))
#
#
# h=np.hstack((re_img,re_img))
#
# v=np.vstack((h,h))
#
# cv2.imshow("het",v)
# cv2.waitKey(0)
# cv2.destroyAllWindows()
#
# list_name = os.listdir(r"C:\Users\HET PATEL\Desktop\het")
# print(list_name)
# for name in list_name:
#     path="C:\Users\HET PATEL\Desktop\het"
#     img_name = path + "\\" + name
#     img = cv2.imread(img_name)
#     img = cv2.resize(img,(500,600))
#     cv2.imshow("het",img)
#     cv2.waitKey(0)
#     cv2.destroyAllWindows()
# import cv2
# cap = cv2.VideoCapture(0);
# while(True):
#     ret,frame = cap.read()
#     gray =cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)
#     cv2.imshow('frame',gray)
#     if cv2.waitKey(1) & 0xFF == ord('q'):
#         break
#
#         cap.release()
#         cv2.destroyAllWindows()


import cv2
cap=cv2.VideoCapture(0)
fourcc = cv2.VideoWriter_fourcc(*'XVID')
out = cv2.VideoWriter('output.avi',fourcc,20.0,(640,480))

print(cap.isOpened())
while(cap.isOpened()):
    ret,frame=cap.read()
    if ret == True:
        out.write(frame)
        cv2.imshow('frame',gray)
        if cv2.waitKey(1) & 0xff == ord('q'):
            break
        else:
            break
cap.release()
out.release()
cv2.destroyAllWindows()
