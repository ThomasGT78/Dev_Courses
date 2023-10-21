			/************************/
			*	 FONCTION AGRÉGER	 *
			/************************/

			COUNT(): 
-- Prend le nom d'une colonne comme argument et compte le nombre de valeurs non vides dans cette colonne
-- Ne prend pas en compte les valeurs réelles stockées, et ne se soucie que si elles ont une valeur non vide

SELECT COUNT(*)
FROM fake_apps
WHERE price = 0;

SELECT COUNT(DISTINCT name)
FROM fake_apps
WHERE price = 0;


			SUM():
-- Prend le nom d'une colonne comme argument et renvoie la somme de toutes les valeurs de cette colonne, 
-- Signifie qu'elle doit prendre en compte les valeurs réelles stockées.

SELECT SUM(downloads)
FROM fake_apps;


			MAX()/MIN():
-- Prend le nom d'une colonne comme argument et renvoie la plus grande/basse valeur de cette colonne. 

SELECT MAX(downloads)
FROM fake_apps;
-- Ici, nous avons renvoyé la valeur la plus élevée dans la colonne des téléchargements.


			AVG():
-- Prend un nom de colonne comme argument et renvoie la valeur moyenne de cette colonne

SELECT AVG(price)
FROM fake_apps;


			ROUND():
-- Prend deux arguments entre parenthèses:
	-- un nom de colonne
	-- un nombre entier
-- Il arrondit les valeurs de la colonne au nombre de décimales spécifié par l'entier.

SELECT ROUND(price, 0)
FROM fake_apps;
-- Renvoi la colonne «price» arrondi

SELECT name, ROUND(price, 0)
FROM fake_apps;
-- Renvoi la colonne nom + la colonne «price» arrondi

SELECT ROUND(AVG(price), 2)		
FROM fake_apps;
-- Renvoi l'arrondi de la moyenne de la colonne «price»