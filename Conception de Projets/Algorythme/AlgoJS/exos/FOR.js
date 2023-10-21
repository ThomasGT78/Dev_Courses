/* 
 * FOR.js
 */

// Déclaration des variables
var i; // Un compteur
var sTexte = ""; // Chaîne initialisée

// Boucle de 1 a 31
for (i = 1; i <= 31; i++) {
    sTexte += i + "-"; // Concaténation de la valeur du compteur et d'un -
    console.log(i);
}

// Affichage
document.getElementById("lblResultat").innerHTML = sTexte;
