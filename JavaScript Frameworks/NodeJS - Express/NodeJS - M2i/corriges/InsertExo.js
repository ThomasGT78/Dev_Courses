// InsertExo.js 
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
connexion.query("INSERT INTO villes(cp, nom_ville, id_pays) VALUES('75021','Paris 21','033')", function(err, result) { 
    // SI OK 
    if (!err) { 
		console.log('Result : ', result);
        console.log("Nombre de ligne(s) ajoutées : " + result.affectedRows); 
    } 
    // Si KO 
    else { 
      console.log('\nErreur d\'exécution de la requête !' + err); 
    } 
}); 

connexion.end();
