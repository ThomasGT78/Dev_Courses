/* 
 * TableauStat.js
 * somme, moyenne, min, max, 
 * recherche (position) , recherche optimisée (position),
 * etc ..;
 */
var t = new Array(3, 5, 1, 9, 7);

/*
 * SOMME
 */
var somme = 0;
for (var i = 0; i < t.length; i++) {
    somme += t[i];
}
console.log("Somme : " + somme);

/*
 * MOYENNE
 */
console.log("Moyenne : " + (somme / t.length));

/*
 * MIN
 */
var min = t[0];
for (var i = 1; i < t.length; i++) {
    if (t[i] < min) {
        min = t[i];
    }
}
console.log("Min : " + min);

/*
 * MAX
 */
var max = t[0];
for (var i = 1; i < t.length; i++) {
    if (t[i] > max) {
        max = t[i];
    }
}
console.log("Max : " + max);

/*
 Rechercher la position d'une valeur dans un tableau
 */
var valeurRecherchee = 1;
var position = -1;
for (var i = 0; i < t.length; i++) {
    if (t[i] === valeurRecherchee) {
        position = i;
    }
}

if (position === -1) {
    console.log("La valeur " + valeurRecherchee + " est introuvable");
} else {
    console.log("La valeur " + valeurRecherchee + " est à la position " + (position + 1));
}

