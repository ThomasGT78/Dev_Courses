		/************************************
		*	 Exportation de données JSON	*
		************************************/

// Structure
mongoexport -d nomDeLaBD -c nomDeLaCollection --out chemin/nomDuFichier.json
// (variante)
mongoexport -d=nomDeLaBD -c=nomDeLaCollection --out=chemin/nomDuFichier.json


// Mon chemin
"C:/Program Files/MongoDB/Server/4.2/bin/mongoimport.exe" -d cours -c pays_bis --file C:/Users/thoma/Documents/Développeur/~Classe/~M2i_Formation/Cours/MongoDB/Projets/ressources/pays.json


		/********************************
		*	Exportation de données CSV	*
		********************************/

// Structure
mongoexport -d nomDeLaBD -c nomDeLaCollection --type=csv -f=field1,field2, ... --out chemin/nomDuFichier.csv
mongoexport -d=nomDeLaBD -c=nomDeLaCollection --type=csv -f=field1,field2, ... --out=chemin/nomDuFichier.csv

// Mon chemin
"C:/Program Files/MongoDB/Server/4.2/bin/mongoexport.exe" -d cours -c pays --type=csv -f=idPays,nomPays --out C:/Users/thoma/Documents/Développeur/~Classe/~M2i_Formation/Cours/MongoDB/Projets/pays2.csv --