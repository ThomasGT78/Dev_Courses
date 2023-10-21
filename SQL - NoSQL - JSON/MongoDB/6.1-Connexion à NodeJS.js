// Chargement du module MongoClient
var mongoClient = require('mongodb').MongoClient;

// Connexion
mongoClient.connect("mongodb://localhost:27017/nomDeLaBD", function(err, db) {

mongoClient.connect("mongodb://user:mdp@ip_server:27017/nomDeLaBD", function(err, db) {

// Déconnexion
db.close();


// Création d'une collection
db.createCollection('nomDeLaCollection', function(err, collection) {});

//Note pour d'autres syntaxes :
/* Cette syntaxe ne crée pas de collection tant qu'aucun document n'a été inséré. */
db.collection('nomDeLaCollection', function(err, collection) {});

/* Cette syntaxe renvoie un erreur si la collection existe déjà. */
db.createCollection('nomDeLaCollection', {strict:true}, function(err, collection) {});

//Suppression d'une collection
db.collection('nomDeLaCollection').drop();

// Insertion d'un document
var collection = db.collection('nomDeLaCollection');
var document = {'champ1':'valeur1', 'champ2':'valeur2'};
collection.insert(document);

// Visualisation des documents
var curseur = db.collection('nom_de_la_collection');
collection.find().toArray(function(err, items) {
/* et ensuite une boucle for */

// ou

var stream = collection.find({}).stream();
stream.on("data", function(item) { 
/* et ensuite une boucle for */