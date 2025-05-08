-- Drop the database if it exists
DROP DATABASE IF EXISTS CSCI4410;

-- Create the database if it does not exist
CREATE DATABASE IF NOT EXISTS CSCI4410;
USE CSCI4410;

-- Drop the Customers table if it exists
DROP TABLE IF EXISTS Students;

-- Create the Students table with CustomerID as AUTO_INCREMENT and PRIMARY KEY
CREATE TABLE Students (
	ID INT(8) AUTO_INCREMENT PRIMARY KEY,
	Name VARCHAR(30),
	BlueCard VARCHAR(30),
	Major VARCHAR(30),
	ClassLevel VARCHAR(30),
	Email VARCHAR(30),
	Gender VARCHAR(30),
	Age INT(8),
	Phone VARCHAR(30)
);

-- Insert records into Customers (no need to insert CustomerID manually!)
INSERT INTO Students (Name, BlueCard, Major, ClassLevel, Email, Gender, Age, Phone)
VALUES 
('John Doe', '01234567', 'Computer Science', 'Freshman', 'DoeJohn@mtsu.edu', 'Male', 19, '123-456-7890'),
('Jane Doe', '07654321', 'Mathematics', 'Senior', 'DoeJane@mtsu.edu', 'Female', 22, NULL),
('Mary Mia', '09872345', 'Music', 'Senior', 'MaryMia@mtsu.edu', 'Female', 22, '615-123-3344'),
('Michael Jame', '07234589', 'Business', 'Junior', 'MichaelJame@mtsu.edu', 'Male', 20, '615-232-1155'),
('Daniel Jack', '04135892', 'Computer Science', 'Sophomore', 'DanielJack@mtsu.edu', 'Male', 19, '615-333-2266'),
('Lucy Kate', '72358924', 'Computer Science', 'Freshman', 'LucyKate@mtsu.edu', 'Female', 18, '976-111-4567'),
('Lauren Spade', '05896294', 'Computer Science', 'Senior', 'LaurenSpade@mtsu.edu', 'Female', 22, '756-222-1478'),
('Emma Vivian', '67451144', 'Mathematics', 'Sophomore', 'EmmaVivian@mtsu.edu', 'Female', 20, '546-333-7459'),
('Ada Lane', '66655544', 'Art', 'Junior', 'AdaLane@mtsu.edu', 'Female', 19, '765-777-2255'),
('Alan Parker', '88833322', 'Business', 'Senior', 'AlanParker@mtsu.edu', 'Male', 24, '999-222-5588')
