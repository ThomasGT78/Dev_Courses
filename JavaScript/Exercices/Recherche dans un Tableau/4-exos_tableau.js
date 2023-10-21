var t = new Array(9, 9, 9, 9, 3);

            /************
            *   SOMME   *
            ************/
function somme (tableau) {
    var s = 0;
    for (i=0; i<tableau.length; i++) {
        s += t[i];
    }
    return s;
};

var laSomme = document.getElementById('laSomme');
var s = somme(t);

resultSomme = `la somme des nombres du tableau est : ${s}`;
laSomme.innerHTML = resultSomme;

        /**************
        *   MOYENNE   *
        **************/

function moyenne(tableau) {
    var s = 0;
    for (i = 0; i < tableau.length; i++) {
        s += t[i];
    }
    var m = s / tableau.length;     // var m = somme / tableau.length; (utilise la fonction précédente)
    return m;
}

var laMoyenne = document.getElementById('laMoyenne');
var m = moyenne(t);

var resultMoyenne = `la moyenne des nombre du tableau est : ${Math.round(m*100)/100}`;
laMoyenne.innerHTML = resultMoyenne;

        /**************
        *   MINIMUM   *
        **************/

function minimum(tableau) {
    var tabMin = tableau[0];
    for (i = 1; i < tableau.length; i++) {
        if (tableau[i] < tabMin) {
            tabMin = tableau[i]
        }
    };
    return tabMin;
};

var min = minimum(t);
var docMin = document.getElementById('docMin');

var resultMin = `Le nombre le plus petit du tableau est : ${min}`;
docMin.innerHTML = resultMin;

        /**********************
        *   Position du MIN   *
        **********************/
       
function posMinimum(tableau) {
    var tabMin = tableau[0];
    var posMin = 0;
        for (i = 1; i < tableau.length; i++) {
            if (tableau[i] < tabMin) {
                posMin = i;
            }
    };
    return posMin +1;
};
var pMin = posMinimum(t);

var resultPosMin = `La position du nombre le plus petit du tableau est : ${pMin} ème position`;
document.getElementById('docPosMin').innerHTML = resultPosMin;

        /**************
        *   MAXIMUM   *
        **************/

function maximun (tableau) {
    var tabMax = Math.max(...tableau);
    return tabMax
};

var max = maximun(t);

var resultMax = `Le nombre le plus Grand du tableau est : ${max}`;
document.getElementById('docMax').innerHTML = resultMax;

        /**********************
        *   Position du MAX   *
        **********************/

function posMaximun(tableau) {
    var tabMax = Math.max(...tableau);
    var posMax = tableau.indexOf(tabMax);
    return posMax + 1
};

var pmax = posMaximun(t);
var resultPosMax = `La position du nombre le plus grand du tableau est : ${pmax} ème position`;
document.getElementById('docPosMax').innerHTML = resultPosMax;


        /****************************
        *   FOR: RECHERCHE VALEUR   *
        ****************************/

function recherche (tableau, valeur) {
    var posRech = -1;
    for (var i = 0; i < tableau.length; i++) {
        if (tableau[i] === valeur) {
            posRech = i + 1;
        }
    };
    return posRech;
};
var pRech = recherche(t, 9);

var resultRech = `La position du nombre recherchée est : ${pRech} ème position`;
document.getElementById('docRech').innerHTML = resultRech;
 
//Envoi par Input et Boutton

document.getElementById('btValider').onclick = function() {
    var valeurRech = parseInt(document.getElementById("saisie").value); 
    console.log(valeurRech);
    var pos = recherche(t, valeurRech);
    console.log(pos);
    alert(pos);
};

        /***************************************************
        *   WHILE: RECHERCHE VALEUR  (1ère dans la liste)  *
        ***************************************************/

function rechercheOpt(tableau, valeur) {
    var posRechOpt = -1;
    var i = 0;
    var trouve = false;
    console.log(!trouve);
    while (!trouve && (i < tableau.length)) {
        if (tableau[i] == valeur) {
            posRechOpt = i + 1
            trouve = true;
        }
        i++
    };
    return posRechOpt;
};
var pRechOpt = rechercheOpt(t, 9);

var resultRechOpt = `La position optimale du nombre recherchée est : ${pRechOpt} ème position`;
document.getElementById('docRechOpt').innerHTML = resultRechOpt;

        /*********************************
        *   RECHERCHE VALEURS MULTIPLE   *
        *********************************/
var t = new Array(2, 9, 9, 9, 3);

function rechercheMul(tableau, valeur) {
    var posRechMul = -1;
    var logPosRechMul = `${posRechMul}`
    for (var i = 0; i < tableau.length; i++) {
        if (tableau[i] == valeur) {
            if (posRechMul == -1) {
                posRechMul = i + 1;
                logPosRechMul = `${posRechMul}`;
            } else {
                posRechMul = i + 1;
                logPosRechMul += ` et ${posRechMul}`;
            }
        }
    }
    return logPosRechMul;
};

var valeur = 9;
var pRechMul = rechercheMul(t, valeur);

var resultRechMul = `${valeur} se trouve en position : ${pRechMul} `;
document.getElementById('docRechMul').innerHTML = resultRechMul;
