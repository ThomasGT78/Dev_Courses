// db2csvSpecifique.js 
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
const tableName = "villes";
connexion.query('SELECT * FROM ' + tableName, function(err, rows, fields) { 
    // SI OK 
    if (!err) { 
        //console.log('\nLes lignes de la table :');
        console.log(rows); 
		let result = "";
		for(let i = 0; i < rows.length; i++) {
            //result += rows[i].id_pays + ";" + rows[i].nom_pays + "\n";
			result += rows[i].cp + ";" + rows[i].nom_ville + ";" + rows[i].id_pays + "\n";
		}
		console.log(result);
		// Écriture Asynchrone
		fs.writeFile(tableName + '.txt', result, function(err) {
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