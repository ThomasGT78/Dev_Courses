db.nomDeLaCollection.find([«critère»[, «projection»]])

		/********************
		*	Restrictions	*
		********************/

// Un ou plusieurs documents d'une collection
/* On précise comme premier argument de la méthode find() le critère de restriction (le WHERE). Le critère est un objet JSON */
db.nomDeLaCollection.find( {clé: "valeur"} )

/// Exemple:
db.pays.find( { nomPays: "France" } )
db.pays.find( { iso2: "FR" } )

/* Note : les valeurs sont sensibles à la casse ; "France" est différent de "france" */

		/********************
		*	 Projections	*
		********************/

/* Une projection est la « sélection » d'un certain nombre « d'attributs ». C’est le 2e argument de la méthode find(). C’est un objet JSON. */
db.nomDeLaCollection.find({}, { attribut : booléen[, attribut : booléen] })

/// Exemple:
/* L’_id sera affiché même s’il n’est pas mentionné */
db.pays.find({ } , { nomPays: 1 } )

/* Pour ne pas afficher l'_id et afficher le nom du pays */
db.pays.find({ } , { _id: 0, nomPays: 1 } )

// Avec la méthode projection() :
db.nomDeLaCollection.find({}).projection( { attribut : booléen[, attribut : booléen] } )

/// Exemple:
db.pays.find({ }).projection( { _id: 0, nomPays: 1 } )

	/********************************
	*	 Restriction et Projection	*
	********************************/

//On sélectionne un pays et seulement certains attributs du pays.

db.pays.find( { "nomPays": "France" } , { nomPays: 1 } )

db.pays.find( { "nomPays": "France" } , { _id: 0, nomPays: 1 } )