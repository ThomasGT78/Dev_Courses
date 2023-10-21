// db2csvGenerique.js 
// Charge la bibliothèque mysql et crée une « objet »
const mysql = require('mysql'); 
const fs = require("fs");

// Crée un objet de type Connection 
const connexion = mysql.createConnection({ 
  host     : 'localhost', 
  port     : '3306', 
  user     : 'root', 
  password : '', 
  database : 'cours' 
}); 

// Connexion à la BD 
connexion.connect(); 
// Exécute une requête SQL de type SELECT 
var tableName = "produits";
connexion.query('SELECT * FROM ' + tableName, function(err, rows, fields) { 
    // SI OK 
    if (!err) { 
        //console.log('\nLes lignes de la table :');
        console.log(rows);
		console.log(fields);
		// Création d'un tableau ordinal contenant les noms des colonnes de la table
		// récupéres dans les "fields"
		// qui vont devenir les entêtes du fichier CSV
		// et permettre de récupérer les data dans chaque objet JSON du tableau d'objets JSON des "rows"
		let i = 0;
		let tHeaders = new Array();
		// fields renvoie un tableau d'objets JSON
		for(i = 0; i < fields[0].length; i++) {
			console.log(fields[i].name);
			tHeaders.push(fields[i].name);
		}
		// Création de la STRING des entêtes du futur CSV
		let headers = tHeaders.join(";");
		headers += "\n";
		//tHeaders.push(fields[i].name);
		//console.log(fields[i].name);
		
		// Double Boucles sur les données
		let result = "";
		// rows renvoie un tableau d'objets JSON
		for(let i = 0; i < rows.length; i++) {
			//console.log(rows[i]);
			let j = 0;
			// -1 pour ne pas avoir un ; à la fin
			for(j = 0; j < tHeaders.length - 1; j++) {
				result += rows[i][tHeaders[j]];
				result += ";";
			}
			// La dernière colonne
			result += rows[i][tHeaders[j]];
			result += "\n";
		}
		// Écriture Asynchrone
		fs.writeFile(tableName + '.txt', headers + result, function(err) {
			if (err) {
				return console.error(err);
			}
			console.log("Données écrites !");			
		});
    } 
    // Si KO 
    else { 
      console.log('\nErreur d\'exécution de la requête !' + err); 
    } 
}); 

// Déconnexion de la BD 
connexion.end(); /// Déconnexion