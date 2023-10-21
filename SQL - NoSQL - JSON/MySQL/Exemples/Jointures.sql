		/****************
		*	JOINTURES	*
		****************/
		
-- Sélectionner les clients 
SELECT DISTINCT c.nom 'Nom', 
c.prenom 'Prénom',
c.date_naissance 'Date de Naissance'
FROM client c 
INNER JOIN villes v
ON c.cp = v.cp
INNER JOIN 


-- Liste des clients résidant en France
SELECT 
c.id_client,
c.nom,
c.prenom,
p.nom_pays
FROM clients c INNER JOIN villes v
ON c.cp = v.cp
JOIN pays p
ON v.id_pays = p.id_pays
WHERE nom_pays = 'France';


-- Liste des buveurs d'Evian
SELECT
 c.id_client,
 c.nom,
 c.prenom,
 p.designation
 FROM clients c INNER JOIN cdes
 ON c.id_client = cdes.id_client
 JOIN ligcdes l
 ON cdes.id_cde = l.id_cde
 JOIN produits p
 ON p.id_produit = l.id_produit
 WHERE p.id_produit = '1';

-- liste des clients avec les dates de naissance francisées
SELECT
 c.nom AS Nom,
 c.prenom AS Prénom,
 c.date_naissance AS Naissance,
 c.date_française
 CONCAT (
 DAY(date_naissance), ' ', (m.nom_mois), ' ', YEAR(date_naissance)
 ) AS 'En Français'
 FROM clients c AS c JOIN mois AS m
 ON m.num_mois = MONTH(c.date_naissance);
 

-- Liste des produits qui n'ont jamais été commandés
SELECT
p.designation,
l.qte
FROM produits p LEFT OUTER JOIN ligcdes l
ON p.id_produit = l.id_produit
WHERE l.qte IS NULL;


-- Liste des produits qui n'ont pas été commandés cette année
SELECT * FROM produits WHERE id_produit NOT IN(
	SELECT DISTINCT
		p.id_produit,
		p.designation
		FROM produits p LEFT OUTER JOIN ligcdes l
		ON p.id_produit = l.id_produit
		LEFT OUTER JOIN cdes
		ON l.id_cde = cdes.id_cde
		WHERE YEAR(cdes.date_cde) = YEAR(CURDATE());
);
/*il faut voir toute la listes des produits commandés en 2020 et faire ceux qui n'en font pas partis*/


-- Autre technique, non fonctionnel
/*
SELECT DISTINCT
		p.id_produit,
		p.designation,
		c.date_cde
		FROM produits p LEFT OUTER JOIN ligcdes l
		ON p.id_produit = l.id_produit
		LEFT OUTER JOIN cdes c
		ON l.id_cde = c.id_cde
		AND YEAR(c.date_cde) = YEAR(CURDATE())
		WHERE l.qte IS NULL
		ORDER BY id_produit;
*/

		
		
