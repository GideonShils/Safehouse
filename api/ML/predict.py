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
									db='safehouse')

	try:
		with connection.cursor() as cursor:
			# Read a single record

			print('Rretriving most recent entry attempt...')
			sql = "SELECT * FROM `entries` ORDER BY entry_datetime DESC LIMIT 1"
			cursor.execute(sql)
			result = cursor.fetchone()
			print('Attempt retrival successful!')


			###load the existing model
			print('Loading anomaly classifier...')
			clf = pickle.load(open("/home/jgozal/Desktop/repos/safehouse/api/ML/model.pkl", "rb"))
			print('Classifier load successful!')

			###match these up for correct preprocessing of result
			print('Anomaly classification begin...')
			X = np.array([int(result[0]) * 100, result[1].hour])
			enc = OneHotEncoder([24],[1], sparse=False)
			fit_X = enc.fit_transform(X)
			y_pred = clf.predict(fit_X)
			if y_pred[0]:
				print('Anomaly detected!!! Submitting alert to database!')
				sql = "UPDATE entries SET anomalous_bool = 1 where uid = " + result[0] + " and entry_datetime = '" + result[1].isoformat(' ') + "'"
			else:
				print('Entry accepted. All clear!')
				sql = "UPDATE entries SET anomalous_bool = 0 where uid = " + result[0] + " and entry_datetime = '" + result[1].isoformat(' ') + "'"
			cursor.execute(sql)
			connection.commit()

	finally:
		connection.close()

def main():
	predict()

if __name__ == '__main__':
	main()