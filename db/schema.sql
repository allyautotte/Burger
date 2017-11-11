
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	`id` int NOT NULL AUTO_INCREMENT,
	`burger_name` varchar(100) NOT NULL,
	`devoured` tinyint(1) DEFAULT 0,
	`date` timestamp(0) DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);