/*
ServeurHTTPEtGetAttributs.js
R�cup�rer les attributs de la requ�te
*/

const http = require('http');
const url = require('url');
const querystring = require('querystring');

const ip = '127.0.0.1';
const port = 8081;

/*
 * Cr�e la r�ponse � la requ�te du client
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
 * Cr�e le serveur http
 */
const serveurHTTP = http.createServer(objetReqRep);

/*
 * �coute sur le port d�fini plus haut
 * D�marre le serveur
 */
serveurHTTP.listen(port, ip);

// A cr�� un serveur HTTP sur le port en question ...
console.log(`Le serveur attend les requ�tes � cette URL : http://${ip}:${port}`);