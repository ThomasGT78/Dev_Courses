		/************************************
		*	 Importation de données JSON	*
		************************************/

// Structure
chemin/mongoimport.exe -d dbName -c collectionName [--jsonArray] --file /chemin/fileName.json

// Mon chemin
"C:/Program Files/MongoDB/Server/4.2/bin/mongoimport.exe" -d cours -c pays_bis --file C:/Users/thoma/Documents/Développeur/~Classe/~M2i_Formation/Cours/MongoDB/Projets/ressources/pays.json

// exemple.json
{ _id:4, idCategorie:4, categorie:"Champagnes" }
{ _id:5, idCategorie:5, categorie:"Alcools"}
{ _id:6, idCategorie:6, categorie:"Pétillants"}

		/********************************
		*	Importation de données CSV	*
		********************************/

// Structure
chemin/mongoimport.exe -d NomDeBD -c NomCollection --type csv --file nomDuFichier.csv --headerline

// Mon chemin
"C:/Program Files/MongoDB/Server/4.2/bin/mongoimport.exe" -d cours -c pays --type csv --file C:/Users/thoma/Documents/Développeur/~Classe/~M2i_Formation/Cours/MongoDB/Projets/ressources/pays.csv --headerline

// exemple.csv
iso2,nomPays
DZ,Algérie
MA,Maroc
TN,Tunisie