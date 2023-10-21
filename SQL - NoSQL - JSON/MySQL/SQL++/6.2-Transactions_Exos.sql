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