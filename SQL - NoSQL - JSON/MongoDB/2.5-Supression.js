		/********************************
		*	Suppression de documents	*
		********************************/Suppression de documents : deleteOne, deleteMany, remove
db.nomDeLaCollection.remove( { prédicat } )

// Via le nom :
db.personnes.remove( { nom: "Milou" } )

/* Retour : */
WriteResult({ "nRemoved" : 1 })
ou
WriteResult({ "nRemoved" : 0 })
ou
WriteResult({ "nRemoved" : 3 })

// Via l'_id :
db.personnes.remove( {_id: ObjectId("54e97548bcf5ca7846d1c776")} )

/* Retour: */
writeResult({ "nRemoved" : 1 })

//Supprime un document, s'il y a plusieurs documents correspondant au prédicat seul le premier est supprimé.
db.nomDeLaCollection.deleteOne( { prédicat } )

//Exemple:
db.personnes.deleteOne( { nom: "Milou" } )

/* Retour : */
{ "acknowledged" : true, "deletedCount" : 1 }


//Supprimer tous les documents correspondant au prédicat.
db.nomDeLaCollection.deleteMany( { prédicat } )

// Exemple: 
db.personnes.deleteMany( { nom: "Milou" } )

{ "acknowledged" : true, "deletedCount" : 3 }

// Suppression de tous les documents d'une collection
db.nomDeLaCollection.remove( { } )

// exemple:
db.personnes.remove( { } )

		/************************************
		*	Suppression d'une collection	*
		************************************/
db.nomDeLaCollection.drop()

Renvoie true ou false.
A vérifier ensuite avec show collections.

// Exemple
db.personnes.drop()

		/****************************************
		*	Suppression d'une Base de Données	*
		****************************************/
dbo.dropDatabase('nomDeLaBD');
dbo.dropDatabase();