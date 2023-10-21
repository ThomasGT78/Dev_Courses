DROP TABLE IF EXISTS cours.compte_courant;
CREATE TABLE cours.compte_courant (
  id_compte int(10) unsigned NOT NULL AUTO_INCREMENT,
  titulaire varchar(45) NOT NULL,
  solde int(10) unsigned NOT NULL,
  PRIMARY KEY (id_compte)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS cours.compte_epargne;
CREATE TABLE cours.compte_epargne (
  id_compte int(10) unsigned NOT NULL AUTO_INCREMENT,
  titulaire varchar(45) NOT NULL,
  solde int(10) unsigned NOT NULL,
  PRIMARY KEY (id_compte)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4;


INSERT INTO cours.compte_courant (id_compte, titulaire, solde) VALUES
(1, 'Tintin', 1000);
INSERT INTO cours.compte_epargne (id_compte, titulaire, solde) VALUES
(1, 'Tintin', 10000);

SELECT * FROM cours.compte_courant;
select * from compte_epargne;

		/************************
		*	Début Transaction	*
		************************/

START TRANSACTION;
-- SET AUTOCOMMIT = 0;
-- SELECT @@AUTOCOMMIT;

UPDATE cours.compte_epargne
SET solde = solde - 1000
WHERE id_compte = 1;

UPDATE cours.compte_courant
SET solde = solde + 1000
WHERE id_compte = 1;

COMMIT;
-- SET AUTOCOMMIT = 1;
-- SELECT @@AUTOCOMMIT;


-- Insérez une commande (+cdes et +ligcdes), validez-la définitivement.

START TRANSACTION;
INSERT INTO cdes (date_cde, id_client) 
VALUES (CURDATE(), 5);

INSERT INTO ligcdes ( id_cde, id_produit, qte) 
VALUES (last_insert_id(), 9, 15);

SELECT * FROM cdes;
SELECT * FROM ligcdes;

COMMIT; -- ici on valide l'opération

SELECT * FROM cdes;
SELECT * FROM ligcdes;


-- Insérez une commande (+cdes et +ligcdes), annulez-la définitivement.

START TRANSACTION;
INSERT INTO cdes (date_cde, id_client) 
VALUES (CURDATE(), 5);

INSERT INTO ligcdes ( id_cde, id_produit, qte) 
VALUES (last_insert_id(), 9, 15);

SELECT * FROM cdes;
SELECT * FROM ligcdes;

rollback; -- Ici on annule avant de valider

SELECT * FROM cdes;
SELECT * FROM ligcdes;