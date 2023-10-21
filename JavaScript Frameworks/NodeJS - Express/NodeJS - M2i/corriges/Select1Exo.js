// Select1Exo.js 
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
connexion.query('SELECT * FROM pays', function(err, rows, fields) { 
    // SI OK 
    if (!err) { 
	    console.log(fields);
        console.log('\nLes lignes de la table :');
        //console.log(rows);
        for(var i = 0; i < rows.length; i++) {
            console.log(rows[i].nom_pays);
        }		
    } 
    // Si KO 
    else { 
      console.log('\nErreur d\'exécution de la requête !' + err); 
    } 
}); 

// Déconnexion de la BD 
connexion.end();
