-- Créer la table des mois
CREATE TABLE mois (
	id_mois TINYINT(2) UNSIGNED NOT NULL AUTO_INCREMENT,
    num_mois INT(2) UNSIGNED NOT NULL UNIQUE,
    nom_mois VARCHAR (9) NOT NULL UNIQUE,
	PRIMARY KEY (id_mois)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE utf8_unicode_ci;

-- Insérer les mois dans la table mois
INSERT INTO mois (num_mois, nom_mois) values (1, 'Janvier'),(2, 'Février'),(3, 'Mars'),(4, 'Avril'),(5, 'Mai'),(6, 'Juin'),(7, 'Juillet'),(8, 'Août'),(9, 'Septembre'),(10, 'Octobre'),(11, 'Novembre'),(12, 'Décembre');

-- Supprime la table des mois
DROP TABLE mois;

--Inserer un nouveau produit et son prix dans la table produits
INSERT INTO produits (designation, prix) VALUES ('Contrex', '1.10');
--Insérer 2 ligne de commande
INSERT INTO cdes(dates_cde, id_client) VALUES (CURDATE(),6);
INSERT INTO ligcdes(id_cde, id_produits, qte) VALUES (LAST_INSERT_ID(), 2, ,33);
INSERT INTO ligcdes(id_cde, id_produits, qte) VALUES (LAST_INSERT_ID(), 1, ,12);



-- Créer une nouvelle colonne date_jour dans la table des mois
ALTER TABLE mois ADD (date_jour DATE );

-- Met à jour
UPDATE mois SET date_jour = CURDATE()
WHERE num_mois = '11';

-- Supprime une colonne de la table
ALTER TABLE mois DROP date_jour;

-- Effacer une ligne
DELETE FROM mois WHERE num_mois IS NULL;
DELETE FROM mois WHERE id_mois = 11;

-- Effacer toutes les lignes
DELETE FROM mois WHERE id_mois > 0;
DELETE FROM mois WHERE id_mois IN (1,12);
DELETE FROM mois WHERE id_mois BETWEEN 1 AND 12;

-- Efacer une colonne (suprime la table et la recrée sans la colone, + rapide et réinitialise les IDs)
TRUNCATE

-- Mettre en Minuscule/Majuscule
UPDATE mois SET nom_mois = LOWER(nom_mois);
UPDATE mois SET nom_mois = UPPER(nom_mois);

-- Modifiez l'adresse de Tintin (id = 5)
UPDATE clients SET adresse = 'nouvelle adresse' WHERE id_client = 5;

-- Modifier le prix de tous les produits de +10%
UPDATE produits SET prix = * 1.1;
-- Modifier le prix de l'évian de -10%
UPDATE produits SET prix = * 0.9 WHERE id_produits = 1;


		/****************
		*	WHERE	*
		****************/

-- tous les clients dont le CP commence par 75
SELECT * FROM clients c WHERE cp LIKE '75%'

-- CLient né en 85
SELECT * FROM clients c WHERE cp LIKE '1985%'
SELECT * FROM clients c WHERE dateYear() = 1985 ?????

-- villes de Paris (arrondissement)
SELECT * FROM villes v WHERE cp LIKE '75%'

-- villes de IDF (sauf Paris)

SELECT * FROM villes v 
WHERE cp LIKE '77%' OR '78%' OR '91%' OR '92%' OR ....

SELECT * FROM villes v 
WHERE LEFT (cp,2) IN ('77', '78', '91', '92',  ....)

