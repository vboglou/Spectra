import sys, json
import scipy.signal
import numpy as np


#Convert JSON to python list 
y= json.loads(sys.argv[1])
x= json.loads(sys.argv[2])
firstDer = json.loads(sys.argv[3])
#f = float(y[0])
x_float=[]
y_float=[]
firstDer_float=[]
#################Convert python lists strings to float#####################
for i in range(len(firstDer)):
    if firstDer[i] != "":
        x_float.append(float(x[i]))
        y_float.append(float(y[i]))
        firstDer_float.append(float(firstDer[i]))
    

#################Apply filter to the meassurement################################
yhat = scipy.signal.savgol_filter(firstDer_float, 9, 3) # Second parameter: window size i.e. (9), Third parameter: polynomial order i.e. (3)
#################################################################################
print(json.dumps(yhat.tolist()))
