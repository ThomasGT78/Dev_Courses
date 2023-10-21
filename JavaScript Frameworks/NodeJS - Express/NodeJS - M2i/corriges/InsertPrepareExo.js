// InsertPrepareExo.js 
const mysql = require('mysql'); 
 
const connexion = mysql.createConnection({ 
  host     : 'localhost', 
  port     : '3306', 
  user     : 'root', 
  password : '', 
  database : 'cours' 
}); 

connexion.connect(); 

// Ex�cute une requ�te SQL de type INSERT 
const params = Array('Roux', 'Marie-Jo�lle', '75011');
connexion.query("INSERT INTO clients(nom, prenom, cp) VALUES(?,?,?)", params, function(err, result) { 
    // SI OK 
    if (!err) { 
        console.log("Enregistrement(s) ajout�(s) : " + result.affectedRows); 
    } 
    // Si KO 
    else { 
      console.log('\nErreur d\'ex�cution de la requ�te !' + err); 
    } 
}); 

connexion.end();
