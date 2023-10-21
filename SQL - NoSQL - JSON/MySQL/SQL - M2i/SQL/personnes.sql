SET
  foreign_key_checks = 0;
  
DROP TABLE IF EXISTS adresses;
CREATE TABLE adresses (
    id SMALLINT UNSIGNED AUTO_INCREMENT,
    rue VARCHAR (60) NOT NULL,
    code_postal CHAR(5) NOT NULL,
    ville VARCHAR (30) NOT NULL,
    PRIMARY KEY (id)
  );
  
DROP TABLE IF EXISTS personnes;
CREATE TABLE personnes (
    id SMALLINT UNSIGNED AUTO_INCREMENT,
    nom VARCHAR (30) NOT NULL,
    id_adresse SMALLINT UNSIGNED,
    sdf ENUM('oui', 'non') DEFAULT 'non',
    PRIMARY KEY (id),
    CONSTRAINT personnes_vers_adresses FOREIGN KEY (id_adresse) REFERENCES adresses(id)
  );

SET
  foreign_key_checks = 1;
INSERT INTO
  adresses (rue, code_postal, ville)
VALUES
  ('66 chemin vert', '78680', 'Epône'),
  ('5 rue des carrières', '94250', 'Gentilly');
INSERT INTO
  personnes (nom, id_adresse)
VALUES
  ('Carole', 1),
  ('Laura', 2),
  ('Jean-Louis', 1),
  ('Florian', 1),
  ('Thomas', 2),
  ('Romain', NULL);
UPDATE
  personnes
SET
  sdf = 'oui'
WHERE
  id_adresse IS NULL;