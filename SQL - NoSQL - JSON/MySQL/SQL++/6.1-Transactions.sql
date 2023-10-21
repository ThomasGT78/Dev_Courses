DROP TABLE IF EXISTS cours.compte_courant;
CREATE TABLE cours.compte_courant (
  id_compte int(10) unsigned NOT NULL AUTO_INCREMENT,
  titulaire varchar(45) NOT NULL,
  solde int(10) unsigned NOT NULL,
  PRIMARY KEY (id_compte)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS cours.compte_epargne;
CREATE TABLE cours.compte_epargne (
  id_compte int(10) unsigned NOT NULL AUTO_INCREMENT,
  titulaire varchar(45) NOT NULL,
  solde int(10) unsigned NOT NULL,
  PRIMARY KEY (id_compte)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;


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