import cv2
import glob

i = 0

#for name in glob.glob('backgroundAnim.gif'):
    #i = i + 1
file = cv2.imread("backgroundAnim.gif", 1)
resize = cv2.resize(file, (0, 0), fx = 0.4, fy = 0.4)
cv2.imwrite("backgroundAnim.gif", resize)