						/****************
						*	LES VUES	*
						****************/

-- Créez une vue des clients parisiens
CREATE OR REPLACE VIEW clients_parisiens AS 
	SELECT nom, prenom, cp
	FROM clients 
	WHERE cp LIKE '75%';
SELECT * FROM clients_parisiens;

-- Créez une vue des clients parisiens et villes
CREATE OR REPLACE VIEW clients_parisiens_villes AS 
	SELECT c.nom, c.prenom, v.nom_ville, v.cp
	FROM clients c JOIN villes v
	ON c.cp = v.cp
	WHERE v.cp LIKE ('75%');
	

CREATE OR REPLACE VIEW clients_parisiens_et_villes
AS SELECT nom, prenom, c.cp, nom_ville
FROM clients c, villes v
WHERE c.cp = v.cp
AND c.cp LIKE '75%';
SELECT * FROM clients_parisiens_et_villes;

CREATE OR REPLACE VIEW 