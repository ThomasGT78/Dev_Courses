SELECT
  genre,
  editeur,
  auteur,
  count(distinct auteur) as nb_auteurs,
  count(*) as nb_livres
FROM
  livres_simples
GROUP BY
  genre,
  editeur
WITH ROLLUP