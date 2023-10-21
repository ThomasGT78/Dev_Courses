/*
ServeurHTTP2.js
*/

const http = require('http');

const hostname = '127.0.0.1';
const port = 8081;

// Crée un serveur HTTP
var serveur = http.createServer();

// L'événement "onRequest"
serveur.on('request', function(requete, reponse) {
	reponse.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    reponse.write('Bonjour du serveur !<br>');
    reponse.write('Un petit qahwa ?');
    reponse.end();
	console.log("On Request");
});

serveur.listen(port, hostname);

serveur.on('connection', function() {
	console.log("Connection");
});

serveur.on('connect', function() {
	console.log("Connect");
});


// A créé un serveur HTTP sur le port en question ...
console.log("Le serveur attend les requ\352tes \340 cette URL : http://" + hostname + ":" + port);
