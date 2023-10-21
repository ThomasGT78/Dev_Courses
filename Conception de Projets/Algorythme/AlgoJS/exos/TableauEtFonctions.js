/* 
 * TableauEtFonctions.js
 */

/*
 * LES FONCTIONS
 */
/**
 * 
 * @param {type} tableau
 * @returns {type.s|Number|Number.s}
 */
function somme(tableau) {
    var s = 0;
    for (var i = 0; i < tableau.length; i++) {
        console.log(i);
        s += tableau[i];
    }
    return s;
} /// somme

/**
 * 
 * @param {type} tableau
 * @returns {Number}
 */
function moyenne(tableau) {
    return somme(tableau) / tableau.length;
} /// moyenne


/**
 * 
 * @type min.tableau
 */
function min(tableau) {
    var min = tableau[0];
    for (var i = 1; i < tableau.length; i++) {
        if (tableau[i] < min) {
            min = tableau[i];
        }
    }

    return min;
} /// min

/**
 * Cette fonction renvoie la position de la valeur MIN du tableau
 * @param {type} tableau
 * @returns {Number}
 */
function posMin(tableau) {
    var min = tableau[0];
    var pos = 0;
    for (var i = 1; i < tableau.length; i++) {
        if (tableau[i] < min) {
            //min = tableau[i];
            pos = i;
        }
    }

    return pos + 1;
} /// posMin

function getMax(tableau) {
    var max = tableau[0];
    for (var i = 1; i < tableau.length; i++) {
        if (tableau[i] > max) {
            max = tableau[i];
        }
    }

    return max;
} /// getMax

/**
 * 
 * @param {type} tableau
 * @param {type} valeurRecherchee
 * @returns {Number}
 */
function rechercher(tableau, valeurRecherchee) {
    var position = -1;
    var passages = 0;

    for (var i = 0; i < tableau.length; i++) {
        if (tableau[i] == valeurRecherchee) {
            position = i + 1;
        }
        passages++;
    }
    console.log("Passages sans optimisation : " + passages);
    return position;
} /// rechercher

/**
 * 
 * @param {type} tableau
 * @param {type} valeurRecherchee
 * @returns {Number}
 */
function rechercherAvecOptimisation(tableau, valeurRecherchee) {
    // Déclaration d'une variable nommée position et affectation de la valeur -1
    var position = -1;

    // Déclaration d'une variable nommée i et affectation de la valeur 0
    // Elle sert de compteur, position dans le tableau, index, indice, pour parcourir le tableau
    var i = 0;
    // Déclaration d'une variable nommée "trouvé" et affectation de la valeur false
    // Par définition au début je n'ai rien trouvé puisque je n'ai pas commencé à chercher
    var trouve = false;
    // Déclaration d'une variable nommée "passages" et affectation de la valeur 0
    // Permet de connaître le nombre de passages dans la boucle WHILE
    var passages = 0;
    // Bouche : TANK je suis dans le tableau et que je n'ai pas trouvé je continue de boucler
    // TANK(CONDITION = TRUE) je reste dans la boucle
    // SI la CONDITION passe à FAUX je sors de la boucle
    // AU DEBUT i = 0 et trouve = FALSE donc la condition est VRAI et VRAI donc VRAI
    while (i < tableau.length && !trouve) {
        // Si la valeur à la position i est égale à la valeur recherchée ALORS
        if (tableau[i] == valeurRecherchee) {
            // Je stocke l'indice courant dans la variable position
            position = i + 1;
            // J'affecte à la variable nommé "trouvé" la valeur TRUE (VRAI)
            // Pourquoi ? Pour arrêter de boucler et donc sortir de la boucle
            trouve = true; // DONC !trouve = FALSE
        }
        // Affichage console
        console.log(i);
        console.log(trouve);
        // Incrémentation du compteur pour passer à l'élément suivant du tableau
        i++;
        
        passages++;
    }

    console.log("Passages avec optimisation : " + passages);

    // La fonction renvoie la position de la valeur recherchée dans le tableau ou -1 si NON TROUVE
    return position;
} /// rechercherAvecOptimisation

/*
 * MAIN
 */
// Déclaration du tableau
var t = new Array(5, 3, 1, 11, 7);
// Affichage du tableau
var contenu = "";
for (var i = 0; i < t.length; i++) {
    contenu += t[i] + " | ";
}
document.getElementById("leTableau").innerHTML = "Contenu du tableau : " + contenu;
// Appel de la fonction "somme()"
var s = somme(t);
// AFFICHAGES
// à la console
console.log(s);
// dans la page
document.getElementById("laSomme").innerHTML = "La somme des éléments est : " + s;
// MOYENNE
var m = moyenne(t);
document.getElementById("laMoyenne").innerHTML = "La moyenne des éléments est : " + (Math.round(m * 100) / 100);
//document.getElementById("laMoyenne").innerHTML = "La moyenne des éléments est : " + m;
// MIN
var mini = min(t);
document.getElementById("laValeurMin").innerHTML = "La mini des éléments est : " + mini;
// MAX
var maxi = getMax(t);
document.getElementById("laValeurMax").innerHTML = "La max des éléments est : " + maxi;

// POS MIN
var pos = posMin(t);
document.getElementById("laPositionDuMin").innerHTML = "La position du min des éléments est : " + pos;

// POS MAX

// RECHERCHE
//alert(position);
var valeurRecherchee = 1;
var pos = rechercher(t, valeurRecherchee);
document.getElementById("laPositionDeLaValeurRecherchee").innerHTML = "La position de " + valeurRecherchee + " dans les éléments du tableau est : " + pos;

document.getElementById("btValider").onclick = function () {
    var valeurRecherchee = document.getElementById("saisie").value;
    var pos = rechercher(t, valeurRecherchee);
    //alert(pos);
    document.getElementById("laPositionDeLaValeurRecherchee").innerHTML = "La position de " + valeurRecherchee + " dans les éléments du tableau est : " + pos;

//    var valeurRecherchee = document.getElementById("saisie").value;
    var pos = rechercherAvecOptimisation(t, valeurRecherchee);
    //alert(pos);
    document.getElementById("laPositionDeLaValeurRechercheeAvecOptimisation").innerHTML = "La position de " + valeurRecherchee + " dans les éléments du tableau est : " + pos;
};

