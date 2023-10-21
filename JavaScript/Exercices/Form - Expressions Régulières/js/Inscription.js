function init () {
    loadCities();
    loadHobbies();
    $("#btValider").on("click", valider)
}; //init

                /************
                *   CHAMPS  *
                ************/

function checkForm() {

/***********        REGEXP      *************/

    var erName = new RegExp("^[A-Z][A-Za-z '-]{1,75}$");
    var testLastName = erName.test($("#nom").val());
    var testFirstName = erName.test($("#prenom").val());

    var erBirthDay = new RegExp("^((((0{1}[1-9]{1})|([1-2]{1}[0-9]{1}){1})[/-]{1}([0]{1}[2]{1}))|(((0{1}[1-9]{1})|([1-2]{1}[0-9]{1})|(3{1}[0-1]{1})){1}[/-]{1}((0{1}[1|3|5|7|8]{1})|(1{1}[0|2]{1})){1}){1}|(((0{1}[1-9]{1})|([1-2]{1}[0-9]{1})|([3]{1}[0]{1})){1}[/-]{1}((0{1}[4|6|9]{1})|([1]{2})){1}){1}){1}[/-]{1}(([1]{1}[9]{1}[0-9]{2})|([2]{1}[0]{1}(([0-1]{1}[0-9]{1})|([2]{1}[0]{1}){1}){1})){1}$");
    var testBirthDate = erBirthDay.test($("#dateNaissance").val());

    var erEmail = new RegExp("^[a-z.-_]{1,50}[@][a-z]{1,50}[.][a-z]{2,3}$");
    var testEmail = erEmail.test($("#email").val());

    var erPseudo = new RegExp("^[A-Za-z0-9 '-_.]{6,16}$");
    var testPseudo = erPseudo.test($("#pseudo").val());

    var erMdp = new RegExp("^.{6,25}$");	// entre 6 et 25 de n'importe quel caractère
    var testMdp = erMdp.test($("#mdp").val());

    var erCv = new RegExp("^.{400,1500}$");
    var testCv = erCv.test($("#cv").val());
    
    var erAdresse = new RegExp("^[A-Za-z0-9 ',-.]{3,100}$");
    var testAdresse = erAdresse.test($("#adresse").val());
    
/***********    FONCTIONS DE VÉRIFICATION  *************/

    // Fonction de vérfication des champs de validation (email et mdp)
    function verifChampsValid(idChamps, idChamps2, idLabel, nom) {
        if (idChamps.val() == "") {             // Test si le champs est vide
            idLabel.html(`${nom} manquante`).css("color", "red");    // insert message d'erreur rouge
            return false;                   // dit que le champs est vide
        } else if (idChamps.val() != idChamps2.val()) { // test si la validation correspond au 1er champs, sinon...
            idLabel.html(`${nom} incorrecte`).css("color", "red");    // insert message d'erreur rouge
            return true;                     // dit que le champs n'est pas vide
        } else {
            idLabel.html("");   // efface le html pour ne pas montrer de message d'erreur
            return true;                     // dit que le champs n'est pas vide
        }
    }; // verifChamps de validation


    // Fonction de vérfication des champs 
    function verifChamps(idChamps, idLabel, test) {
        if (idChamps.val() == "") {     // Test si le champs est vide
            idLabel.html(`Champs manquant`).css("color", "red");  // insert message d'erreur rouge
            return false;              // dit que le champs est vide
        } else if (!test) {             // test si l'expression est respectée, sinon...
            idLabel.html(`Champs incorrect`).css("color", "red");  // insert message d'erreur rouge
            return true;                // dit que le champs n'est pas vide
        } else {                        // si l'expression est respectées...
            idLabel.html("");   // efface le html pour ne pas montrer de message d'erreur
            return true;                // dit que le champs n'est pas vide
        }
    }; // verifChamps 


/***********    APPEL DES FONCTIONS  *************/

    // appel des fonctions sur chaque champs obligatoire
    var lastNameOK = verifChamps($("#nom"), $("#lblMessageNom"), testLastName);
    var firstNameOK = verifChamps($("#prenom"), $("#lblMessagePrenom"), testFirstName);
    birthDateOK = verifChamps($("#dateNaissance"), $("#lblMessageDateNaissance"), testBirthDate);
    var emailOK = verifChamps($("#email"), $("#lblMessageEmail"), testEmail);
    var email2OK = verifChampsValid($("#email2"), $("#email"), $("#lblMessageEmail2"), "Validation de l'email");
    var pseudoOK = verifChamps($("#pseudo"), $("#lblMessagePseudo"), testPseudo);
    var mdpOK = verifChamps($("#mdp"), $("#lblMessageMDP"), testMdp, "Mot de passe");
    var mdp2OK = verifChampsValid($("#mdp2"), $("#mdp"), $("#lblMessageMDP2"), "Validation du mot de passe");
    var cvOK = verifChamps($("#cv"), $("#lblMessageCV"), testCv);
    var adresseOK = verifChamps($("#adresse"), $("#lblAdresse"), testAdresse);


/***********    MESSAGE DE FIN  *************/
   

    if (!lastNameOK || !firstNameOK || !birthDateOK || !emailOK || !email2OK || !pseudoOK || !mdpOK || !mdp2OK || !cvOK || !adresseOK) {
        $("#lblMessage").html("Vous n'avez pas saisi tous les champs");
    } else {
        $("#lblMessage").html("Tout les champs sont saisis");
    }
  
}; // checkForm


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

        
                /*************
                *   VALIDER  *
                *************/

function valider() {
    checkForm();
}; // valider

$(document).ready(init);