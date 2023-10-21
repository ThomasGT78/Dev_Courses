			/***************/
			*	 GROUP BY	*
			/***************/
			
-- C'est une clauses SQL utilisée avec les fonctions d'agrégation. Elles sont utilisées en collaboration avec l'instruction SELECT
-- Permet d'organiser des données identiques en groupes.
	--Vient après toutes les instructions WHERE, 
		-- mais avant HAVING, ORDER BY ou LIMIT

-- Compte le nombre d'app ayant plus de 20 000 dl pour chaque tarifs existant
SELECT price, 	--afiche «price»
	COUNT(*)	--compte le nombre de ligne dans le tableau
FROM fake_apps
WHERE downloads > 20000	--dont il y a plus de 20 000 downloads
GROUP BY price	-- groupe par prix
					-- n'affichera qu'une fois chacque prix
					-- compte pour chaque groupe de prix

--compte le nombre de downloads pour chaque catégorie
SELECT category, 
	SUM(downloads)	
FROM fake_apps
GROUP BY category

-- Compte la moyenne des notes imdb par années et les organise par années croissantes
SELECT year,
	AVG(imdb_rating)
FROM movies
GROUP BY year
ORDER BY year;

-- SQL nous permet d'utiliser des références de colonne dans notre GROUP BY:
1 est la première colonne sélectionnée
2 est la deuxième colonne sélectionnée
3 est la troisième colonne sélectionnée
etc...

SELECT ROUND(imdb_rating),
   COUNT(name)
FROM movies
GROUP BY ROUND(imdb_rating)
ORDER BY ROUND(imdb_rating);
===
SELECT ROUND(imdb_rating),
   COUNT(name)
FROM movies
GROUP BY 1
ORDER BY 1;


SELECT category, 
   price,
   AVG(downloads)
FROM fake_apps
GROUP BY category, price;
===
SELECT category, 
   price,
   AVG(downloads)
FROM fake_apps
GROUP BY 1, 2;





