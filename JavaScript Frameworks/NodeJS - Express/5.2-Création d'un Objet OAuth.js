// Installation de oauth :

/* « OAuth est un protocole libre, créé par Blaine Cook et Chris Messina. Il permet d'autoriser un site web, un logiciel ou une application (dit « consommateur ») à utiliser l'API sécurisée d'un autre site web (dit « fournisseur ») pour le compte d'un utilisateur. OAuth n'est pas un protocole d'authentification, mais de « délégation d'autorisation ». ». Wikipedia. */

npm install oauth --save


// Chargement de oauth
const oAuth = require('oauth');


// En-tête : 
///nom de l’application du développeur ou ID de l’application
var header = {"X-Yahoo-App-Id": "ApplicationName|ApplicationID"};

// Création d’un objet OAuth
const request = new oAuth.Oauth(
null, 
null, 
'Consumer ID', 
'Consumer Secret', 
'version', 
null, 
'HMAC-SHA1', 
null, 
header) ;

// Requête
request.get('URL de requête YQL', null, null, callback);