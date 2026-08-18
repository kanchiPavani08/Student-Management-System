CREATE DATABASE IF NOT EXISTS student_management;

USE student_management;

CREATE TABLE students (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    course VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    phone VARCHAR(20),
    city VARCHAR(100)
);

INSERT INTO students
(name, email, course, age, phone, city)
VALUES
('Pavani Kanchi',
 'pavani@example.com',
 'Computer Science',
 21,
 '9876543210',
 'Bangalore');
