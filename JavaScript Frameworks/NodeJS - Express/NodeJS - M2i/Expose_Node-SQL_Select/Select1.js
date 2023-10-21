// Select1.js 

// Charge la bibliothèque mysql et crée une « variable »
const mysql = require('mysql');

// Crée un objet de type Connection 
const connexion = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'cours'
});

// Connexion à la BD 
connexion.connect();

// Exécute une requête SQL de type SELECT 

connexion.query('SELECT * FROM clients', function (err, rows) {
    // Pas d'erreur 
    if (!err) {
        console.log('\nLes lignes de la table :');
        console.log(rows);
    }
    // Erreur 
    else {
        console.log('\nErreur d\'exécution de la requête !' + err);
    }
});

// Déconnexion de la BD 


connexion.end();