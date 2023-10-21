// Sélection en fonction de l'existence d'un attribut
{ field: { $exists: <boolean> } }

/// Exemple :
db.personnes.find({ dateNaissance:{$exists: true} } , { _id: 0, nom: 1, dateNaissance: 1 } )

/// Résultats :
{ "nom" : "Casta", "date_naissance" : ISODate("2018-05-07T03:03:30.418Z") }
{ "nom" : "Casta", "date_naissance" : ISODate("2017-01-01T00:00:00Z") }

// Restrictions et Expressions Régulières
/// les personnes dont le nom commence par « Ti »
db.personnes.find( { nom: /^Ti/ } )

/// Les personnes dont le nom se termine par « in ».
db.personnes.find( { nom: /in$/ } )

/// Les pays dont le nom contient « an » (France et Albanie).
db.pays.find( { nomPays: /an/ } )
// ou
db.pays.find( { nomPays: /.*an.*/ } )
// ou
db.pays.find( { nomPays: /.{1,}an.{1,}/ } )

// Il est aussi possible d'utiliser l'opérateur $regex :
{ <field>: { $regex: /pattern/<options> } }

db.pays.find( { nomPays: { $regex : /.{1,}an.{1,}/ } } )

// Sélection du premier document d'une collection
db.collection.find().limit(1)
db.pays.find().limit(1)
// Ou
db.collection.findOne()
db.pays.findOne()

// Sélection d'un document en fonction de son _id (restriction)
db.produits.find({"_id" : ObjectId("id")}) 
/* id est sur 24 chiffres en Hexa */

db.produits.find({"_id": ObjectId("58a7d7d0d32880eb82994734")}) 

/// Exemple
{ "_id" : ObjectId("58a7d7d0d32880eb82994734"), "designation" : "coca", "prix" : 0 } 
