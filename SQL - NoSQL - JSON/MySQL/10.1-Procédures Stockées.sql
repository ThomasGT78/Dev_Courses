/******* PROCÉDURES STOCKÉES ******/

	/* **********************************
	*	CRÉER ET STOCKER UNE PROCÉDURE	*
	************************************/

DELIMITER $$

CREATE PROCEDURE [bd.]nomDeLaProcedure ([[DIRECTION] argument1 TYPE [(taille) [options]][, [DIRECTION] argument2 TYPE[(taille) [options]]]])
BEGIN
  Instruction SQL ou Instruction P/SQL;
  Instruction SQL ou Instruction P/SQL;
END $$

DELIMITER ;

--	Procédure:		Paramètre
	SelectAll		Aucun
	SelecteOne		La PK
	Insert			Toutes les colonnes sauf la PK si elle est auto-incrémentée
	Delete			La PK
	Update			Toutes les colonnes modifiables + la PK

-- DIRECTIONS: 
IN, OUT, INOUT
• IN (facultatif) : en entrée (passage par valeur),
• OUT : en sortie (aucun passage),
• INOUT : en entrée/sortie (passage par référence ou par adresse).

-- TYPE: 
Ceux du SQL de MySQL:
INT, CHAR(n), VARCHAR(n), ....

-- OPTIONS: 
- pour les numériques : 
UNSIGNED, ZEROFILL, UNSIGNED ZEROFILL.
- Autre : 
CHARSET utf8 COLLATE utf8_unicode_ci ou autre.


	/* **********************************
	*	SUPPRIMER UNE PROCÉDURE	STOCKÉE	*
	************************************/

DROP PROCEDURE [IF EXISTS] [bd.]nomDeLaProcedure;


	/* **********************************
	*	EXÉCUTER UNE PROCÉDURE	STOCKÉE	*
	************************************/

CALL nomDeLaProcedure([paramètres]);


			/* **************
			*	EXEMPLES	*
			****************/

-- Sans paramètre :
-- Visualisation de la table Villes

DELIMITER $$
DROP PROCEDURE IF EXISTS villesSelect $$
CREATE PROCEDURE villesSelect()
BEGIN
   SELECT * 
   FROM villes;
END $$
DELIMITER ;

CALL villesSelect();

-- Avec un paramètre :
-- Visualisation des clients d’une Ville en fonction du CP

DELIMITER $$
DROP PROCEDURE IF EXISTS clientsDUneVille $$
CREATE PROCEDURE clientsDUneVille(IN asCp CHAR(5) CHARSET utf8 COLLATE utf8_unicode_ci)
BEGIN
  SELECT *
  FROM clients
  WHERE cp = asCP;
END $$
DELIMITER ;

CALL clientsDUneVille('75011');

-- Avec 3 paramètres :
-- Insertion d'un enregistrement dans la table Villes

DELIMITER $$
DROP PROCEDURE IF EXISTS villesInsert $$
CREATE PROCEDURE villesInsert(IN asCp CHAR(5), IN asVille VARCHAR(50), IN asIdPays CHAR(4))
BEGIN
   INSERT INTO villes(cp, nom_ville, id_pays) VALUES(asCp, asVille, asIdPays);
END $$
DELIMITER;

CALL villesInsert('75021','Paris 21','033');
SELECT * FROM villes v;