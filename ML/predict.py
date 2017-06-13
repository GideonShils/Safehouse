import numpy as np
from sklearn.svm import LinearSVC
import pickle
import datetime as datetime
from sklearn.preprocessing import OneHotEncoder
import pymysql

def predict():
	# Connect to the database
	connection = pymysql.connect(host='127.0.0.1',
	                             user='root',
	                             password='password',
	                             db='db',
	                             cursorclass=pymysql.cursors.DictCursor)

	try:
	    with connection.cursor() as cursor:
	        # Read a single record
	        sql_user1 = "SELECT * FROM `entries` ORDER BY id DESC LIMIT 1"
	        cursor.execute(sql)
	        result = cursor.fetchone()

	        ###load the existing model

			###match these up for correct preprocessing of result
			for entry in data:
				X.append([entry[0], entry[1].hour])
				y.append(entry[2])
			enc = OneHotEncoder()
			X = enc.fit_transform(X)

			pred = clf.predict() #what are we predicting?

			return pred


	finally:
	    connection.close()