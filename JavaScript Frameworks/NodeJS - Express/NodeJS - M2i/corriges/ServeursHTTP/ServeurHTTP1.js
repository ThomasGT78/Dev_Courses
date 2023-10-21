/*
ServeurHTTP1.js
*/

const http = require('http');

const hostname = '127.0.0.1';
const port = 8081;

/*
 * Cr�e un serveur HTTP
 * Cr�e la r�ponse � la requ�te du client
 * Envoie un code OK : 200
 * La r�ponse contient du texte HTML ... tr�s embryonnaire 
 */
http.createServer(function (requete, reponse) {
	// Code 200 = OK
    reponse.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    reponse.write('Bonjour du serveur !<br>');
    reponse.write('Un petit qahwa ?');
    reponse.end();
}).listen(port, hostname);

// A cr�� un serveur HTTP sur le port en question ...
console.log("Le serveur attend les requ\352tes \340 cette URL : http:// " + hostname + ":" + port);
