// Select3Exo.js
const mysql = require('mysql');

// Crée une variable de type Connection
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
connexion.query("SELECT * FROM clients WHERE nom ='Buguet'", function(err, rows, fields) {
    // SI OK
    if (!err) {
        console.log('\nLes lignes de la table :');
        console.log(rows);
		for(let i = 0; i < rows.length; i++) {
			console.log("Le type de la date");
			console.log(typeof rows[i].date_naissance);
			let date = new Date(rows[i].date_naissance);
			let dateFR = rows[i].date_naissance.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getYear();
			console.log(date);
			//console.log(dateFR);
            console.log("[" + rows[i]["id_client"] + "] " +  rows[i].prenom + " " + rows[i].nom + " n\u00e9(e) le " + dateFR);
        }
	}
    // Si KO
    else {
      console.log('\nErreur d\'ex\u00e9cution de la requête !' + err);
    }
});

// Déconnexion de la BD
connexion.end();
