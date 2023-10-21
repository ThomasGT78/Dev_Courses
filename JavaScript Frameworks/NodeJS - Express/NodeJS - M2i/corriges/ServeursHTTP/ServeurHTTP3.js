/*
ServeurHTTP3.js
L'événement close
*/

const http = require('http');

const hostname = '127.0.0.1';
const port = 8081;

/*
 * Crée un serveur HTTP
 * Crée la réponse à la requête du client
 * Envoie un code OK
 * La réponse contient du texte HTML
 */
var serveur = http.createServer(function (requete, reponse) {
    reponse.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    reponse.write('Bonjour du serveur !<br>');
    reponse.write('Un petit qahwa ?');
    reponse.end();
}).listen(port, hostname);


// On écoute l'évènement close
serveur.on('close', function() { 
    console.log('Bye bye !');
})


// A créé un serveur HTTP sur le port en question ...
console.log("Le serveur attend les requ\352tes \340 cette URL : http:// " + hostname + ":" + port);


// Descend le serveur et donc l'événement close est déclenché
serveur.close();
