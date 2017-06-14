load data local infile '/home/jgozal/Desktop/repos/safehouse/api/ML/training_data.csv' into table entries 
fields terminated by ','
  enclosed by '"'
  escaped by '"'
  lines terminated by '\n'
  ignore 1 lines
    (uid, entry_datetime, anomalous_bool, train_bool, phone, code);