// db2csvGenerique.js 
// Charge la biblioth�que mysql et cr�e une � objet �
const mysql = require('mysql'); 
const fs = require("fs");

// Cr�e un objet de type Connection 
const connexion = mysql.createConnection({ 
  host     : 'localhost', 
  port     : '3306', 
  user     : 'root', 
  password : '', 
  database : 'cours' 
}); 

// Connexion � la BD 
connexion.connect(); 
// Ex�cute une requ�te SQL de type SELECT 
var tableName = "produits";
connexion.query('SELECT * FROM ' + tableName, function(err, rows, fields) { 
    // SI OK 
    if (!err) { 
        //console.log('\nLes lignes de la table :');
        console.log(rows);
		console.log(fields);
		// Cr�ation d'un tableau ordinal contenant les noms des colonnes de la table
		// r�cup�res dans les "fields"
		// qui vont devenir les ent�tes du fichier CSV
		// et permettre de r�cup�rer les data dans chaque objet JSON du tableau d'objets JSON des "rows"
		let i = 0;
		let tHeaders = new Array();
		// fields renvoie un tableau d'objets JSON
		for(i = 0; i < fields[0].length; i++) {
			console.log(fields[i].name);
			tHeaders.push(fields[i].name);
		}
		// Cr�ation de la STRING des ent�tes du futur CSV
		let headers = tHeaders.join(";");
		headers += "\n";
		//tHeaders.push(fields[i].name);
		//console.log(fields[i].name);
		
		// Double Boucles sur les donn�es
		let result = "";
		// rows renvoie un tableau d'objets JSON
		for(let i = 0; i < rows.length; i++) {
			//console.log(rows[i]);
			let j = 0;
			// -1 pour ne pas avoir un ; � la fin
			for(j = 0; j < tHeaders.length - 1; j++) {
				result += rows[i][tHeaders[j]];
				result += ";";
			}
			// La derni�re colonne
			result += rows[i][tHeaders[j]];
			result += "\n";
		}
		// �criture Asynchrone
		fs.writeFile(tableName + '.txt', headers + result, function(err) {
			if (err) {
				return console.error(err);
			}
			console.log("Donn�es �crites !");			
		});
    } 
    // Si KO 
    else { 
      console.log('\nErreur d\'ex�cution de la requ�te !' + err); 
    } 
}); 

// D�connexion de la BD 
connexion.end(); /// D�connexion