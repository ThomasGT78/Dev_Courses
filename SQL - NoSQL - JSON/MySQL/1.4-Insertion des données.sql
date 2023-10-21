insertion des données
Jointures

-- Tous les nombres qui ne sont pas l'objet de calcul doivent être enregistrer comme du texte, pour ne pas supprimer les 0 jugé inutile par le format Number


/****	INSERTIONS SIMPLE	****/

INSERT INTO nom_de_table [(col1, col2, …)]
VALUES(valeur1, valeur2, …);

-- Exemple: Insèrer le 21ème arrondissement etc
INSERT INTO villes(cp, nom_ville, id_pays) VALUES('75021', 'Paris 21', '033');

-- INSERT INTO ... SET ...
INSERT INTO villes  SET cp='75021' , nom_ville='Paris 21' , id_pays='033' 

SELECT LAST_INSERT_ID();


/****	INSERTIONS MULTIPLE		****/

INSERT INTO nom_de_table(col1, col2, …)
VALUES (valeur1a, valeur2a, …) , (valeur1b, valeur2b, …) …;

-- Insère Caen et Lille
INSERT INTO villes (cp, nom_ville, id_pays)
VALUES
('14000', 'Caen', '033'),
('59000', 'Lille', '033');

-- INSERT INTO ... SET ...
INSERT INTO villes SET (col1, col2) = (SELECT val1, val2 FROM dual)