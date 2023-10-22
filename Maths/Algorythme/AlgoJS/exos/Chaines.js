/* 
 * Chaines.js
 */

/*
 * IN : String -> OUT -> String
 * 
 * IN -> TRT -> OUT
 */
/*
 * LISTE DES FONCTIONS
 */

/**
 * 
 * @param {type} string
 * @returns {String}
 */
function majPremier(string) {
    var out = "";
    out = string[0].toUpperCase();
    for (var i = 1; i < string.length; i++) {
//                    var caractereCourant = string[i];
//                    var caractereCourantEnMinuscule = caractereCourant.toLowerCase();
//                    out += caractereCourantEnMinuscule;
        out += string[i].toLowerCase();
    }
    return out;
} /// majPremier

/**
 * 
 * @param {type} chaineIN
 * @param {type} caractereRecherche
 * @returns {Number}
 */
function rechercherPremierCaractere(chaineIN, caractereRecherche) {
    var position = -1;
    var trouve = false;
    var i = 0;

    while (i < chaineIN.length && !trouve) {
        if (chaineIN[i] == caractereRecherche) {
            position = i;
            trouve = true;
        }
        i++;
    }
    return position;
} /// rechercherPremierCaractere

/**
 * 
 * @param {type} chaineIN
 * @param {type} caractereRecherche
 * @returns {Number}
 */
function rechercherDernierCaractere(chaineIN, caractereRecherche) {
    var position = -1;
    var i = 0;

    while (i < chaineIN.length) {
        if (chaineIN[i] == caractereRecherche) {
            position = i;
        }
        i++;
    }
    return position;
} /// rechercherDernierCaractere




/*
 * La BN : IN -> BN -> OUT
 * IN : chaîne, caractereARemplacer, caractereDeRemplacement
 * OUT : String
 */
/**
 * 
 * @param {type} chaine
 * @param {type} caractereARemplacer
 * @param {type} caractereDeRemplacement
 * @returns {String}
 */
function remplacerCaractere(chaine, caractereARemplacer, caractereDeRemplacement) {
    var out = "";
    for (var i = 0; i < chaine.length; i++) {
        var caractereCourant = chaine[i];
        if (caractereCourant == caractereARemplacer) {
            out += caractereDeRemplacement;
        } else {
            out += caractereCourant;
        }
    }
    return out;
} /// remplacerCaractere


/*
 "  pascal  buguet    " "pascal buguet" "pascal  buguet   "
 
 IN -> BN -> OUT
 string -> BN -> string
 
 */

/**
 * 
 * @param {type} chaineIN
 * @returns {String}
 */
function ltrim(chaineIN) {
    var chaineOUT = "";
    var i = 0;
    // quand j'ai un espace au début je ne cumule pas
    "    pascal    "
    while (chaineIN[i] == " ") {
        i++;
    }
    // ensuite je cumule tout
    while(i < chaineIN.length){
        chaineOUT += chaineIN[i];
        i++;
    }

    return chaineOUT;
} /// ltrim


/*
 * MAIN
 */
var chaine = "il fait très beau aujourd'hui";
document.getElementById("chaine").innerHTML = chaine;

var chaineEnUCFirst = majPremier(chaine);
document.getElementById("pResultats").innerHTML = chaineEnUCFirst;

var position = rechercherPremierCaractere(chaine, "a");
document.getElementById("pResultats").innerHTML = position;


var position = rechercherDernierCaractere(chaine, "a");
document.getElementById("pResultats").innerHTML = position;


var chaineUnPeuNettoyee = "*" + ltrim("   pascal    buguet    ") + "*";
document.getElementById("pResultats").innerHTML = chaineUnPeuNettoyee;
//var remplacement = remplacerCaractere(chaine, "a", "W");
//document.getElementById("pResultats").innerHTML = remplacement;




