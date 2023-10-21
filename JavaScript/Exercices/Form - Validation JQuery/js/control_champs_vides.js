

function init() {
    $("#btValider").on("click", valider);	// active la fonction Valider avec le clic du boutton
} /// init


function valider() {
    var tObligatoire = $(".obligatoire");	// création Array des éléments avec la classe "obligatoire"
    var ok = true;                      	// les champs sont remplis ou non
    var msg = "";                           // renvoi la valeur du champs manquant


    for (var i=0 ; i<tObligatoire.length; i++){	// boucle à travers les champs obligatoire
        var obli = tObligatoire[i];            	// champs obligatoire en position
        if ($(obli).val() == "") {              // check si le champs est vide ou pas
            ok = false                          // applique la valeur false si un des champs est vide
            var name = $(obli).attr("name");    // récupère le nom de l'élément qui est faut
            msg += `${name}, `                  // on le met dans un mini message qu'on va insérer dans le grand
        } /// if
    } /// for
    if (ok) {
        $("#message").html("Jusque là tout va bien")	// message si tout va bien
    } else {
        $("#message").html(`Les ${msg}sont obligatoires`)	// message qui montre quel champs n'est pas correct
    }
} /// valider

$(document).ready(init);