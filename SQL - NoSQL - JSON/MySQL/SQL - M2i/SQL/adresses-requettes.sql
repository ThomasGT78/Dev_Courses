SELECT
  rue,
  code_postal,
  ville,
  count(personnes.id) as nb_pers
FROM
  personnes
  JOIN adresses ON id_adresse = adresses.id
GROUP BY
  adresses.id;
  
