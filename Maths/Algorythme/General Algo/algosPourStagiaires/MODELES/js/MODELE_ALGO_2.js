/*
 * MODELE_ALGO_2.js
 * Decomposition d'un algo en 3 parties
 * IN - Traitement - OUT
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

var saisie = 0;
var resultat = 0;

/*
 * Fonction qui sera executee a la demande au chargement de la page
 * On initialise les variables globales
 */
function init() {
    itSaisie = document.getElementById("itSaisie");
    btValider = document.getElementById("btValider");
    pResultats = document.getElementById("pResultats");

    btValider.onclick = function() {
        recupererSaisies();
        calculer();
        afficher();
    };
} /// init



/*
 * Recuperation des saisies
 */
function recupererSaisies() {
    saisie = itSaisie.value;
} /// recupererSaisies



/*
 * Calculer
 */
function calculer() {
    resultat = saisie * 10;
} /// calculer



/*
 * Affichage du resultat
 */
function afficher() {
    pResultats.innerHTML = resultat;
} /// afficher

/*
 * Au chargement de la page on appelle la fonction init()
 */
window.onload = init;


