DROP DATABASE IF EXISTS employee_tracker_db;
CREATE database employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE employee (
id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30)  UNIQUE NOT NULL,
last_name VARCHAR(30) UNIQUE NOT NULL,
role_id INT NULL,
manager_id INT,
PRIMARAY KEY (id)
FOREIGN KEY (role_id) REFERENCES role(id),
FOREIGN KEY (manager_id) REFERENCES manager(id),
);

CREATE TABLE role (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL(6,2),
department_id INT NOT NULL,
PRIMARAY KEY (id)
FOREIGN KEY (department_id) REFERENCES department(id),
);

CREATE TABLE department (
id INT AUTO_INCRIMENT PRIMARY KEY,
name VARCHAR(30) UNIQUE NOT NULL
);

