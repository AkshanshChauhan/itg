import cv2
import glob

i = 0

for name in glob.glob('*.png'):
    i = i + 1
    file = cv2.imread("%s"%name, 1)
    print(name)
    resize = cv2.resize(file, (0, 0), fx = 0.2, fy = 0.2)
    cv2.imwrite(name, resize)