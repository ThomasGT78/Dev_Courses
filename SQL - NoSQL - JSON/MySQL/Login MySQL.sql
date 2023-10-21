		/**********
		*  XAMPP  *
		**********/
--connection au serveur
mysql --user=root;

-- Montre les BD existante
show databases;

--Ouvre la BD
use mysql;

--Montre les tableaux
show tables;
describe user;

(selectionne ligne)
SELECT user FROM user;
SELECT user, host FROM user;

(selectionne tout)
SELECT * FROM user;		

		/********
		*  VSC  *
		********/
		
-- CRÉER UNE BASE DE DONNÉE --
CREATE DATABASE formation_sql DEFAULT CHARACTER SET utf8;

-- SUPPRIMER UNE BASE DE DONNÉE EXISTANTE --
DROP DATABASE IF EXISTS formation_sql;

-- Ouverture de la BD
use formation_sql;

-- Créer Table de Contact
CREATE TABLE contacts (
	nom VARCHAR (50)
)



WHERE NOT
editeur = 'Grasset'

WHERE 
date_publication > 2020

-- Commence par B puis n 'importe quelle autre charactère
auteur_nom LIKE 'B%' 

-- Tous ce qui contient un B
auteur_nom LIKE '%B%'


-- Critère croisé

WHERE
	prix > 10
	OR
	genre = 'Science Fiction'

WHERE
	prix > 10
	AND
	genre = 'Science Fiction'

WHERE
	prix 
	BETWEEN 10 AND 20
	
WHERE
	date_publication 
	BETWEEN '200-01-01' AND '2005-12-31'

-- Permet d'afficher un élément de chaque colonne
--sur 1 colonne
SELECT distinct
	editeur
	FROM
	livre_simples

-- sur 2 colonnes
 SELECT distinct
	 auteur, editeur
	 FROM
	 livre_simples
	
	USE formation_sql;
SELECT
  distinct editeur,
  count(auteur) as nb,
  sum(prix) as total,
  avg(prix) as prix_moyen,
  min(date_publication) as date_publication_mini
FROM
  livres_simples
GROUP BY
  editeur
 
-- Compter
SELECT
  distinct editeur, 
  count(auteur) as nb
FROM
  livres_simples
GROUP BY
  editeur
 

-- Exemple
SELECT
  genre,
  editeur,
  count(distinct auteur) as nb_auteurs,
  count(*) as nb_livres
FROM
  livres_simples
GROUP BY
  genre,
  editeur

ORDER BY genre DESC

-- Ligne de totalisation de la première colonne déclaré
WITH ROLLUP

--  afficher les éditeurs qui ont fait paraitre plus de 2 auteurs
SELECT
  editeur,
  count(distinct auteur) as nb_auteurs
FROM
  livres_simples
GROUP BY
  editeur
HAVING
  nb_auteurs > 2
  
-- Tableau croisés
SELECT
  personnes.id,
  nom,
  rue,
  code_postal,
  ville,
  adresses.id
FROM
  personnes,
  adresses
WHERE
  id_adresse = adresses.id;
  
-- SYNTAX

SELECT
  personnes.id,
  nom,
  rue,
  code_postal,
  ville
FROM
  personnes
  INNER JOIN adresses ON id_adresse = adresses.id;
 
 liste des adresses et compter le nb de personnes y vivant
 