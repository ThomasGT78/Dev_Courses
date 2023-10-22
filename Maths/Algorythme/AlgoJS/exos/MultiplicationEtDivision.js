/* 
 * MultiplicationEtDivision.js
 */

/*
 * Multiplication
 */

var valeur = 3;
var multiplicateur = 5;
var r = 0;

var i = 1;
while (i <= multiplicateur) {
    r += 3;
    i++;
}

console.log("R&sultat de la multiplication de " + valeur + " par " + multiplicateur + " est de : " + r);


/*
 * Division
 */

var valeur = 15;
var diviseur = 3;
var quotient = 0;
var i = 1;

while(diviseur * i <= valeur) {
    i++;
}



console.log("R&sultat de la division de " + valeur + " par " + diviseur + " est de : " + (i-1));

