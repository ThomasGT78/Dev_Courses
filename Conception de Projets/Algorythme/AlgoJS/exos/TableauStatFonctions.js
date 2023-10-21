/* 
 * TableauStatFonctions.js
 * somme, moyenne, min, max, 
 * recherche (position) , recherche optimisée (position),
 * etc ..;
 */

/**
 * 
 * @param {type} t
 * @returns {Number|Number.s}
 */
function somme(t) {
    var s = 0;
    for (var i = 0; i < t.length; i++) {
        s += t[i];
    }
    return s;
}

/**
 * 
 * @param {type} t
 * @returns {Number}
 */
function moyenne(t) {
    var m = 0;
    m = somme(t) / t.length;
    return m;
}

function min(t) {
    var m = t[0];
    for (var i = 1; i < t.length; i++) {
        if (t[i] < m) {
            m = t[i];
        }
    }
    return m;
}

function max(t) {
    var m = t[0];
    for (var i = 1; i < t.length; i++) {
        if (t[i] > m) {
            m = t[i];
        }
    }
    return m;
}

function rechercher(t, valeurRecherchee) {
    var position = -1;
    var passages = 0;

    for (var i = 0; i < t.length; i++) {
        if (t[i] === valeurRecherchee) {
            position = i;
        }
        passages++;
    }

    console.log("Passages : " + passages);
    return position;
}

function rechercherOptimise(t, valeurRecherchee) {
    var position = -1;
    var passages = 0;
    var nonTrouvee = true;
    var i = 0;
    while (i < t.length && nonTrouvee) {
        if (t[i] === valeurRecherchee) {
            position = i;
            nonTrouvee = false;
            console.log("TROUVE");
        }
        passages++;
        i++;
    }
    console.log("Passages : " + passages);
    console.log(position);
    return position;
}


/*
 * MAIN
 */
// Tableau à valeurs UNIQUES
var t = new Array(3, 5, 1, 9, 7);
/*
 * SOMME
 */
var s = somme(t);
console.log("Somme : " + s);

/*
 * MOYENNE
 */
var moy = moyenne(t);
console.log("Moyenne : " + (moy));

/*
 * MIN
 */
var mini = min(t);
console.log("Mini : " + mini);

/*
 * MAX
 */
var maxi = max(t);
console.log("Maxi : " + maxi);

/*
 Rechercher la position d'une valeur dans un tableau
 */
var valeurRecherchee = 7;
var position = rechercher(t, valeurRecherchee);

if (position === -1) {
    console.log("La valeur " + valeurRecherchee + " recherchée via une fonction est introuvable");
} else {
    console.log("La valeur " + valeurRecherchee + " recherchée via une fonction est à la position " + (position + 1));
}

/*
 * OPTIMISATION
 */
var pos = rechercherOptimise(t, valeurRecherchee);
console.log("Pos : " + pos);
if (pos === -1) {
    console.log("La valeur " + valeurRecherchee + " recherchée via une fonction optimisée est introuvable");
} else {
    console.log("La valeur " + valeurRecherchee + " recherchée via une fonction optimisée est à la position " + (position + 1));
}

