			/************************
			*	Component FlatList	*
			************************/

// Liste des Styles:
"https://reactnative.dev/docs/flatlist"

// Taille
/*
Component FlatList possède un style  flex: 1 par défaut (C'est pour cela que vos items s'affichent). 
On ne peut pas changer ce style. 
Si vous voulez changer la taille de votre  FlatList , il faut l'encapsuler dans une  View. Sinon, par défaut, elle prendra toute la place disponible.
*/

/// Propriétés
Une FlatList doit obligatoirement implémenter deux propriétés :

//data : 
/* qui correspond aux données affichées dans la liste. Ici, on renseignera nos films ; */

//renderItem : 
/* qui correspond au rendu des données de la liste. Ici, on définira un template pour afficher nos films. */
 
//keyExtractor: 
/* 
vous devez spécifier la propriété de votre item qui va servir de key. Assurez-vous que votre key soit toujours unique
la propriété key du keyExtractor doit être une chaîne de caractères. C'est pourquoi j'ai ajouté la fonction  .toString()
*/

/// Exemple
<FlatList
	data={films}
	keyExtractor={(item) => item.id.toString()}
	renderItem={({ item }) => <Text>{item.title}</Text>}
/>

 