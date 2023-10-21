-- SUPPRIMER UNE BASE DE DONNÉE EXISTANTE --
DROP DATABASE IF EXISTS formation_sql;

-- CRÉER UNE BASE DE DONNÉE --
CREATE DATABASE formation_sql DEFAULT CHARACTER SET utf8;

-- Ouverture de la BD --
use formation_sql;

-- Créer Table de Contact --
CREATE TABLE contacts (
    id SMALLINT UNSIGNED AUTO_INCREMENT,
	nom VARCHAR (50) NOT NULL,
    prenom VARCHAR (30),
    date_naissance DATE,
    code_postal CHAR(5) NOT NULL,
    ville VARCHAR (30) NOT NULL,
    PRIMARY KEY (id)
);

-- Suppression des données --
DELETE FROM contacts;

-- Insertion de donnée --
INSERT INTO 
    contacts (nom, prenom, code_postal, ville)
VALUES
    ('Dupont', 'Sophie', '25000', 'Besançon'),
    ('Laporte', 'Hector', '78680', 'Epône'),
    ('Montel', 'Jade', '75013', 'Paris'),
    ('Dupreux', 'Claire', '78970', 'Mézières-sur-Seine');

-- Affichage du Tableau

SELECT * FROM contacts;

-- Mise à jour --

UPDATE  contacts SET date_naissance = '1987-05-10'
WHERE code_postal = '75013'

-- Affichage du Tableau

SELECT * FROM contacts;