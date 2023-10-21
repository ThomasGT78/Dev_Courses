// UpdateExo.js 
const mysql = require('mysql'); 
 
const connexion = mysql.createConnection({ 
  host     : 'localhost', 
  port     : '3306', 
  user     : 'root', 
  password : '', 
  database : 'cours' 
}); 

connexion.connect(); 

// Ex�cute une requ�te SQL de type UPDATE 
connexion.query("UPDATE villes SET nom_ville = 'Paris XXI' WHERE cp = '75021'", function(err, result) { 
    // SI OK 
    if (!err) { 
		console.log('Result : ', result);
        console.log("Nombre de ligne(s) modifi�es : " + result.affectedRows); 
    } 
    // Si KO 
    else { 
      console.log('\nErreur d\'ex�cution de la requ�te !' + err); 
    } 
}); 

connexion.end();
