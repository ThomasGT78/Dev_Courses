-- CRÉER UNE BASE DE DONNÉES
CREATE DATABASE name_database DEFAULT CHARACTER SET utf8mb4;

-- CRÉER UNE TABLE
CREATE TABLE celebs (
	id INTEGER,
	name TEXT,
	age INTEGER
);

CREATE TABLE IF NOT EXISTS album (
    id SMALLINT UNSIGNED AUTO_INCREMENT,
    title VARCHAR  (60) NOT NULL,
    artist VARCHAR (50) NOT NULL,
    genre VARCHAR (50),
    pist_number TINYINT UNSIGNED NOT NULL DEFAULT 0,
    release_date YEAR  NOT NULL,
    size_in_mo SMALLINT UNSIGNED,
    album_length TIME,
    PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4;

-- INSÉRER des données dans le tableau
INSERT INTO celebs (id, name, age)
VALUES (1, 'Justin Bieber', 22);

INSERT INTO celebs (id, name, age)
VALUES (2, 'Beyonce Knowles', 33); 

INSERT INTO celebs (id, name, age) 
VALUES (3, 'Jeremy Lin', 26); 

INSERT INTO celebs (id, name, age) 
VALUES (4, 'Taylor Swift', 26); 


-- VISUALISE toutes les donnëes du tableau
SELECT * FROM celebs;

-- VISUALISE les donnëes requise du tableau
SELECT name FROM celebs;

-- AJOUTER une colonne du tableau
ALTER TABLE celebs
ADD COLUMN twitter_handle TEXT;

-- SUPPRIMER une colonne du tableau
ALTER TABLE celebs
DROP COLUMN twitter_handle; -- or just: DROP twitter_handle

-- MOFIFIER une colonne du tableau
ALTER TABLE experiences CHANGE isActual is_current_job BOOLEAN DEFAULT TRUE;
ALTER TABLE experiences MODIFY is_current_job BOOLEAN DEFAULT TRUE;

-- UPDATE un élément d'une ligne
UPDATE celebs 
SET  twitter_handl = '@taylorswift13' 	-- Sélectionne la colonne à mettre à jour
WHERE id = 4;							-- Situe la ligne à éffacer

-- EFFACER toutes les ligne d'un tableau
DELETE FROM celebs 

-- EFFACER une ou plusieurs ligne remplissant une condition
DELETE FROM celebs 
WHERE twitter_handle IS NULL;

-- COPIER une colonne dans un nouveau tableau
CREATE TABLE copie_clients AS SELECT * FROM clients;

-- COPIER UNE TABLE et son contenu
CREATE TABLE newTable AS SELECT * FROM table1 ;

-- COPIER UNE TABLE sans son contenu
CREATE TABLE newTable LIKE table1

-- MONTRER les colonnes et ses méta-Donnée
SHOW COLUMNS FROM villes;

-- CONTRAINTES (CONSTRAINTS)

PRIMARY KEY		
	-- La colonne a des valeurs différentes dans chaque lignes. Permet d'identifier une ligne de manière unique
	-- 1 seule colonne peut porter cette contrainte 
UNIQUE			
	-- La colonne a des valeurs différentes dans chaque lignes. Peut s'utiliser sur plusieurs colonnes.
NOT NULL 		
	-- Les éléments de la colonne doivent avoir une valeur
DEFAULT			
	-- applique une valeur par défaut si rien n'est spécifier dans la ligne
FOREIGN KEY		
	-- champ dans une table, qui fait référence à PRIMARY KEY dans une autre table 
	-- Utilisée pour empêcher les actions qui détruiraient les liens entre les tables
	-- empêche l'insertion de données non valides dans la colonne de clé étrangère, car il doit s'agir de l'une des valeurs contenues dans la table parent

-- CRÉER une FOREIGN KEY dans une table éxistante
ALTER TABLE Orders
ADD FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);

-- SUPPRIMER une FOREIGN KEY
ALTER TABLE Orders
DROP FOREIGN KEY FK_PersonOrder;