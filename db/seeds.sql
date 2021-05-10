USE employee_tracker_db

INSERT INTO employee (first_name, last_name, role_id, mananger_id),
VALUES
('john','lenon', 1, 1),
('Paul','McCartney', 2, 22),
('Ringo','Starr', 3, 33),
('George','Harrison', 4, 44)


INSERT INTO department (name)
VALUES
('Management'),
('Sales'),
('Legal'),
('IT');


INSERT INTO role (title, salary, department_id)
VALUES
("boss", 6000.00, 1),
("Lawyer", 8600.00, 3),
("Salesdude", 5860.00, 2),
("Techie", 86000.00, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('john','lenon', 1, 1),
('Paul','McCartney', 2, 2),
('Ringo','Starr', 3, 3),
('George','Harrison', 4, 4);