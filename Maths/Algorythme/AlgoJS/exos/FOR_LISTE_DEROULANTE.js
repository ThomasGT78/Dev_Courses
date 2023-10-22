/* 
 * FOR_LISTE_DEROULANTE.js
 */

// Déclaration des variables
var i; // Un compteur
var sTexte = ""; // Chaîne initialisée

sTexte += "<option value=''>--Sélectionnez un jour--</option>";

// Boucle de 1 a 31
for (i = 1; i <= 31; i++) {
    sTexte += "<option value='" + i + "'>" + i + "</option>"; // Concaténation de la valeur du compteur et d'un -
}

// Affichage
document.getElementById("jours").innerHTML = sTexte;
