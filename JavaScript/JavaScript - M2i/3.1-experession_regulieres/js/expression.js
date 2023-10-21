var prenom = document.getElementById("prenom");
var nom = document.getElementById("nom");
var birthDate = document.getElementById("birthDate");
var tel = document.getElementById("tel");
var msg = document.getElementById("msg");
var btValider = document.getElementById("valider");

var prenomOK;

function init (){
    btValider.onclick = function valider() {
        message = "";

        // Check Prenom
        var erPrenom = new RegExp("^[A-Z][A-Za-z '-]{1,100}$");
        var testPrenom = erPrenom.test(prenom.value);
        
        // Check Nom
        var erNom = new RegExp("^[A-Z][A-Za-z '-]{1,100}$");
        var testNom = erNom.test(nom.value);

        // Check Date de Naissance
        var erBirthD = new RegExp("^((((0{1}[1-9]{1})|([1-2]{1}[0-9]{1}){1})[/-]{1}([0]{1}[2]{1}))|(((0{1}[1-9]{1})|([1-2]{1}[0-9]{1})|(3{1}[0-1]{1})){1}[/-]{1}((0{1}[1|3|5|7|8]{1})|(1{1}[0|2]{1})){1}){1}|(((0{1}[1-9]{1})|([1-2]{1}[0-9]{1})|([3]{1}[0]{1})){1}[/-]{1}((0{1}[4|6|9]{1})|([1]{2})){1}){1}){1}[/-]{1}(([1]{1}[9]{1}[0-9]{2})|([2]{1}[0]{1}(([0-1]{1}[0-9]{1})|([2]{1}[0]{1}){1}){1})){1}$");
        
        var testBirthDate = erBirthD.test(birthDate.value);

        // Check Tel
        var erTel = new RegExp("^0[1-9]([ /-]?[0-9]{2}){4}$");
        var testTel = erTel.test(tel.value);
        
        /****************
        *   AFFICHAGE   *
        ****************/

        // Affichage Prénom
        if (testPrenom == false) {
            message += `<p>Le Prénom est incorrect</p>`;
        }
        console.log(testPrenom)

        // Affichage Nom
        if (testNom == false) {
            message += `<p>Le Nom est incorrect</p>`;
        }
        console.log(testNom)

        // Affichage Date de Naissance
        if (testBirthDate == false) {
            message += `<p>La date de naissance est incorrect</p>`;
        }
        console.log(testBirthDate)

        // Affichage Tel
        if (testTel == false) {
            message += `<p>Le Tel est incorrect</p>`;
        }
        console.log(testTel)

        if (testPrenom && testNom && testBirthDate && testTel) {
            message = ""
            message += `<p>Jusque là tout va bien !</p>`;
        }
        msg.innerHTML = message;
    };
}
        /**************************
        *  EXPRESSION RÉGULIÈRE   *
        **************************/
/*
function isPrenom (prenom) {
    var expReg = new RegExp("^[A-Z][A-Za-z '-]{1,100}$");
    return expReg.test(prenom.value);
}

function isNom(nom) {
    var expReg = new RegExp("^[A-Z -']{1,100}$");
    return expReg.test(nom);
}
function isBirthDate(birthDate) {
    var expReg = new RegExp("^[0-9]/{3}$");
    return expReg.test(birthDate);
}
function isTel(tel) {
    var expReg = new RegExp("^0[1-9](-[0-9]){4}$");
    return expReg.test(tel);
}
*/


window.onload = init();