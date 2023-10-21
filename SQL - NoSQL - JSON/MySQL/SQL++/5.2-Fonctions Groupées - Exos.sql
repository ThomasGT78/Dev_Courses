SELECT p.id_produit, p.designation
FROM produits p

-- Calcul CA
SELECT SUM(l.qte * p.prix) 'CA Total'
FROM produits p INNER JOIN ligcdes l
ON p.id_produit = l.id_produit;

-- CA par produit
SELECT 
	p.id_produit AS ID ,
	p.designation AS Designation, 
	SUM(l.qte * p.prix) AS CA Total
FROM produits p INNER JOIN ligcdes l
	ON p.id_produit = l.id_produit
GROUP BY p.designation -- décompose le CA par produit
WITH ROLLUP;

-- CA par produit ordonné du + au - 
SELECT 
	p.id_produit AS ID ,
	p.designation AS Designation, 
	SUM(l.qte * p.prix) AS CA
FROM produits p INNER JOIN ligcdes l
	ON p.id_produit = l.id_produit
GROUP BY p.designation
ORDER BY CA DESC;	-- classe par CA du + au -

-- CA par ville
SELECT 
	nom_ville AS Ville,
	SUM(l.qte * p.prix) AS 'CA par Ville'
FROM produits p INNER JOIN ligcdes l
	ON p.id_produit = l.id_produit
JOIN cdes cd ON cd.id_cde = l.id_cde
JOIN clients c ON cd.id_client = c.id_client
JOIN villes v ON c.cp = v.cp
GROUP BY nom_ville -- Affiche par ville
ORDER BY `CA par Ville` DESC; -- !!! ne fonctionne pas avec 'CA par Ville' (cote droite)

-- Nombre de commandes par année
SELECT DISTINCT
	YEAR(c.date_cde) AS Année,
	COUNT(*) AS 'Nombre de Commande'
FROM cdes c
GROUP BY Année;

-- Nombre de commandes par client
SELECT DISTINCT
	c.id_client AS 'ID Client',
    cl.nom AS 'Nom du client',
    cl.prenom AS 'Prénom du client',
	COUNT(*) AS 'Nombre de Commande'
FROM cdes c INNER JOIN clients cl
ON c.id_client = cl.id_client
GROUP BY c.id_client;

-- CA par Ville et par Produit
SELECT 
	v.nom_ville AS Ville,
	p.designation AS Designation, 
	SUM(l.qte * p.prix) as 'CA par ville et par produits'
FROM produits p JOIN ligcdes l
	ON p.id_produit = l.id_produit
JOIN cdes c ON l.id_cde = c.id_cde
JOIN clients cl ON c.id_client = cl.id_client
JOIN villes v ON cl.cp = v.cp
GROUP BY Ville, Designation;

SELECT  -- Ne fonctionne pas avec NATURAL JOIN !!! Limité à 4 tables
	v.nom_ville AS Ville,
	p.designation AS Designation, 
	SUM(l.qte * p.prix) as 'CA par ville et par produits'
FROM produits p NATURAL JOIN ligcdes l
NATURAL JOIN cdes c NATURAL JOIN clients cl 
NATURAL JOIN villes v
GROUP BY Ville, Designation;

-- CA par année
SELECT 
	YEAR(c.date_cde) AS Année,
	SUM(l.qte * p.prix) as 'CA par année'
FROM produits p 
JOIN ligcdes l
	ON p.id_produit = l.id_produit
JOIN cdes c 
	ON l.id_cde = c.id_cde
GROUP BY Année;

-- CA par année pour l'Evian
SELECT 
	YEAR(c.date_cde) AS Année,
	SUM(l.qte * p.prix) as "CA par année pour l'Evian"
FROM produits p 
JOIN ligcdes l
	ON p.id_produit = l.id_produit
JOIN cdes c 
	ON l.id_cde = c.id_cde
WHERE p.designation = 'Evian'
GROUP BY Année;

-- CA par ville et par année
SELECT 
	v.nom_ville AS Ville,
	YEAR(c.date_cde) AS Année,
	SUM(l.qte*p.prix)
FROM produits p 
JOIN ligcdes l ON p.id_produit = l.id_produit
JOIN cdes c ON l.id_cde = c.id_cde
JOIN clients cl ON c.id_client = cl.id_client
JOIN villes v ON cl.cp = v.cp
GROUP BY Ville, Année;