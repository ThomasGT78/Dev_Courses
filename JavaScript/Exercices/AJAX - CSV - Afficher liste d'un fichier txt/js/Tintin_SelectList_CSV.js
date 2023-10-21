			/// Fonction pour afficher les données du fichier txt
function afficherCSV() {
    $.get(                              // récupère les données du fichier .txt
        "../ressources/csv/tintin.txt",     // chemin du fichier contenant les données à récupérer
        function (data) {
            console.log(data);                      // visualise les données format texte
            let tRecords = data.split("\n");        // sépare chaque ligne du texte et les met dans un tableau
            for (let i = 0; i < tRecords.length; i++) { // boucle sur les lignes du tableau pour récup les valeurs 
                console.log(tRecords[i]);           // montre chaque valeur ligne par ligne
                if (tRecords[i].trim().length > 0) {    // vérifie si le nombre de caractère est sup à 0 (non vide)
                    let tFields = tRecords[i].split(";");   // on récupère dans un tableau le code client et le nom séparé par un ;
                    let opt = $("<option>");        // on crée une balise option
                    opt.val(tFields[0]);            // on affecte le code client à la valeur de la balise otion
                    opt.html(tFields[1]);           // on ajoute le nom client dans le texte de la balise otion
                    $("#liste").append(opt);        // ajout d'un noeud "" au select du doc html
                } /// if
            } /// for
        } /// function
    ); /// $.get
} /// afficherCSV

/**
*
*/

function getHeure() {           /// Fonction pour récupérer l'heure actuelle
    let maintenant = new Date();                // récupère l'heure du système
    return maintenant.getHours() + ":" + maintenant.getMinutes() + ":" + maintenant.getSeconds();
    // renvoi un string contenant:    heures : minutes : secondes
} /// getHeure

// -------------------------

$(document).ready(function () {                     // Au chargement de la page...
    $("#pHeure").html("Il est " + getHeure());      // on écrit l'heure dans la page
    $("#btGo").on("click", afficherCSV);            // on active l'évènement "click" pour déclancher la function
});