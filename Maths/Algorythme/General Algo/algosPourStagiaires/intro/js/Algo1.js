/*
 * Algo1.js
 */

// ----------
function init()
{
    // Association de la fonction afficher() au clic sur le bouton btOK
    document.getElementById("btOK").onclick = afficher;
}

// --------------
function afficher()
{
    // Remplissage de l'etiquette avec un texte
    document.getElementById("lblMessage").innerHTML = "Hello JS";
}

// On execute le contenu de la fonction init()
window.onload = init;
