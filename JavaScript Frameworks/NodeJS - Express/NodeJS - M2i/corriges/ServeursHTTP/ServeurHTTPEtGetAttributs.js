/*
ServeurHTTPEtGetAttributs.js
Récupérer les attributs de la requête
*/

const http = require('http');
const url = require('url');
const querystring = require('querystring');

const ip = '127.0.0.1';
const port = 8081;

/*
 * Crée la réponse à la requête du client
 *
 */
const objetReqRep = function(requete, reponse) {
    reponse.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});

	console.log("requete.url : " + requete.url);
    var urlParse = url.parse(requete.url);
	console.log("urlParse : " + urlParse);
    var attributsValeurs = urlParse.query;
	console.log("attributsValeurs : " + attributsValeurs);
    var parametres = querystring.parse(attributsValeurs);
	//console.log("parametres : " + parametres);
    var valeurAttribut = parametres['item'];
	console.log("valeurAttribut : " + valeurAttribut);

    switch (valeurAttribut) { 
        case "ajouter": 
        reponse.write('<p>Ajout</p>'); 
        break; 
    case "supprimer": 
        reponse.write('<p>Suppression</p>'); 
        break; 
    case "modifier": 
        reponse.write('<p>Modification</p>'); 
        break; 
    default: 
        reponse.write('<p>Aucun attribut de requ&ecirc;te</p>'); 
  } 

  reponse.end();
};

/*
 * Crée le serveur http
 */
const serveurHTTP = http.createServer(objetReqRep);

/*
 * Écoute sur le port défini plus haut
 * Démarre le serveur
 */
serveurHTTP.listen(port, ip);

// A créé un serveur HTTP sur le port en question ...
console.log(`Le serveur attend les requêtes à cette URL : http://${ip}:${port}`);