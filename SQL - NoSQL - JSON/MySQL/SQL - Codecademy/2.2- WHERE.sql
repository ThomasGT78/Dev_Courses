			/********************/
			*	 COMPARATEURS	 *
			/********************/


<	>		-- Inférieur à / supérieur à
<=	>=		-- Inférieur ou égal à / supérieur ou égal à
=	!=		-- Égal à / différent de
LIKE		-- Recherche un modèle spécifique dans une colonne
IS NULL / IS NOT NULL	-- Filtre les valeurs Inconnus(Undefined) dites NULL
BETWEEN...AND	-- Filtre les résultats dans une certaine plage
AND / OR	-- Permet de combiner des conditions, toutes/une des conditions doivent être vraies

			/************/
			*	 WHERE	 *
			/************/
				
-- FILTRE LES LIGNES OÙ LA VALEUR CORRESPOND À LA CONDITION DÉFINIE (Affiche si...)
-- Lorsque nous voulons limiter les résultats d'une requête en fonction des valeurs des lignes individuelles, utilisez WHERE.
-- Lorsque nous voulons limiter les résultats d'une requête basée sur une propriété d'agrégation, utilisez HAVING

SELECT * 
FROM table_name
WHERE cononne_name = valeur_a_comparer;

IS NULL / IS NOT NULL -- Les valeurs INCONNUES sont indiqué par NULL
	-- Il n'est pas possible de tester les valeurs NULL avec des opérateurs de comparaison, tels que < > = et !=

SELECT *
FROM table_name 
WHERE cononne_name IS NULL;

				/***************/
				*	   LIKE	 	*
				/***************/
				
LIKE -- RECHERCHE UN MODÈLE SPÉCIFIQUE DANS UNE COLONNE
--(LIKE is not case sensitive)
SELECT * 
FROM movies
WHERE cononne_name LIKE 'Se_en';

/* Les WildCards
 _	: Remplace n'importe quel caractère individuel sans casser le modèle
 %	: Caractère qui correspond à zéro ou lettres plus manquantes dans le modèle
	A% : tous les noms qui commencent par la lettre «A»
	%a : tous les noms qui finissent par la lettre «a»
	%man% : tous les noms qui contiennent le mot «man»
	The % : tous les noms qui commencent le mot «The » (il y a un espace à écrire)
*/

			/************************/
			*	   BETWEEN...AND	 *
			/************************/

BETWEEN...AND -- Filtre l'ensemble de résultats dans une certaine plage. Il accepte deux valeurs qui sont soit des nombres, du texte ou des dates.
		-- Lorsque les valeurs sont du texte, BETWEEN filtre l'ensemble de résultats dans la plage alphabétique
SELECT *
FROM movies
WHERE name BETWEEN 'A' AND 'J';
-- Ici, BETWEEN filtre l'ensemble de résultats pour n'inclure que les noms qui commencent par «A» jusqu'à «J», mais pas ceux qui commencent par «J», sauf s'il n'y a que la lettre «J».

				/*******************/
				*	  AND  /  OR	*
				/*******************/
				
AND -- Permet de combiner des conditions. toutes les conditions doivent être vraies pour que la ligne soit incluse dans le résultat

SELECT * 
FROM movies
WHERE year BETWEEN 1970 AND 1979
AND rating > 8;


OR -- Permet de combiner des conditions. Une seule des conditions doivent être vraies pour que la ligne soit incluse dans le résultat

SELECT * 
FROM movies
WHERE year < 1985
OR genre = 'horror';


