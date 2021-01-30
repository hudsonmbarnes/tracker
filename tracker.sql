DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

-- department table
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

-- role table
CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INT, 
  PRIMARY KEY (id)
);

-- employee table
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR (50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  role_id INT NOT NULL, 
  manager_id INT, 
  PRIMARY KEY (id)
);

-- department
INSERT INTO department (name)
VALUES ("Sales"), ("Finance"), ("Legal");

-- role
INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 50000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 80000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 40000, 2);

-- employees
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jake", "Johnson", 1, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Smith", 2, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Gary", "Donald", 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Conner", "Mayweather", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Lebron", "Curry", 3, 2);