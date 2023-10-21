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

// Exécute une requête SQL de type INSERT 
const params = Array('Roux', 'Marie-Joëlle', '75011');
connexion.query("INSERT INTO clients(nom, prenom, cp) VALUES(?,?,?)", params, function(err, result) { 
    // SI OK 
    if (!err) { 
        console.log("Enregistrement(s) ajouté(s) : " + result.affectedRows); 
    } 
    // Si KO 
    else { 
      console.log('\nErreur d\'exécution de la requête !' + err); 
    } 
}); 

connexion.end();
