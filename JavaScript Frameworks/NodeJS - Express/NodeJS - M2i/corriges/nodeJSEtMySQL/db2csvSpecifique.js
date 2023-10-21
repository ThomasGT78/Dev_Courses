// db2csvSpecifique.js 
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
		// �criture Asynchrone
		fs.writeFile(tableName + '.txt', result, function(err) {
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