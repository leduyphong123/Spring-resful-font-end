CREATE DATABASE API;

USE API;

CREATE TABLE ACOUNT (
	ID BIGINT PRIMARY KEY AUTO_INCREMENT,
    EMAIL VARCHAR(50) UNIQUE,
    PASSWORD VARCHAR(50),
    FULLNAME VARCHAR(50),
    ADDRESS VARCHAR(100)
);
INSERT INTO ACOUNT (EMAIL,PASSWORD,FULLNAME,ADDRESS) VALUES 
('admin@gmail.com','admin','admin','ho chi minh'),
('admin1@gmail.com','admin','admin','ho chi minh'),
('admin2@gmail.com','admin','admin','ho chi minh'),
('admin3@gmail.com','admin','admin','ho chi minh');