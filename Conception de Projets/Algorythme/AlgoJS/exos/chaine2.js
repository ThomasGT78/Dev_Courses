/*
 * chaine.js
 */

var pResultats = document.getElementById("pResultats");
var chaine = "azerty";

/*
 * Chaîne à la verticale
 */
var resultat = "";
for (var i = 0; i < chaine.length; i++) {
    resultat += chaine[i] + "<br>";
}

document.getElementById("pResultats").innerHTML = resultat;

/*
 * UCFirst
 */
console.log("*** UCFIRST ***");
// je réinitialise ma String
chaine = "AzErTy";
console.log("IN : " + chaine);
// J'extrais le 1e car
var premierCaractere = chaine[0];
// J'extrais les caractères du 2e à la fin
var autresCaracteres = chaine.substr(1);
// Je mets en majuscules
premierCaractere = premierCaractere.toUpperCase();
// je mets en minuscules
autresCaracteres = autresCaracteres.toLowerCase();
// Je concatène ...
var ucFirst = premierCaractere + autresCaracteres;
// J'affiche à la console
//document.getElementById("pResultats").innerHTML = ucFirst;
console.log("OUT : " + ucFirst);

/*
 * RECHERCHE UN CARACTERE, LE DERNIER S'IL Y A DES DOUBLONS, AFFICHER LA POSITION
 */
console.log("*** Rechercher un caractère ***");
console.log("IN : " + chaine);
chaine = "azertyazerty";
var caractereRecherche = "r";
console.log("Caractère recherché  : " + caractereRecherche);
var position = -1;
for (var i = 0; i < chaine.length; i++) {
    if (chaine[i] == caractereRecherche) {
        position = i + 1;
    }
}
console.log("OUT : " + position);
