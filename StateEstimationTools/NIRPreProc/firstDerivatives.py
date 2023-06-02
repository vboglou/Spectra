import sys, json
import numpy as np
from numpy import diff


#Convert JSON to python list 
y= json.loads(sys.argv[1])
x= json.loads(sys.argv[2])
#f = float(y[0])
x_float=[]
y_float=[]

#################Convert python lists strings to float#####################
for i in range(len(x)):
    if x[i] != "":
        x_float.append(float(x[i]))
        y_float.append(float(y[i]))
    #y_float.append(y(i))


###############################Calculat the first derivative of the measurement #####################################
dydx = diff(y_float)/diff(x_float)
dydxString =["%.6f" % i for i in dydx]
###############################Send data to web server#################################################################
print(json.dumps(dydx.tolist()))

