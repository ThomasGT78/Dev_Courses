		/************************
		*	 Base de Données	*
		************************/
		
// Créer une BD
> use cours
=> switched to db cours

// Affiche la Base de Données en cours
> db
=> cours

// Affiche les Bases de Données
> show dbs
=> 
admin   0.000GB
config  0.000GB
cours   0.000GB
local   0.000GB

		/************************
		*	 Collection (Table)	*
		************************/

// Création d'une Collection
> db.createCollection("pays")
=> { "ok" : 1 }

// Affiche les collections de la BD utilisé
> show collections
pays

		/************************
		*	 Document (Ligne)	*
		************************/

// Insertion d'un document (Ligne) dans la collection
// Crée la collection si non-existante
> db.pays.insertOne( { iso2:"FR", nomPays:"France" } )
=>
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5fd72d6c07ee27f3ee6745ef")
}

//
> db.personnes.insertOne( { nom:"Casta", dateNaissance: new Date(2017, 1, 3, 21, 12) })
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5fd72f6fca79a6e3871f4eaf")
}


// Montrer le contenu d'une collection
> db.pays.find()
=>
{ "_id" : ObjectId("5fd72d6c07ee27f3ee6745ef"), "iso2" : "FR", "nomPays" : "France" }

// Montrer le contenu d'une collection (Bien rangé)
> db.pays.find().pretty() 
=>
{
        "_id" : ObjectId("5fd72d6c07ee27f3ee6745ef"),
        "iso2" : "FR",
        "nomPays" : "France"
}
