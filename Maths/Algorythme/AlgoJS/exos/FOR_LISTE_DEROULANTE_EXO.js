/* 
 * FOR_LISTE_DEROULANTE_EXO.js
 */

// Déclaration des variables
var i; // Un compteur
var sTexte = ""; // Chaîne initialisée

/*
 * JOURS
 */
// On concatène par accumulation
// equiv sTexte = sTexte + "qq chose";
sTexte += "<option value=''>--Sélectionnez un jour--</option>";
// Boucle de 1 à 31
for (i = 1; i <= 31; i++) {
    sTexte += "<option value='" + i + "'>" + i + "</option>"; // Concaténation de la valeur du compteur et d'un -
}
document.getElementById("jours").innerHTML = sTexte;

/*
 * MOIS
 */
// On concatène par accumulation
// equiv sTexte = sTexte + "qq chose";
sTexte = "<option value=''>--Sélectionnez un mois--</option>";
// Boucle de 1 à 12
for (i = 1; i <= 12; i++) {
    sTexte += "<option value='" + i + "'>" + i + "</option>"; // Concaténation de la valeur du compteur et d'un -
}
document.getElementById("mois").innerHTML = sTexte;

/*
 * ANNEES
 */
// On concatène par accumulation
// equiv sTexte = sTexte + "qq chose";
sTexte = "<option value=''>--Sélectionnez une année--</option>";
// Boucle de 1900 à 2020
for (i = 1900; i <= 2020; i++) {
    sTexte += "<option value='" + i + "'>" + i + "</option>"; // Concaténation de la valeur du compteur et d'un -
}

// Affichage
document.getElementById("annees").innerHTML = sTexte;


console.log("C'est parfait monsieur UFUK");
