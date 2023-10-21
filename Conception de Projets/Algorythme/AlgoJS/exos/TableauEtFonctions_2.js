/* 
 * TableauEtFonctions.js
 */

/**
 * 
 * @param {type} tableau
 * @returns {type.s|Number|Number.s}
 */
function somme(tableau) {
    var s = 0;
    for (var i = 0; i < tableau.length; i++) {
        s += tableau[i];
    }
    return s;
} /// somme


/*
 * MAIN
 */
var t = new Array(1, 3, 5, 7, 9, 11);
var s = somme(t);
console.log(s);
document.getElementById("laSomme").innerHTML = "La somme des éléments est : " + s;

document.getElementById("laMoyenne").innerHTML = "La moyenne des éléments est : ";



