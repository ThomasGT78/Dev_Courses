/* 
 * puissance.js
 * 2^3 = 2 * 2 * 2
 * a^p = a * a  * a
 * a^0 = 1
 * a^1 = a
 * https://fr.wikipedia.org/wiki/Puissance_d%27un_nombre
 */

var a = 2;
var p = 1;
var r = 1;
var i = 1;
if (p === 0) {
    r = 1;
} else {
    while (i <= p) {
        r *= a;
        i++;
    }
}

console.log(r);
