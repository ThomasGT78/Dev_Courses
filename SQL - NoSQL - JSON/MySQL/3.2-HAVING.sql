			/***************/
			*	 HAVING		*
			/***************/

SELECT fonction_agregat(col1 | *) [, colonne | fonction_agregat() ]
FROM nom_de_table
GROUP BY col1, …
HAVING fonction_agregat(col1 | *) opérateur de comparaison Valeur


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


SELECT YEAR(cd.date_cde) "Année", c.id_client "Code client", c.nom "Nom", COUNT(*) "Nombre de commandes"
FROM clients c INNER JOIN cdes cd
ON c.id_client = cd.id_client
WHERE YEAR(cd.date_cde) = '2005'
GROUP BY c.id_client, nom, YEAR(cd.date_cde)
HAVING COUNT(*) > 1;
