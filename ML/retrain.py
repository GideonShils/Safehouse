import numpy as np
from sklearn.svm import LinearSVC
import pickle
import datetime as datetime
from sklearn.preprocessing import OneHotEncoder
import pymysql.cursors

def retrain():
	# Connect to the database
	connection = pymysql.connect(host='127.0.0.1',
	                             user='root',
	                             password='password',
	                             db='db',
	                             cursorclass=pymysql.cursors.DictCursor)

	try:
	    with connection.cursor() as cursor:
	        # Read a single record
	        sql_user1 = "SELECT `entry_datetime`, `anomalous_bool`, `train_bool`, `phone` FROM `entries` WHERE `uid` = 1 AND `train_bool` = 1 ORDER BY id DESC LIMIT 500"
	        sql_user2 = "SELECT `entry_datetime`, `anomalous_bool`, `train_bool`, `phone` FROM `entries` WHERE `uid` = 2 AND `train_bool` = 1 ORDER BY id DESC LIMIT 500"
	        cursor.execute(sql)
	        result = cursor.fetchone()

	        ###figure out data output
			X = []
			y = []

			###match these up for correct preprocessing
			for entry in data:
				X.append([entry[0], entry[1].hour])
				y.append(entry[2])
			enc = OneHotEncoder()
			X = enc.fit_transform(X)

			clf = LinearSVC()
			clf.fit(X, y)

			###how to properly write again...
			return clf


	finally:
	    connection.close()