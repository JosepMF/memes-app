# creating the database 
CREATE DATABASE MEMES_APP;

# using the database
USE MEMES_APP;

# creating the table users with primary key (id) 
CREATE TABLE USERS (
	ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    USERNAME VARCHAR (255) NOT NULL,
    EMAIL VARCHAR (255) NOT NULL UNIQUE,
    ROLE VARCHAR (10) NOT NULL,
    PASSWORD VARCHAR (255) NOT NULL,
    CREATE_AT TIMESTAMP
)AUTO_INCREMENT=1;

# creating the table memes with primary key (id) 
CREATE TABLE MEMES (
	ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    MEMENAME VARCHAR (255) NOT NULL,
    DESCRIPTION TEXT NOT NULL,
    IMAGEMEME VARCHAR (2000) NOT NULL,
    FILEMEME VARCHAR (2000) NOT NULL,
    LIKES INT DEFAULT 0,
    CREATE_AT TIMESTAMP
)AUTO_INCREMENT=1;