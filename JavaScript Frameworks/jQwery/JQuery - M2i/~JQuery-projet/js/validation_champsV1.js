	if ($("#nom").val() == "") {            // Verif Nom
        lastNameOK = false;
        $("#lblMessageNom").html("Le Nom est manquant").css("color", "red");
    } else if (!testLastName){
        $("#lblMessageNom").html("Le Nom est incorrect").css("color", "red");
        lastNameOK = true;
    } else {
        $("#lblMessageNom").html("ok");
        lastNameOK = true;
    }
    
	
	if ($("#prenom").val() == "") {            // Verif Prénom
        firstNameOK = false;
        $("#lblMessagePrenom").html("Le Prénom est manquant").css("color", "red");
    } else if (!testFirstName) {
        $("#lblMessagePrenom").html("Le Prénom est incorrect").css("color", "red");
        firstNameOK = true;
    } else {
        $("#lblMessagePrenom").html("ok");
        firstNameOK = true;
    }
	
	
	if ($("#dateNaissance").val() == "") {            // Verif Date de Naissance
        birthDateOk = false;
        $("#lblMessageDateNaissance").html("La date de naissance est manquante").css("color", "red");
    } else if (!testBirthDate) {
        $("#lblMessageDateNaissance").html("La date de naissance est incorrecte").css("color", "red");
        birthDateOk = true;
    } else {
        $("#lblMessageDateNaissance").html("ok");
        birthDateOk = true;
    }


	if ($("#email").val() == "") {                  // Verif Email
        emailOK = false;
        $("#lblMessageEmail").html("L'e-mail est manquant").css("color", "red");
    } else if (!testEmail) {
        $("#lblMessageEmail").html("L'e-mail est incorrect").css("color", "red");
        emailOK = true;
    } else {
        $("#lblMessageEmail").html("ok");
        emailOK = true;
    }


	if ($("#email2").val() == "") {                  // Verif Email 2
        email2OK = false;
        $("#lblMessageEmail2").html("Le 2ème email est manquant").css("color", "red");
    } else if ($("#email2").val() != $("#email").val()) {
        $("#lblMessageEmail2").html("La validation d'email ne correspond pas").css("color", "red");
        email2OK = true;
    } else {
        $("#lblMessageEmail2").html("ok");
        email2OK = true;
    }


    if ($("#pseudo").val() == "") {                  //------- Verif Pseudo
        pseudoOK = false;
        $("#lblMessagePseudo").html("Le pseudo est manquant").css("color", "red");
    } else if (!testPseudo) {
        $("#lblMessagePseudo").html("Le Pseudo est incorrect").css("color", "red");
        pseudoOK = true;
    } else {
        $("#lblMessagePseudo").html("ok");
        pseudoOK = true;
    }


    if ($("#mdp").val() == "") {                  //------- Verif Pseudo
        mdpOK = false;
        $("#lblMessageMDP").html("Le Mot de passe est manquant").css("color", "red");
    } else if (!testMdp) {
        $("#lblMessageMDP").html("Le Mot de passe est incorrect").css("color", "red");
        mdpOK = true;
    } else {
        $("#lblMessageMDP").html("ok");
        mdpOK = true;
    }


    if ($("#mdp2").val() == "") {                  //-------  Verif Email 2
        mdp2OK = false;
        $("#lblMessageMDP2").html("Le 2ème mot de passe est manquant").css("color", "red");
    } else if ($("#mdp2").val() != $("#mdp").val()) {
        $("#lblMessageMDP2").html("La validation du mot de passene correspond pas").css("color", "red");
        mdp2OK = true;
    } else {
        $("#lblMessageMDP2").html("ok");
        mdp2OK = true;
    }