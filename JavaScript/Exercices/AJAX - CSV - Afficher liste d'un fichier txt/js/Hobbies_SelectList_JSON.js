function init () {
    loadHobbies();
}; //init


                /*************
                *   HOBBIES  *
                *************/

function loadHobbies() {
    $("#lblMessage").html("");
    var getJson = $.get(
        "../ressources/json/hobbies.json", "json"       // requête vers la ressource .json
    ); //get
    
    getJson.done(
        function (data) {
            var option = $("<option>");     // Création de l'élément Option
            option.val("0");                // assignation de la valeur 0 au 1er élément option
            option.html("-Sélectionner un ou plusieurs hobbies-");    // assignation du hobbie dans le html du 1er élément option
            $("#hobbies").append(option);       // ajout de l'élément Option dans le select

            for (i = 0; i < data.length; i++) {     // boucle sur le tableau d'objets json
                var option = $("<option>");     // Création de l'élément Option de chaque hobbie
                option.val(data[i].code);      // assignation de la valeur à l'élément option
                option.html(data[i].hobbie);    // assignation du hobbie dans le html de l'élément option
                $("#hobbies").append(option);   // ajout de l'élément Option dans le select
            } // for
        } // function data
    ); // getJson.done

    getJson.fail(
        function (){
            $("#lblMessage").html("Erreur de chargement du fichier des Hobbies")
        }
    )    
} // loadHobbies



$(document).ready(init);