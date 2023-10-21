			/***************/
			*	 HAVING		*
			/***************/
	
-- Lorsque nous voulons limiter les résultats d'une requête en fonction des valeurs des lignes individuelles, utilisez WHERE.
-- Lorsque nous voulons limiter les résultats d'une requête basée sur une propriété d'agrégation, utilisez HAVING
-- HAVING est très similaire à WHERE. En fait, tous les types de clauses WHERE que vous avez appris jusqu'à présent peuvent être utilisés avec HAVING

-- L'instruction HAVING vient toujours après GROUP BY, mais avant ORDER BY et LIMIT

SELECT year, 
  genre, 
  COUNT(name)
FROM fake_apps
GROUP BY 1, 2
HAVING COUNT(name) > 10;
-- Nombre de films, de genres différents, produits chaque année, avec au moins 10 films par genre


SELECT price, 
   ROUND(AVG(downloads)),
   COUNT(*)
FROM fake_apps
GROUP BY price
HAVING COUNT(*) > 10;
HAVING count(name) > 10;
-- Il renvoie les téléchargements moyens (arrondis) et le nombre d'applications - à chaque niveau de prix