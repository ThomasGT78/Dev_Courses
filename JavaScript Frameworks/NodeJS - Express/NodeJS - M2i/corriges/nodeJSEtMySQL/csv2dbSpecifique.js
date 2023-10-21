// csv2dbSpecifique.js
// Charge la bibliothèque mysql et crée un « objet »
const mysql = require('mysql');
const fs = require("fs");

// Crée un objet de type Connection
const connexion = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : '',
  database : 'cours'
});

// Connexion à la BD
connexion.connect();

const fileName = "pays.txt";
const tableName = "pays_bis";
const columnNames = "id_pays, nom_pays";
let dataInString = "";

// Lecture synchrone
// Le flux d'octeys
const dataStream = fs.readFileSync(fileName);
// Flux -> String
dataInString = dataStream.toString();
console.log("Synchronous read : \n" + dataInString);

const sqlInsert = 'INSERT INTO '  + tableName + '(' + columnNames + ') VALUES(' + '?,?' + ')';
console.log(sqlInsert);
// La STRING du contenu du fichier dans un tableau ordinal
const tRecords = dataInString.split("\n");
for(let i = 0; i < tRecords.length; i++) {
    // Si PAS EMPTY STRING
    if(tRecords[i].trim().length > 0) {
		// La STRING de l'enregistrement courant dans un tableau ordinal
        let tFields = tRecords[i].split(";");
		// Exécute une requête SQL paramétrée de type INSERT
        connexion.query(sqlInsert, tFields, function(err, result) {
            // SI OK
            if (!err) {
                console.log(result.affectedRows);
            }
            // Si KO
            else {
              console.log('\nErreur d\'exécution de la requête !' + err);
            }
        });
    } /// fi
} /// rof

// Déconnexion de la BD
connexion.end(); /// Déconnexion
