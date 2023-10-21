// Opérateurs de comparaison

//	$eq	
Correspond aux valeurs qui sont égales à une valeur spécifiée.

//	$gt	
Correspond aux valeurs supérieures à une valeur spécifiée.

//	$gte	
Correspond aux valeurs supérieures ou égales à une valeur spécifiée.

//	$in	
Correspond à l'une des valeurs spécifiées dans un tableau.

//	$lt	
Correspond aux valeurs inférieures à une valeur spécifiée.

//	$lte	
Correspond aux valeurs inférieures ou égales à une valeur spécifiée.

//	$ne	
Correspond à toutes les valeurs qui ne sont pas égales à une valeur spécifiée.

//	$nin	
Ne correspond à aucune des valeurs spécifiées dans un tableau.

/// Structure:
db.nomDeLaCollection.find( { champ: {$op: valeur} } )

/// Exemple:
db.personnes.find( { idPersonne: { $gt: 5 } } )