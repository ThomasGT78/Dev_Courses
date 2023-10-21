-- Nombre de villes
SELECT COUNT(*) "Nombre de villes"
FROM villes;

-- Nombre de clients dont on connaît la date de naissance
SELECT COUNT(date_naissance)
FROM clients;

-- Nombre de noms de clients différents
SELECT COUNT(DISTINCT nom) "Nombre de noms de client différents"
FROM clients;

-- Moyenne des prix
SELECT AVG(prix) "Moyenne des prix"
FROM produits;

-- Prix le plus élevé
SELECT MAX(prix) "Prix le plus élevé"
FROM produits;

-- Avec la désignation du produit
SELECT designation, prix
FROM produits
WHERE prix = (SELECT MAX(prix) FROM produits) ;

-- Nombre de clients résidant dans une ville
SELECT COUNT(*) "Nombre de clients"
FROM clients c INNER JOIN villes v
ON c.cp = v.cp
WHERE UPPER(v.nom_ville) = 'LILLE';
