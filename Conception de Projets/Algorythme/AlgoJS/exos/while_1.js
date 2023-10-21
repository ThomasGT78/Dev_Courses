/*
 * While_1.js
 */

// Déclaration des variables
// Chaîne initialisée à chaîne vide
var sTexte = "";

// Un compteur; cette valeur permet d'entrer dans la boucle
var i = 1; 

// Boucle de 1 à 31
while (i <= 31) {
    // Concaténation de la valeur du compteur et d'un -
    sTexte += i + "-";
    // i va passer de 1 à 2 puis de 2 à 3 etc
    // Cela permettra de sortir de la boucle
    i++;
}

// Affichage
document.getElementById("lblResultat").innerHTML = sTexte;
