
-- CRÉER UNE TABLE

CREATE TABLE celebs (
	id INT,
	name TEXT,
	age INT
    PRIMARY KEY (id)
);

CREATE TABLE Orders (
    OrderID INT NOT NULL,
    OrderNumber INT NOT NULL,
    PersonID INT,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES celebs(id)
);

-- INSÉRER DES DONNÉES DANS LE TABLEAU
INSERT INTO celebs (id, name, age)
VALUES (1, 'Justin Bieber', 22);

INSERT INTO celebs (id, name, age)
VALUES (2, 'Beyonce Knowles', 33); 

INSERT INTO celebs (id, name, age) 
VALUES (3, 'Jeremy Lin', 26); 

INSERT INTO celebs (id, name, age) 
VALUES (4, 'Taylor Swift', 26); 


-- RETOURNER TOUTES LES DONNËES DU TABLEAU
SELECT * FROM celebs;

-- RETOURNER LES DONNËES REQUISE DU TABLEAU
SELECT name FROM celebs;

-- AJOUTER UNE COLONNE AU TABLEAU
ALTER TABLE celebs
ADD COLUMN twitter_handle TEXT;

-- UPDATE UN ÉLÉMENT D'UNE LIGNE
UPDATE celebs 
SET  twitter_handl = '@taylorswift13' 	-- Sélectionne la colonne à mettre à jour
WHERE id = 4;							-- Situe la ligne à éffacer

-- EFFACER UNE OU PLUSIEURS LIGNE REMPLISSANT UNE CONDITION
DELETE FROM celebs 
WHERE twitter_handle IS NULL;

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