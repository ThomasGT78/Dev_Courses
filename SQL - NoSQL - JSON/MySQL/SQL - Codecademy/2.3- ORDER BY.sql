			/****************/
			*	 ORDER BY	 *
			/****************/

-- Permet de trier les données d'une ou plusieurs colonnes dans l'ordre choisi
-- La colonne que nous trions avec ORDER BY n'a même pas besoin d'être l'une des colonnes que nous affichons.

SELECT *
FROM movies
ORDER BY name;

ASC		-- trie les résultats par ordre croissant (du plus bas au plus haut ou de A-Z)(par défaut)
DESC	-- trie les résultats par ordre décroissant (du plus haut au plus bas ou Z-A)

SELECT *
FROM movies
ORDER BY imdb_rating DESC;

-- Note: ORDER BY always goes after WHERE (if WHERE is present).

SELECT *
FROM movies
WHERE imdb_rating > 8
ORDER BY year DESC;

-- Lors de la classification par plus d'une colonne:
	-- il classera d'abord les données par rapport à la première colonne
	 -- puis, en conservant l'ordre de la colonne précédente, il classera par rapport à la colonne suivante
	  -- et ainsi de suite.

SELECT year, name
FROM movies
ORDER BY year ASC, name DESC;
