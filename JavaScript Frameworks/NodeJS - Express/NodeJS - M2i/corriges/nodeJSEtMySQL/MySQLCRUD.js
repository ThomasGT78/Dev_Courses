// MySQLCRUD.js

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Le dossier des ressources statiques
//app.use(express.static(__dirname + '/public'));
//app.use(express.static("public"));
app.use("/", express.static(__dirname + '/public'));

// Crée une variable globale de type Connection
const connection = mysql.createConnection({
    host     : 'localhost',
    port     : '3306',
    user     : 'root',
    password : '',
    database : 'cours'
});

// Connexion a la BD
connection.connect();

// Vers la page AccueilMySQL.ejs
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.render('AccueilMySQL.ejs', {message: ""});
});


// Vers la page CatalogueMySQL.ejs
// http://localhost:8081/catalogue
app.get('/catalogue', function(req, res) {
    let message = "";
    // Exécute une requête SQL de type SELECT
    connection.query('SELECT id_produit, designation, prix FROM produits', function(err, rows) {
        // SI KO
        if (err) {
            message = "Extraction KO";
            rows = new Array();
        }
        // rows renvoie un tableau d'objets JSON
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.render('CatalogueMySQL.ejs', {produits: rows, message: ""} );
        // Déconnexion de la BD
        //connection.end();
    });
});

// Vers la page fiche du produit : ProduitMySQL.ejs
// http://localhost:8081/select/1
app.get('/select/:code', function(req, res) {
    let message = "";
    let designation = "";
    let prix = 0;
    let photo = "";
    console.log(req.params.code);
    connection.query('SELECT * FROM produits WHERE id_produit=?', req.params.code, function(err, rows) {
        // SI OK
        if (!err) {
           designation = rows[0].designation;
           prix = rows[0].prix;
           photo = rows[0].photo;
           message = "OK";
          // Déconnexion de la BD
           //connection.end();
        }
        // Si KO
        else {
           designation = "Erreur désignation";
           prix = "Erreur prix";
           photo = "Erreur photo";
           message = "Query KO";
        }
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.render('ProduitMySQL.ejs', {message: "", code: req.params.code, designation: designation, prix: prix, photo: photo});
        // Déconnexion de la BD
        //connection.end();
        }); /// query
}); /// selectOne


// Vers la page ProduitAjoutMySQL.ejs
app.get('/ajout', function(req, res) {
	console.log("/ajout");
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.render(__dirname + '/views/ProduitAjoutMySQL.ejs', {message: ""});
});

// Validation de l'ajout
app.post('/ajoutValidation', function(req, res) {
	let message = "";
	let prix = req.body.prix;
	console.log("/ajoutValidation");
	// Insertion dans la BD
	// Récupération des saisies du formulaire
	const params = {'designation':req.body.designation, 'prix':req.body.prix, 'photo':req.body.photo};
	// Requête d'insertion
	connection.query('INSERT INTO produits SET ?', params, function(err, affected) {
		// Si KO
		if(err) {
			console.log("KO");
			message = 'Erreur -1 : ' + err.code;
		}
		else {
			console.log("OK");
			message = affected.affectedRows + " produit(s) ajouté(s)";
		}
	}); /// query
	
	// Déconnexion de la BD
	//connection.end();
	// Page de message de la validation
	res.setHeader('Content-Type', 'text/html; charset=utf-8');
	res.render('ProduitAjoutMySQL.ejs', {message: message});
}); /// post ajout validation



/*
EXERCICES
*/

// Vers la page ProduitSuppressionMySQLWithInput.ejs
app.get('/suppressionInput', function(req, res) {
    let message = "";
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.render('ProduitSuppressionMySQLWithInput.ejs', {message: message});
});

// Validation de la suppression with INPUT
app.post('/suppressionValidationWithInput', function(req, res) {
    // Suppression dans la BD
    let message = "";
    // Récupération des saisies du formulaire
    const param = req.body.designation;
    // Requête de suppression
    connection.query('DELETE FROM produits WHERE designation = ?', param, function(err, affected) {
        if(err) {
            message = 'Erreur -1 : ' + err.code;
        }
        else {
            message = "Code : " + affected.affectedRows + " (Suppression OK)";
        }
        // Page de message de la validation
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.render('ProduitSuppressionMySQLWithInput.ejs', {message: message});
        // Déconnexion de la BD
        //connection.end();
        }); /// query
}); /// post suppression validation



// Vers la page ProduitSuppressionMySQLWithSelect.ejs
app.get('/suppressionSelect', function(req, res) {
    let message = "";
    connection.query('SELECT * FROM produits', function(err, rows) {
        // Si KO
        if (err) {
            // Affichage dans la page ???
            message = "Extraction KO";
            rows = new Array();
        }
        // Déconnexion de la BD
        //connection.end();
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.render('ProduitSuppressionMySQLWithSelect.ejs', {message: message, produits: rows});
        // Déconnexion de la BD
        //connection.end();
    });
});

// Validation de la suppression with SELECT
app.post('/suppressionValidationWithSelect', function(req, res) {
    // Suppression dans la BD
    let message = "";
    let produitsList = new Array();
	// Récupération des saisies du formulaire
        const param = req.body.id_produit;
        // Requête de suppression
        connection.query('DELETE FROM produits WHERE id_produit = ?', param, function(err, affected) {
			if(err) {
                message = 'Erreur -1 : ' + err.code;
            }
            else {
                message = affected.affectedRows + " produit(s) supprimé(s)";
				// Pour remplir la liste
				connection.query('SELECT * FROM produits', function(err, rows) {
					// Si KO
					if (err) {
						// Affichage dans la page ???
						message = "Extraction KO";
					} else {
						produitsList = rows;
					}
				
					// Page de message de la validation
					res.setHeader('Content-Type', 'text/html; charset=utf-8');
					res.render('ProduitSuppressionMySQLWithSelect.ejs', {message: message, produits: produitsList});
				}); /// query
			}	  
		});
}); /// post suppression validation


// ... Tout le code de gestion des routes (app.get) se trouve au-dessus
app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(404).send('Page introuvable !');
});

app.listen(8081);

console.log("Le serveur tourne sur http://localhost:8081");
