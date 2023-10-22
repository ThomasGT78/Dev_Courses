/* 
 * FonctionAdd.js
 */

/**
 * 
 * @param {type} x
 * @param {type} y
 * @returns {unresolved}
 */
function add(x, y) {
    // 1) Déclaration de la variable résultat
    var r = 0;

    // 3) Ecriture du code ... du calcul, du traitement
    r = x + y;

    // 2) Ecriture du return
    return r;
    //return x + y;
}

//console.log(r);
console.log(x);

/*
 * MAIN
 */
var btValider = document.getElementById("btValider");

btValider.onclick = function () {
    var a = parseFloat(document.getElementById("itA").value);
    var b = parseFloat(document.getElementById("itB").value);
    //var r = a + b;
    r = add(a, b);
    document.getElementById("lblResultat").innerHTML = r;
};
