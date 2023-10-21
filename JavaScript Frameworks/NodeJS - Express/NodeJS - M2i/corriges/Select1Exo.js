// Select1Exo.js 
const mysql = require('mysql'); 

// Cr�e une variable de type Connection 
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
      console.log('\nErreur d\'ex�cution de la requ�te !' + err); 
    } 
}); 

// D�connexion de la BD 
connexion.end();
