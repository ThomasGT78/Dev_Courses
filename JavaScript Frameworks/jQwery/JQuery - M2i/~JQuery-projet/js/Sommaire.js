/* 
 * Sommaire.js
 */

/*
 * Affichage du Sommaire
 */
var sommaire = "";
sommaire += "<ul>";
sommaire += "<li><a href='../html/Accueil.html'>Accueil</a>&nbsp;|&nbsp;</li>";
sommaire += "<li><a href='../html/Inscription.html'>Inscription</a>&nbsp;|&nbsp;</li>";
sommaire += "<li><a href='../html/Authentification.html'>Authentification</a>&nbsp;|&nbsp;</li>";
sommaire += "<li><a href='../html/Panier.html'>Panier</a>&nbsp;|&nbsp;</li>";
sommaire += "<li><a href='../html/Selections.html'>S&eacute;lections</a>&nbsp;|&nbsp;</li>";
sommaire += "</ul>";

$("#sommaire").html(sommaire);
