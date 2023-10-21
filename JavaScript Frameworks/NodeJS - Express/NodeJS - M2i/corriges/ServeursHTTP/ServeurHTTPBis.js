/*
 * ServeurHTTPBis.js
 *
 * donc pour l'ex�cuter
 * node ServeurHTTPBis
 *
 */

const http = require('http');

const hostname = '127.0.0.1';
const port = 8081;

/*
 * Cr�e la r�ponse � la requ�te du client
 */
const objetReqRep = (requete, reponse) => {
    reponse.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    reponse.write('Bonjour du serveur !<br>');
    reponse.write('Un petit qahwa ?');
    reponse.end();
};


/*
 * Cr�e le serveur http
 */
const serveurHTTP = http.createServer(objetReqRep);

/*
 * �coute sur le port d�fini plus haut
 */
serveurHTTP.listen(port, hostname);

// A cr�� un serveur HTTP sur le port en question ...
console.log("Le serveur attend les requ\352tes \340 cette URL : http://localhost:" + port);
