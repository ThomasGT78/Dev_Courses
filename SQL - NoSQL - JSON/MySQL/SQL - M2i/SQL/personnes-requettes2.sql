SELECT
  personnes.id,
  nom,
  rue,
  code_postal,
  ville
FROM
  personnes
  LEFT JOIN adresses ON id_adresse = adresses.id;