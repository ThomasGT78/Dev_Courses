				/************************************************
				*  CONDITIONNER LA SOUMISSION D'UN FORMULAIRE   *
				************************************************/
				
function init() {                            // Inhibe la réaction événementielle standard 
    $("#btSubmit").on("click", function (event) {   // au click du boutton Submit
        event.preventDefault();                     // on désactive la fonction par défaut de ce boutton
        valider();                                  // et on lance la fonction Valider
    });
} /// init 


function valider() {
    var lsMessage = "";
    if ($("#id").val() === "") {                    // si le champs ID est vide
        lsMessage += "L'ID doit être saisi<br>"     // alors on affiche l'erreur
        $("#id").addClass("rouge");					// on color le champs en rouge
    } else {
        $("#id").removeClass("rouge");				// on décolor le champs rouge en blanc
    }
    if ($("#nom").val() === "") {                   // si le champs NOM est vide
        lsMessage += "Le nom doit être saisi<br>"   // alors on affiche l'erreur
        $("#nom").addClass("rouge");				// on color le champs en rouge
    } else {
        $("#nom").removeClass("rouge");				// on décolor le champs rouge en blanc
    }
    if ($("#id").val() !== "" && $("#nom").val() !== "") {      // si les champs ne sont pas vide
        $("#formSaisie").submit();                              // alors on soumet le formulaire
    }

    $("#spMessage").html(lsMessage);            // insert le message adequat pour l'afficher sur la page
} /// valider 

$(document).ready(init);