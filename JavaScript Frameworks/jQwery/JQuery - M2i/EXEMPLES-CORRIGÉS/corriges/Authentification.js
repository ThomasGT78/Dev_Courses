/* 
 * Authentification.js
 * Du jQuery sauf pour les cookies
 * Authentification en "local" dans des variables locales
 * Mot de passe visible : text <--> password
 * Mot de passe oublié : envoi d'un mail avec PHP : KO
 * Se souvenir de moi : cookie
 */

/**
 * 
 * @returns {undefined}
 */
function init() {
    $("#header_title").html("TP jQuery - Authentification");

    $("#btValider").on("click", valider);
    $("#chkMdpVisible").on("click", mdpVisible);
    $("#motDePasseOublie").on("click", mdpOublie);

    $("#chkMdpVisible").prop("checked", false);
    $("#lblMessage").html("");

    console.clear();

    lireCookiesPseudoEtMDP();

    // En periode de test épisode 1
//    $("#pseudo").val("p");
//    $("#mdp").val("b");
} /// init

/**
 * 
 * @return {undefined}
 */
function valider() {
    // Récupération des valeurs saisies
    var pseudo = $("#pseudo").val().trim();
    var mdp = $("#mdp").val().trim();
    // Nettoyage
    $("#lblMessage").html("");

    var pseudoOK = "p";
    var mdpOK = "b";

    var message = controler(pseudo, mdp, pseudoOK, mdpOK);

    if (message === "") {
        console.log("Authentification ok");
        message = seSouvenir(pseudo, mdp);
    }
    $("#lblMessage").html(message);
} /// valider

/*
 * 
 * @param {type} pseudo
 * @param {type} mdp
 * @param {type} pseudoOK
 * @param {type} mdpOK
 * @returns {String}
 */
function controler(pseudo, mdp, pseudoOK, mdpOK) {
    var message = "";

    // Tests sur les valeurs
    if (pseudo === "" || mdp === "") {
        message = "Tout doit être saisi !!!";
    } else {
        if (pseudo !== pseudoOK || mdp !== mdpOK) {
            message = "Authentification ratée";
        }
    }

    return message;
} /// controler

/**
 * 
 * @param {type} pseudo
 * @param {type} mdp
 * @returns {String}
 */
function seSouvenir(pseudo, mdp) {
    /*
     * Création cookie avec pseudo et mdp (se souvenir)
     */
    var message = "";
    if (navigator.cookieEnabled) {
        // Si la case à cocher est cochée
        if ($("#chkSeSouvenir").prop("checked")) {
            creerCookie("pseudo", pseudo);
            creerCookie("mdp", mdp);
            message = "Authentification réussie et cookies créés !!!";
        } else {
            // Si la case à cocher n'est pas cochée on supprime les cookies
            message = "Authentification réussie et pas de cookie créé !!!";
            supprimerCookie("pseudo");
            supprimerCookie("mdp");
        }
    } else {
        message = "Vous avez désactivé les cookies, impossible de me souvenir de vous !!!";
    }
    return message;
} /// seSouvenir

/**
 * 
 * @param {type} nomCookie
 * @param {type} valeur
 * @returns {undefined}
 */
function creerCookie(nomCookie, valeur) {
    var dExpires = new Date();
    dExpires.setMonth(dExpires.getMonth() + 1);
    document.cookie = nomCookie + "=" + valeur + "; expires=" + dExpires.toGMTString();
} /// creerCookie

/**
 * 
 * @param {type} asNomCookie
 * @returns {undefined}
 */
function supprimerCookie(asNomCookie) {
    var dExpires = new Date();
    document.cookie = asNomCookie + "=; expires=" + dExpires.toGMTString();
} /// supprimerCookie

/**
 * 
 * @return {undefined}
 */
function lireCookiesPseudoEtMDP() {
    // Renvoie une chaîne de caractères
    var cookies = document.cookie;
    console.log(cookies);
    // "pseudo=p; mdp=b"

    /*
     * pseudo=p
     * mdp=b
     */

    // Chaque cookie est séparé par "; "
    var tCookies = cookies.split("; ");
    // Boucle sur les cookies
    for (var i = 0; i < tCookies.length; i++) {
        // Le nom du cookie et sa valeur sont séparés par =
        var tNomValeurCookie = tCookies[i].split("=");
        console.log("Nom du cookie : " + tNomValeurCookie[0]);
        console.log("Valeur du cookie : " + tNomValeurCookie[1]);
        if (tNomValeurCookie[0] === "pseudo") {
            $("#pseudo").val(tNomValeurCookie[1]);
        }
        if (tNomValeurCookie[0] === "mdp") {
            $("#mdp").val(tNomValeurCookie[1]);
        }
    }
} /// lireCookiesPseudoEtMDP

/**
 * 
 * @return {undefined}
 */
function mdpVisible() {
    //console.log("checked attr " + $("#chkMdpVisible").attr("checked"));
    if ($("#chkMdpVisible").prop("checked")) {
        $("#mdp").attr("type", "text");
    } else {
        $("#mdp").attr("type", "password");
    }
} /// mdpVisible

/**
 * 
 * @return {undefined}
 */
function mdpOublie() {
    console.clear();
    /*
     * TODO ...
     */
} /// mdpOublie


/*
 * MAIN
 */
$(document).ready(init);
