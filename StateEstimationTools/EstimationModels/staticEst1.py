import numpy as np
import sys, json
import scipy.signal

#Ο κώδικας εκτελείται αυτόματα μόλις οι σταθμοί μέτρησης στείλουν φάσματα στο backend σύστημα του SCADA. 
x= json.loads(sys.argv[1])
Weights = json.loads(sys.argv[2])
WavelengthInd = json.loads(sys.argv[3])
x_float=[]

for i in range(len(x)):
    if x[i] != "":
        x_float.append(float(x[i]))
      
#Υπολογισμός τιμών κόμβων Αασαφούς συνεκτικού γράφου που σχετίζονται με τα 5 πρώτα μήκη κύματος που παρουσίασαν τη μεγαλύτερη συσχέτιση
Input=Weights[4-1]*x[WavelengthInd[0]]+Weights[5-1]*x[WavelengthInd[1]]+Weights[6-1]*x[WavelengthInd[2]]+Weights[7-1]*x[WavelengthInd[3]]+Weights[8-1]*x[WavelengthInd[4]];
#print(Input)

#Υπολογισμός εκτίμησης τιμής ζητούμενης παραμέτρου (Υγρασία/Πρωτείνη)
yEst=np.power(Weights[9-1]*Input,3) + np.power(Weights[1-1]*Input,2) + np.power(Weights[2-1]*Input,1) + Weights[3-1];
print(yEst)