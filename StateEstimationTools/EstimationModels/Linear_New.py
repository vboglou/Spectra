import numpy as np
from sklearn.linear_model import LinearRegression

#Εισαγωγή δεδομένων σε πρώτη φάση χειροκίνητα 
#Πρέπει να μπαίνουν χειροκίνητά ή αυτόματά από τα αποτελέσματα του Binventory για το σιλό-οδηγό
#x = np.array([5, 15, 25, 35, 45, 55]).reshape((-1, 1))
#y = np.array([11, 21, 29, 42, 48, 61])
x = np.array([5, 20]).reshape((-1, 1))
y = np.array([10, 30])

#Δημιουργία μοντέλου Γραμμικής Παλινδρόμησης
model = LinearRegression()
model.fit(x, y)
model = LinearRegression().fit(x, y)

#Αποτελέσματα για τον συντελεστή συσχέτισης των δεδομένων που εισήχθησαν
r_sq = model.score(x, y)
print('coefficient of determination:', r_sq)

print('intercept:', model.intercept_)
print('slope:', model.coef_)

#Εκτύπωση τιμών, όπως αυτές βγαίνουν μετά την επεξεργασία από τον αλγόριθμο
y_pred = model.intercept_ + model.coef_ * x
print('predicted response:', y_pred, sep='\n')

#Εισαγωγή νέας τιμής για να γίνει η αντίστοιχη πρόβλεψη-διόρθωσή της
#Αυτός ο πίνακας πρέπει να συμπληρώνεται από τα αποτελέσματα του Binventory για τα υπόλοιπα σιλό
a = np.array([50]).reshape((-1, 1))

#Τα αποτελέσματα του κώδικα να αποθηκεύονται στα αντίστοιχα σιλό
y_pred = model.predict(a)
print('predicted response_1:', y_pred, sep='\n')

