		/********************
		*	Transactions	*
		********************/
		
-- Une transaction est l'espace-temps qui s'écoule entre deux états stables et cohérents de la base de données

-- Pour connaître l'état de l'autocommit tapez :
SELECT @@AUTOCOMMIT;

Par défaut renvoie 1.

-- Pour modifier l'état (Ouvrir une session), 2 possibilités:
SET AUTOCOMMIT = 0;
START TRANSACTION;

-- Validation (2 possibilités) :
COMMIT;
SET AUTOCOMMIT = 1;

-- Annulation :
ROLLBACK;

		/****************************
		*	Exemple de Transaction	*
		****************************/

START TRANSACTION;
-- SET AUTOCOMMIT = 0;
SELECT @@AUTOCOMMIT		-- (renvoi 0)

UPDATE cours.compte_epargne
SET solde = solde - 1000
WHERE id_compte = 1;

UPDATE cours.compte_courant
SET solde = solde + 1000
WHERE id_compte = 1;

COMMIT;
-- SET AUTOCOMMIT = 1;
SELECT @@AUTOCOMMIT		-- (renvoi 1)