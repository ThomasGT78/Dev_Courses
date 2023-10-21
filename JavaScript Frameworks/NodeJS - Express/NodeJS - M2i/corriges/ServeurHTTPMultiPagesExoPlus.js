/* 
ServeurHTTPMultiPagesExo.js 
Gerer plusieurs "pages" 
Améliorer l'authentification ... ajouter au moins un bouton !!!
Créer la page Inscription donc modif du menu ...
http://localhost:8081/
*/ 

const http = require('http'); 
const url = require('url');
//require('./chargement.js'); 

const ip = '127.0.0.1';
const port = 8081;

// Crée la réponse à la requête du client 
const objetReqRep = function(requete, reponse) { 
    reponse.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
	var urlCourte = requete.url;
	console.log("requete.url: " + urlCourte);
	/*
    var urlRequete = url.parse(requete.url); 
    console.log("urlRequete : " + urlRequete); 
    var chemin = urlRequete.pathname; 
    console.log("chemin : " + chemin); 
	*/

    switch (urlCourte) { 
        case "/Authentification": 
            var page = ""; 
            page += "<html>"; 
            page += "<head>"; 
            page += "</head>"; 
            page += "<body>"; 
            page += "<h1>Authentification</h1>"; 
            page += "<p>Email</p>"; 
            page += "<p><input type='text' name='email' id='email' value='pb@gmail.com' /></p>"; 
            page += "<p>Mot de passe</p>"; 
            page += "<p><input type='password' name='mdp' id='mdp' value='mdp' /></p>"; 
            page += "<p><input type='button' id='btValider' value='Valider' /></p>"; 
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
			
case "/Inscription": 
	var page = ""; 
	page += "<html>"; 
	page += "<head>"; 
	page += "</head>"; 
	page += "<body>"; 
	page += "<h1>Inscription</h1>"; 
	
	page += "<p>Nom :</p>"; 
	page += "<p><input type='text' name='nom' id='nom' value='Buguet' /></p>"; 
	page += "<p>Pr&eacute;nom</p>"; 
	page += "<p><input type='text' name='prenom' id='prenom' value='Pascal' /></p>"; 
	
	page += "<p>Email</p>"; 
	page += "<p><input type='text' name='email' id='email' value='pb@gmail.com' /></p>"; 
	page += "<p>Mot de passe</p>"; 
	page += "<p><input type='password' name='mdp' id='mdp' value='mdp' /></p>"; 
	page += "<p>Mot de passe visible ? <input type='checkbox' name='chkVisible' id='chkVisible' /></p>"; 
	
	page += "<p><input type='button' id='btAnnuler' value='Annuler' /></p>"; 
	page += "<p><input type='button' id='btValider' value='Valider' /></p>"; 
	
	page += "<p><a href='http://" + ip + ":" + port + "/'>Retour &agrave; l'accueil</a></p>";  
	page += "<script>";
	//page += "document.getElementById('btValider').onclick=function(){";
	//page += "alert('CLIC SUR LE BOUTON VALIDER !!!')";
	page += "}";
	page += "</script>";
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
			//page += "<p id='message'>Message</p>";
            page += "<p><a href=http://" + ip + ":" + port + "/Authentification>Authentification</a></p>"; 
            page += "<p><a href=http://" + ip + ":" + port + "/Catalogue>Le catalogue</a></p>";  
            page += "<p><a href=http://" + ip + ":" + port + "/Inscription>Inscription</a></p>";  
			page += "<script src='http://localhost:8081/chargement.js'></script>";			
			page += "</body>"; 
            page += "</html>"; 
            reponse.write(page); 
    } 

    reponse.end(); 
}; 
 
// Crée le serveur http
const serveurHTTP = http.createServer(objetReqRep); 

// Écoute sur l'ip et le port défini plus haut  
serveurHTTP.listen(port, ip); 

// A créé un serveur HTTP sur le port en question ... 
console.log("Serveur tourne sur http://" + ip + ":" + port); 
