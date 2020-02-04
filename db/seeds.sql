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
use hamburgers_db;
insert into burger (burger_name)
values ("double bacon");
insert into burger (burger_name)
values ("juicy lucy");
insert into burger (burger_name)
values ("omega");
insert into burger (burger_name)
values ("over the top");
