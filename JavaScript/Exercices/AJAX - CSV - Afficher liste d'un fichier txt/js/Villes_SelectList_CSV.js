function init () {
    loadCities();
}; //init


                /************
                *   VILLES  *
                ************/

function loadCities() {
    $("#lblMessage").html("");
    var getTxt = $.get(
        "../ressources/csv/villes.txt"
    ); //get

    getTxt.done(
        function (data) {
            var option = $("<option>");
            option.val("0");
            option.html("-Choissisez une ville -");
            $("#cp").append(option);
            var tabData = data.split("\n");     // sépare
            for (i=1 ; i < tabData.length ; i++) {      // boucle dans le tableau 
                if (tabData[i].trim().length > 0) {
                    var tabVilles = tabData[i].split(";");
                    var option = $("<option>");     // Création de l'élément Option
                    option.val(tabVilles[0]);       // on assigne le Code Postal à la valeur
                    option.html(tabVilles[1]);      // on assigne la Ville au texte visible
                    $("#cp").append(option);        // ajout de l'élément Option dans le select
                } // if
            } // for
        } // function data
    ); // .done

    getTxt.fail(
        function () {
            $("#lblMessage").html("Erreur de chargement du fichier des Villes")
        }
    )  // .fail
} // loadCities



$(document).ready(init);