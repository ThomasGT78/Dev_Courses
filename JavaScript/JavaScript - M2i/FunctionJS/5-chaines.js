        /*********************************************
        *   1ÈRE LETTRE EN MAJ ET LES AUTRES EN MIN  *
        *********************************************/
function majPremier (string) {
    var out = "";
    out = string[0].toUpperCase();
    for (var i = 1; i < string.length; i++) {
        out += string[i].toLowerCase();
    }
    return out;
}

var chaine = "azERty";
var chaineFirstCapital = majPremier(chaine);
document.getElementById('docPremMaj').innerHTML = chaineFirstCapital;

        /*****************************************
        *   REMPLACER UN CARACTÈRE PAR UN AUTRE  *
        *****************************************/

function replace(chaine, carAModifier, carRempl) {
        var out = "";
    for ( var i = 0 ; i < chaine.length ; i++){
        var carCourant = chaine[i];
        if (carCourant == carAModifier) {
            out += carRempl;
        } else {
            out += carCourant;
        }
    }
    return out;
}
var chaine = `Il fait beau aujourd'hui`
var remplacement = replace(chaine, "a", 'T')
document.getElementById('docReplace').innerHTML = remplacement;

        /*******************************************
        *   FOR: RECHERCHER UN CARACTÈRE (le 1er)  *
        *******************************************/

function rechPremCaractere(chaine, carATrouver) { 
    var posCar = -1;
    for (var i = chaine.length; i >= 0; i--) {
        if (chaine[i] == carATrouver) {
            posCar = i + 1;
        } 
    }
    return posCar;
}

var chaine = "Je fais des bon gâteau au chocolat";
var rechCar = rechPremCaractere(chaine, "a")
document.getElementById('docRecherche').innerHTML = rechCar;

        /***********************************************
        *   FOR: RECHERCHER UN CARACTÈRE (le Dernier)  *
        ***********************************************/

function rechLastCaractere(chaine, carATrouver) {
    var posCar = -1;
    for (var i = 0; i < chaine.length; i++) {
        if (chaine[i] == carATrouver) {
            posCar = i + 1;
        }
    }
    return posCar;
}

var chaine = "Je fais des bon gâteau au chocolat";
var rechLastCar = rechLastCaractere(chaine, "a")
document.getElementById('docRechelast1').innerHTML = rechLastCar;

        /*********************************************
        *   WHILE: RECHERCHER UN CARACTÈRE (le 1er)  *
        *********************************************/

function rechLastCaractereBis(chaine, carATrouver) {
    posCar = -1;
    var i = 0;
    var find = false
    while (i < chaine.length) {
        if (chaine[i] == carATrouver && !find) {
            posCar = i + 1;
            find = true;
        }
        i++
    }

    return posCar
}

var chaine = "Je fais des bon gâteau au chocolat";
var rechLastCarBis = rechLastCaractereBis(chaine, "a")
document.getElementById('docRechelast2').innerHTML = rechLastCarBis;