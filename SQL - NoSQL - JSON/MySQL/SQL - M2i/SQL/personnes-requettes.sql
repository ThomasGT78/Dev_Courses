SELECT
  personnes.id,
  nom,
  rue,
  code_postal,
  ville,
  adresses.id
FROM
  personnes,
  adresses
WHERE
  id_adresse = adresses.id;