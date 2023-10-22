/* 
 * FOR_INVERSE.js
 */

// Déclaration des variables
var i; // Un compteur
var sTexte = ""; // Chaîne initialisée

// Boucle de 1 à 31
// Muyto bem = Muy bien = Molto bene = Très bien = Foarte Bine
for (i = 31; i >= 1; i--) {
    sTexte += i + "-"; // Concaténation de la valeur du compteur et d'un -
}

// Affichage
document.getElementById("lblResultat").innerHTML = sTexte;
