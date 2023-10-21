// La méthode find() renvoie un curseur de documents
db.nomDeLaCollection.find([«critère»[, «projection»]])
// ou
db.getCollection('nomDeLaCollection').find([«critère»[, «projection»]])

/* Critère pour la restriction (objet JSON) */
{ clé:valeur, … }

/* Projection (objet JSON): (avec 1 ou true pour inclure et 0 ou false pour exclure) */
{ champ1:booléen, champ2:booléen, …}

/* Pour l'_id l'exclusion doit être explicite puisque par défaut l'_id est toujours inclus dans le résultat */

// Tous les documents (sans restriction ni projection)
db.nomDeLaCollection.find()

// Pour améliorer l'affichage
db.nomDeLaCollection.find().pretty() 