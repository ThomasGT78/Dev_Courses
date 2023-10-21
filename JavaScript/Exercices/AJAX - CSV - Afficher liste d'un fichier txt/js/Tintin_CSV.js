
function afficherCSV() {
    $.get(                              // récupère les données du fichier .txt
        "../ressources/csv/tintin.txt",
        function (data) {
            console.log(data);                      // visualise les données format texte
            // Pour transformer les RC en <br>
            let regex = /\n/g;                      // récupère le retour à la ligne
            data = data.replace(regex, "<br>");     // remplace le retour à la ligne texte par <br> (version html)
            console.log(data);                      // visualise les données avec des <br>
            $("#pMessage").html(data);              // On écrit les données du .txt dans le html
        } /// function
    ); /// $.get
} /// afficherCSV

/**
*
*/

function getHeure() {
    let maintenant = new Date();
    return maintenant.getHours() + ":" + maintenant.getMinutes() + ":" +
        maintenant.getSeconds();
} /// getHeure
// -------------------------
$(document).ready(function () {
    $("#pHeure").html("Il est " + getHeure());
    $("#btGo").on("click", afficherCSV);
});