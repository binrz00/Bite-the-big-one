DROP database IF EXISTS hamburgers_db;
create database hamburgers_db;
use hamburgers_db;
CREATE TABLE burger (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL ,
    devoured BOOLEAN DEFAULT false ,
    createdat datetime,
    updatedat datetime,
    PRIMARY KEY(id)
);

