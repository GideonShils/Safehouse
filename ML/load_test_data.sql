load data local infile '/home/jgozal/Desktop/repos/safehouse/ML/training_data.csv' into table entries fields terminated by ','
  enclosed by '"'
  escaped by '"'
  lines terminated by '\r\n'
  ignore 1 lines
    (uid, entry_datetime, anomalous_bool, train_bool, phone);