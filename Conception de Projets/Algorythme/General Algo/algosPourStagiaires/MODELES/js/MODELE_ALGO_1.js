/*
 * MODELE_ALGO_1.js
 */

/*
 * Declaration de variables globales
 * Utilisables hors des fonctions et dans les fonctions
 * Elles servent ici principalement a pointer vers
 * les elements d'interface
 */
var itSaisie;
var btValider;
var pResultats;

/*
 * Fonction qui sera executee a la demande
 * logiquement au chargement de la page
 * On initialise les variables globales qui pointent vers des elements HTML
 * On lie les elements a des evenements
 */
function init() {
    // --- Elements
    itSaisie = document.getElementById("itSaisie");
    btValider = document.getElementById("btValider");
    pResultats = document.getElementById("pResultats");

    // --- Evenements
    btValider.onclick = afficher;
} /// init

/*
 * Affichage du resultat
 */
function afficher() {
    // Init de variables locales
    var saisie = itSaisie.value;
    var complexite = 0;

    // --- Affichage de resultats a l'ecran
    pResultats.innerHTML = saisie;

    // Affichage de resultats a la console (Debogue)
    console.log("saisie : " + saisie);
    console.log("complexite : " + complexite);
} /// afficher

// --- Au chargement de la page on appelle la fonction init()
window.onload = init;