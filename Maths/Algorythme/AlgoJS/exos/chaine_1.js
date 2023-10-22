/*
 * chaine_1.js
 */

var pResultats = document.getElementById("pResultats");
var chaine = "azerty";

pResultats.innerHTML = "Contenu de la chaine : " + chaine + "<br>";
pResultats.innerHTML += "Longueur de la chaîne : " + chaine.length + "<br>";
pResultats.innerHTML += "2ème caractère : " + chaine[1];
