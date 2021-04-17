/*CREANDO BASE DE DATOS Y TABLES DE EMDLM*/
create database EMDLM1;

USE emdlm1;

create table user_category (
id_category INT NOT NULL AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,
PRIMARY KEY (id_category)
);


create table users (
user_id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL UNIQUE,
password VARCHAR(150) NOT NULL,
address VARCHAR(50) NOT NULL,
tel INT NOT NULL,
image VARCHAR(50) NOT NULL,
id_category INT NOT NULL,
PRIMARY KEY (user_id),
FOREIGN KEY (id_category) REFERENCES user_category(id_category)
);

create table product_category (
id_category INT NOT NULL AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,
PRIMARY KEY (id_category)
);

create table product_brand (
id_brand INT NOT NULL AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,
PRIMARY KEY (id_brand)
);

create table products (
product_id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,
description VARCHAR(1500) NOT NULL,
price DECIMAL(8,2) NOT NULL,
discount DECIMAL(3,2) NOT NULL,
id_category INT NOT NULL,
id_brand INT NOT NULL,
image VARCHAR(50) NOT NULL,
PRIMARY KEY (product_id),
FOREIGN KEY (id_category) REFERENCES product_category (id_category),
FOREIGN KEY (id_brand) REFERENCES product_brand (id_brand)
);



