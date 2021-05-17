DROP DATABASE IF EXISTS employee_tracker_db;
CREATE database employee_tracker_db;
USE employee_tracker_db;
CREATE TABLE department (
id INT AUTO_INCREMENT,
PRIMARY KEY (id),
name VARCHAR(30) UNIQUE NOT NULL
);
CREATE TABLE role (
id INT  AUTO_INCREMENT,
title VARCHAR(30),
salary DECIMAL(6,2),
department_id INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (department_id) REFERENCES department(id)
);
CREATE TABLE employee (
id INT AUTO_INCREMENT,
first_name VARCHAR(30)  UNIQUE NOT NULL,
last_name VARCHAR(30) UNIQUE NOT NULL,
role_id INT ,
manager_id INT,
PRIMARY KEY (id),
FOREIGN KEY (role_id) REFERENCES role(id)
);