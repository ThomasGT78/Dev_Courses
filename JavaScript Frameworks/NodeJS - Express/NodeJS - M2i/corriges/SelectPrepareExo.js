// SelectPrepareExo.js
const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'cours'
});

connection.connect();

// Exécute une requête SQL de type SELECT paramétré
const params = ["Buguet", "Pascal"];
// query(sql paramétré, param (scalaire ou tableau ordinal), fonction de callback)
connection.query('SELECT * FROM clients WHERE nom = ? AND prenom = ?', params, (err, rows) => {
    if (!err) { // SI OK
        if(rows.length > 0) {
            console.log(rows[0]);
        }
        else {
            console.log('Pas de résultats !!!');
        }
    }
    else { // Si KO
      console.log('Erreur d\'exécution !\n' + err);
    }
});

connection.end();