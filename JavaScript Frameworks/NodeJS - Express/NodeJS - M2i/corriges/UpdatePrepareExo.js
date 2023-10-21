// UpdatePrepareExo.js 
const mysql = require('mysql'); 
 
const connexion = mysql.createConnection({ 
  host     : 'localhost', 
  port     : '3306', 
  user     : 'root', 
  password : '', 
  database : 'cours' 
}); 

connexion.connect(); 

// Ex�cute une requ�te SQL de type SELECT 
const params = Array('BULGARY', 'BG');
connexion.query("UPDATE pays SET nom_pays = ? WHERE id_pays = ?", params, function(err, result) { 
    // SI OK 
    if (!err) { 
        console.log(result); 
    } 
    // Si KO 
    else { 
      console.log('\nErreur d\'ex�cution de la requ�te !' + err); 
    } 
}); 

connexion.end();
