			/************************/
			*	 REQUÊTES (QUERIES)	 *
			/************************/

-- AFFICHER TOUTES LES DONNËES D'UN TABLEAU
SELECT * 
FROM table_name;

-- AFFICHER LES DONNËES D'UNE COLONNE D'UN TABLEAU
SELECT colonne_name 
FROM table_name;

-- AFFICHER LES DONNËES DE PLUSIEURS COLONNE D'UN TABLEAU
SELECT column1, column2 
FROM table_name;

AS -- RENOMMER UNE COLONNE (ET L'AFFICHER)
SELECT name AS 'Titles'
FROM movies;


				/****************/
				*	 DISTINCT	 *
				/****************/

-- FILTRE LES VALEURS UNIQUE (FILTRE LES DOUBLONS POUR NE LES AFFICHER QU'UNE FOIS)

SELECT DISTINCT colonne_name 
FROM table_name;

				/****************/
				*	   LIMIT	 *
				/****************/
--  Spécifie le nombre maximum de lignes des résultats. Cela économise de l'espace sur notre écran et accélère nos requêtes
-- Always goes at the very end of the query (It is not supported in all SQL databases)

SELECT *
FROM movies
ORDER BY imdb_rating DESC
LIMIT 3;

