/*
 * FonctionAddition.js
 */

var itX;
var itY;
var lblResultat;
var btAddition;

// ------------
function init() {
    itX = document.getElementById("itX");
    itY = document.getElementById("itY");
    lblResultat = document.getElementById("lblResultat");
    btAddition = document.getElementById("btAddition");

    btAddition.onclick = function() {
        lblResultat.innerHTML = additionner(parseInt(itX.value), Number(itY.value));
    };
} /// init

window.onload = init;

// -----------------
function additionner(x, y) {
//                var r;
//                r = x + y;
//                return r;
    return x + y;
} /// additionner


window.onload = init;
