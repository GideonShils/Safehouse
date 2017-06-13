import numpy as np
from sklearn.neighbors import KNeighborsClassifier
import pickle
import datetime as datetime
from sklearn.preprocessing import OneHotEncoder
import csv

def generateBakedData(numUsers=2):
	phoneNumbers = [19293442441, 13477627432]
	entryData = []
	for i in range(2): #each user
		for j in range(5000): #500 entries per user
			randMonth = np.random.randint(1,13)
			if randMonth in [1,3,5,7,8,10,12]:
				randDay = np.random.randint(1,32)
			elif randMonth in [4,6,9,11]:
				randDay = np.random.randint(1,31)
			else:
				randDay = np.random.randint(1,29)
			randMinute = np.random.randint(0,60)
			if i == 0:
				randHour = np.random.choice([np.random.randint(17,21), np.random.randint(0,17), np.random.randint(21,24)], 1, p=[.9,.05, .05])
				if randHour < 17 or randHour >= 21:
					anomalous = True
				else:
					anomalous = False
			else:
				randHour = np.random.choice([np.random.randint(8,11), np.random.randint(0,8), np.random.randint(11,24)], 1, p=[.9,.05, .05])
				if randHour < 8 or randHour >= 11:
					anomalous = True
				else:
					anomalous = False
			randomDateTime = datetime.datetime(year=2016, month=randMonth, day=randDay, hour=randHour, minute=randMinute)
			#uid, biased random attempt time, anomalous based on time, yes train, phone number (5 cols)
			entryData.append([i, randomDateTime, anomalous, True, phoneNumbers[i]])
	return entryData

def trainModel(data):
	X = []
	y = []
	for entry in data:
		X.append([entry[0] * 100, entry[1].hour])
		y.append(entry[2])
	enc = OneHotEncoder([24],[1], sparse=False)
	X = enc.fit_transform(X)

	clf = KNeighborsClassifier(20,'distance')
	clf.fit(X, y)
	return clf

def saveData(data):
	with open('training_data.csv', 'w') as myfile:
	    wr = csv.writer(myfile, quoting=csv.QUOTE_ALL)
	    wr.writerows(data)

def saveModel(learnedModel):
	pickle.dump(learnedModel, open("ML/model.pkl", "wb"))

def testModel(learnedModel):
	X = [[0,18],[0,23],[0,4],[100,8],[100,10],[100,18],[100,20]]
	enc = OneHotEncoder([24],[1], sparse=False)
	fit_X = enc.fit_transform(X)
	y_pred = learnedModel.predict(fit_X)
	print(y_pred)

def main():
	entryData = generateBakedData()
	learnedModel = trainModel(entryData)
	testModel(learnedModel)
	saveData(entryData)
	saveModel(learnedModel)

if __name__ == '__main__':
	main()