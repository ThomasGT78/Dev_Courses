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

// Affiche les collections de la BD utilisé
> show collections
pays

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

load("chemin/NomDuFichier.js")

load("/Users/thoma/Documents/Développeur/~Classe/~M2i_Formation/Cours/MongoDB/Projets/ProduitsInsert.js")

