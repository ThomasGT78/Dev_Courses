// Fonction de vérfication des champs de validation (email et mdp)
    function verifChampsV(idChamps, idChamps2, idLabel, champsOK, nom) {
        if (idChamps.val() == "") {             // Test si le champs est vide
            champsOK = false;                   // dit que le champs est vide
            idLabel.html(`${nom} manquant`).css("color", "red");    // insert message d'erreur rouge
        } else if (idChamps.val() != idChamps2.val()) { // test si la validation correspond au 1er champs, sinon...
            idLabel.html(`${nom} ne correspond pas au 1er`).css("color", "red");    // insert message d'erreur rouge
            champsOK = true;                    // dit que le champs n'est pas vide
        } else {
            idLabel.html("ok").css("color", "black");   // efface le html pour ne pas montrer de message d'erreur
            champsOK = true;                    // dit que le champs n'est pas vide
        }
    }; // verifChamps de validation


    // Fonction de vérfication des champs Masculin
    function verifChampsM (idChamps, idLabel, champsOK, test, nom) {
        if (idChamps.val() == "") {     // Test si le champs est vide
            //champsOK = false;           // dit que le champs est vide
            idLabel.html(`${nom} manquant`).css("color", "red");  // insert message d'erreur rouge
			return false
        } else if (!test) {             // test si l'expression est respectée, sinon...
            idLabel.html(`${nom}  incorrect`).css("color", "red");  // insert message d'erreur rouge
            champsOK = true;            // dit que le champs n'est pas vide
        } else {                        // si l'expression est respectées...
            idLabel.html("ok").css("color", "black");   // efface le html pour ne pas montrer de message d'erreur
            champsOK = true;            // dit que le champs n'est pas vide
        }
    }; // verifChamps Masculin

    // Fonction de vérfication des champs Féminin
    function verifChampsF (idChamps, idLabel, champsK, test, nom) {
        if (idChamps.val() == "") {
            champsK = false;
            idLabel.html(`${nom} manquante`).css("color", "red");
        } else if (!test) {
            idLabel.html(`${nom}  incorrecte`).css("color", "red");
            champsK = true;
        } else {
            idLabel.html("ok").css("color", "black");
            champsK = true;
        }
    }; // verifChamps Féminin

                /***********    Verif des champs  *************/

    // variables renvoyant un booleen pour savoir si le champs est vide ou non
    var lastNameOK, firstNameOK, birthDateOk, emailOK, email2OK, pseudoOK, mdpOK, mdp2OK, cvOK; 
    var adresseOk;
    
    
    // appel des fonctions sur chaque champs obligatoire
    lastNameOk = verifChampsM ($("#nom"), $("#lblMessageNom"), testLastName, "Nom");
    verifChampsM ($("#prenom"), $("#lblMessagePrenom"), firstNameOK, testFirstName, "Prénom");
    verifChampsF ($("#dateNaissance"), $("#lblMessageDateNaissance"), birthDateOk, testBirthDate, "Date de naissance");
    verifChampsM ($("#email"), $("#lblMessageEmail"), emailOK, testEmail, "Email");
    verifChampsV ($("#email2"), $("#email"), $("#lblMessageEmail2"), email2OK, "La validation de l'email");
    verifChampsM ($("#pseudo"), $("#lblMessagePseudo"), pseudoOK, testPseudo, "Pseudo");
    verifChampsM ($("#mdp"), $("#lblMessageMDP"), mdpOK, testMdp, "Mot de passe");
    verifChampsV ($("#mdp2"), $("#mdp"), $("#lblMessageMDP2"), mdp2OK, "La validation du mot de passe");
    verifChampsM ($("#cv"), $("#lblMessageCV"), cvOK, testCv, "CV");
    verifChampsF ($("#adresse"), $("#lblAdresse"), adresseOk, testAdresse, "Adresse");


            /***********    Message Fin  *************/
    console.log(lastNameOK)
    console.log(firstNameOK)
    console.log(birthDateOk)
    console.log(emailOK)
    console.log(email2OK)
    console.log(adresseOk)

    if (!lastNameOK || !firstNameOK || !birthDateOk || !emailOK || !email2OK || !pseudoOK || !mdpOK || !mdp2OK || !cvOK || !adresseOk) {
        $("#lblMessage").html("Vous n'avez pas saisi tous les champs");
    } else {
        $("#lblMessage").html("Tout les champs sont saisis");
    }