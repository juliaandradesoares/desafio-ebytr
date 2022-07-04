DROP DATABASE IF EXISTS ToDoList;

CREATE DATABASE ToDoList;

USE ToDoList;

CREATE TABLE tasks (
    id INT NOT NULL auto_increment,
    task VARCHAR(30) NOT NULL,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(15) NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;

INSERT INTO ToDoList.tasks (task, status) VALUES
    ("Fazer backend- teste", "EM ANDAMENTO"),
    ("Fazer frontend - teste", "PENDENTE"),
    ("Preencher formulário - teste", "PENDENTE");