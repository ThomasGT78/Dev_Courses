			/************
			*	CREATE	*
			************/
			
-- Create_new_pays :
CREATE DEFINER=`root`@`localhost` PROCEDURE `create_new_pays`(
as_id_pays CHAR(4),
as_nom_pays VARCHAR(50))
BEGIN
INSERT INTO pays (id_pays, nom_pays) 
VALUES (as_id_pays, as_nom_pays);
END

call create_new_pays('HON','Hongrie');


			/************
			*	SELECT	*
			************/
			
-- selectAll_pays :
CREATE DEFINER=`root`@`localhost` PROCEDURE `selectAll_pays`()
BEGIN
SELECT * FROM pays;
END

call selectAll_pays();

-- select_name_pays :
CREATE DEFINER=`root`@`localhost` PROCEDURE `select_name_pays`()
BEGIN
SELECT nom_pays FROM pays;
END

call select_name_pays();

-- selectOne_pays :
CREATE DEFINER=`root`@`localhost` PROCEDURE `selectOne_pays`(
as_id_pays CHAR(4))
BEGIN
SELECT id_pays, nom_pays FROM pays
WHERE id_pays = as_id_pays;
END

call selectOne_pays('HON');


			/************
			*	UPDATE	*
			************/

-- update_FullPaysById :
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_FullPaysById`(
as_id_pays CHAR(4),
as_newId_pays CHAR(4),
as_nom_pays VARCHAR(50))
BEGIN
UPDATE pays 
SET id_pays = as_newId_pays, 
nom_pays = as_nom_pays
WHERE id_pays = as_id_pays;
END

call update_FullPaysById('HON', 'HUN', 'Hungaria');

-- update_name_paysById :
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_name_paysById`(
as_id_pays CHAR(4),
as_nom_pays VARCHAR(50))
BEGIN
UPDATE pays 
SET nom_pays = as_nom_pays
WHERE id_pays = as_id_pays;
END

call update_name_paysById('HON', 'Hungaria');

-- update_id_paysById :
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_id_paysById`(
as_id_pays CHAR(4),
as_newId_pays CHAR(4))
BEGIN
UPDATE pays 
SET id_pays = as_newId_pays
WHERE id_pays = as_id_pays;
END

call update_id_paysById('HUN', 'HON');

			/************
			*	DELETE	*
			************/

-- delete_paysById :
CREATE DEFINER=`root`@`localhost` PROCEDURE `delete_paysById`(
as_id_pays CHAR(4))
BEGIN
DELETE FROM pays 
WHERE id_pays = as_id_pays;
END

call delete_paysById('HUN');

-- delete_paysByName :
CREATE DEFINER=`root`@`localhost` PROCEDURE `delete_paysByName`(
as_nom_pays VARCHAR(50))
BEGIN
DELETE FROM pays 
WHERE nom_pays = as_nom_pays;
END

call delete_paysByName('Hongrie');