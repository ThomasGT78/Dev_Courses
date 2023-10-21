			/************************/
			*	 CASE (Conditions)	 *
			/************************/

-- Crée différentes sorties (généralement dans l'instruction SELECT). 
-- C’est la façon dont SQL gère la logique si-alors-- L'instruction CASE doit se terminer par END

SELECT name,
 CASE
  WHEN rating > 8 THEN 'Fantastic'			-- WHEN teste une condition
  WHEN rating > 6 THEN 'Poor'	-- THEN nous donne la chaîne si la condition est vraie (créer dans une nouvelle colonne)
  ELSE 'Avoid at All Costs'						-- ELSE nous donne la chaîne si toutes les conditions ci-dessus sont fausses
 END AS 'Review'			-- AS 'Review' : permet de nommer la nouvelle colonne où vont apparaitre les résultats, 
FROM movies;				-- sinon le nom prendra celui de la déclaration CASE en entier (trés long)

