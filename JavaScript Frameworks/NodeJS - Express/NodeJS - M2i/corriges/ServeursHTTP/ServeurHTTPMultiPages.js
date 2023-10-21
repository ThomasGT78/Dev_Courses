/*
ServeurHTTPMultiPages.js
Gérer plusieurs "pages"
Pour l’exécuter à la console : node ServeurHTTPMultiPages
http://localhost:8081/
*/

const http = require('http');
const url = require('url');

const ip = '127.0.0.1';
const port = 8081;


/*
 * Crée la réponse à la requête du client
 */
const objetReqRep = function(requete, reponse) {
    reponse.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});

    // Par exemple / ou /Authentification ou /Catalogue
    // donc le chemin après http://nom de domaine:port/
    var urlCourt = requete.url;
    console.log("requete.url: " + urlCourt);
    /*
    var urlRequete = url.parse(requete.url);
    console.log("urlRequete : " + urlRequete);
    var chemin = urlRequete.pathname;
    console.log("chemin : " + chemin);
    */

    // Test de la valeur de l'URL court
    switch (urlCourt) {
        case "/Authentification":
            var page = "";
            page += "<html>";
            page += "<head>";
            page += "</head>";
            page += "<body>";
            page += "<h1>Authentification</h1>";
            page += "<p>Email</p>";
            page += "<p><input type='text' name='email' value='pb@gmail.com' /></p>";
            page += "<p>Mot de passe</p>";
            page += "<p><input type='password' name='mdp' value='mdp' /></p>";
            page += "<p><a href='http://" + ip + ":" + port + "/'>Retour &agrave; l'accueil</a></p>";
            page += "</body>";
            page += "</html>";
            reponse.write(page);
            break;
        case "/Catalogue":
            var page = "";
            page += "<html>";
            page += "<head>";
            page += "</head>";
            page += "<body>";
            page += "<h1>Catalogue</h1>";
            page += "<p><a href='http://" + ip + ":" + port + "/'>Retour &agrave; l'accueil</a></p>";
            page += "</body>";
            page += "</html>";
            reponse.write(page);
            break;
        default:
            var page = "";
            page += "<html>";
            page += "<head>";
            page += "</head>";
            page += "<body>";
            page += "<h1>Accueil</h1>";
            page += "<p><a href=http://" + ip + ":" + port + "/Authentification>Authentification</a></p>";
            page += "<p><a href=http://" + ip + ":" + port + "/Catalogue>Le catalogue</a></p>";
            page += "</body>";
            page += "</html>";
            reponse.write(page);
    }

    reponse.end();
};

/*
 * Crée le serveur http
 */
const serveurHTTP = http.createServer(objetReqRep);

// Écoute sur l'ip et le port défini plus haut
serveurHTTP.listen(port, ip);

// A créé un serveur HTTP sur le port en question ...
console.log("Serveur tourne sur http://" + ip + ":" + port);
