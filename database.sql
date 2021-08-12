-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE shoppinglist (
	id SERIAL PRIMARY KEY,
	item VARCHAR(80),
	quantity DECIMAL,
	unit VARCHAR(20),
	purchased BOOLEAN DEFAULT FALSE
	);

    INSERT INTO shoppinglist ("item", "quantity", "unit")
	VALUES ('apples', '5', 'lbs'),
		   ('bread', '1', 'loaf'),
		   ('milk', '1', 'gallon'),
		   ('sliced almonds', '2', 'cups'),
		   ('bananas', '1', 'bunch');