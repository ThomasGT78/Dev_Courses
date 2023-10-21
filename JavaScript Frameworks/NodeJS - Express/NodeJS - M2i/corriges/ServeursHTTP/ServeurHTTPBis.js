/*
 * ServeurHTTPBis.js
 *
 * donc pour l'exécuter
 * node ServeurHTTPBis
 *
 */

const http = require('http');

const hostname = '127.0.0.1';
const port = 8081;

/*
 * Crée la réponse à la requête du client
 */
const objetReqRep = (requete, reponse) => {
    reponse.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    reponse.write('Bonjour du serveur !<br>');
    reponse.write('Un petit qahwa ?');
    reponse.end();
};


/*
 * Crée le serveur http
 */
const serveurHTTP = http.createServer(objetReqRep);

/*
 * Écoute sur le port défini plus haut
 */
serveurHTTP.listen(port, hostname);

// A créé un serveur HTTP sur le port en question ...
console.log("Le serveur attend les requ\352tes \340 cette URL : http://localhost:" + port);
