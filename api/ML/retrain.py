import numpy as np
from sklearn.neighbors import KNeighborsClassifier
import pickle
import datetime as datetime
from sklearn.preprocessing import OneHotEncoder
import pymysql.cursors

def retrain():
	# Connect to the database
	connection = pymysql.connect(host='127.0.0.1',
									user='root',
									password='password',
									db='safehouse')

	try:
		with connection.cursor() as cursor:

			print('Beginning retraining process...')
			###figure out data output
			X = []
			y = []

			# Read a single record
			sql_user1 = "SELECT `uid`, `entry_datetime`, `anomalous_bool`, `train_bool`, `phone` FROM `entries` WHERE `uid` = 1 AND `train_bool` = 1 ORDER BY entry_datetime DESC LIMIT 500"
			sql_user2 = "SELECT `uid`, `entry_datetime`, `anomalous_bool`, `train_bool`, `phone` FROM `entries` WHERE `uid` = 2 AND `train_bool` = 1 ORDER BY entry_datetime DESC LIMIT 500"
			print('Gathering user 1 data...')
			cursor.execute(sql_user1)
			result = cursor.fetchall()
			print('User 1 data retrieval success!')

			###match these up for correct preprocessing
			for entry in result:
				X.append([entry[0] * 100, entry[1].hour])
				y.append(entry[2])

			print('Gathering user 2 data...')

			cursor.execute(sql_user2)
			result = cursor.fetchall()
			print('User 2 data retrieval success!')

			###match these up for correct preprocessing
			for entry in result:
				X.append([entry[0] * 100, entry[1].hour])
				y.append(entry[2])

			print('Data preprocessing...')
			enc = OneHotEncoder([24],[1], sparse=False)
			X = enc.fit_transform(X)
			print('Preprocessing complete!')

			clf = KNeighborsClassifier(20,'distance')

			print('Fitting model...')
			clf.fit(X, y)
			print('Training complete!')
			print('Saving model...')
			pickle.dump(clf, open('ML/model.pkl', 'wb'))
			print('Model saved!')

	finally:
		connection.close()

def main():
	retrain()

if __name__ == '__main__':
	main()