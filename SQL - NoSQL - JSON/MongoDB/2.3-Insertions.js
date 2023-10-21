// Insertions simple.

> db.villes.insertOne( { id_ville:"1", cp_ville:"75000", nom_ville: "Paris", iso2: "FR" } )


> db.villes.insertOne( { id_ville:"2", cp_ville:"69000", nom_ville: "Lyon", iso2: "FR" } )

> db.villes.insertOne( { id_ville:"3", cp_ville:"59000", nom_ville: "Lille", iso2: "FR" } )

> db.villes.insertOne( { id_ville:"4", cp_ville:"33000", nom_ville: "Bordeaux", iso2: "FR" } )

// Insertions multiples (un tableau de documents).
db.nomDeLaCollection.insertMany( [ {   }, {   }, {   } ] )

> db.villes.insertMany( [{ id_ville:"1", cp_ville:"75000", nom_ville: "Paris", iso2: "FR" }, { id_ville:"2", cp_ville:"69000", nom_ville: "Lyon", iso2: "FR" }, { id_ville:"3", cp_ville:"59000", nom_ville: "Lille", iso2: "FR" }, { id_ville:"4", cp_ville:"33000", nom_ville: "Bordeaux", iso2: "FR" }] )