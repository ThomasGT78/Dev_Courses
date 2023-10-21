function init() {
    // Quand l'utilisateur clique sur le bouton "valider"
    // On sollicite la fonction valider
    document.getElementById("btValider").onclick = valider;
    // Création d'un tableau
    var villes = new Array();
    // Remplissage du tableau
    villes[0] = "Sélectionnez";
    villes[1] = "Paris";
    villes[2] = "Lyon";
    villes[3] = "Marseille";
    // Remplissage de la liste déroulante
    var lsOptions = "<option>Sélectionnez</option>";
    for (var i = 0; i < villes.length; i++) {
        lsOptions += "<option value='" + villes[i] + "'>" + villes[i] + "</option>";
    }
    document.getElementById("villes").innerHTML = lsOptions;

        /****************************
        *   jours, mois et annees   *
        ****************************/

    var maintenant = new Date();

    var lsOptionsday = "<option>Sélectionnez</option>";
    for (var i = 1; i <= 31; i++) {
        lsOptionsday += "<option>" + i + "</option>";
    }
    document.getElementById("day").innerHTML = lsOptionsday;

    var month = new Array();
    month[0] = 'Janvier';
    month[1] = 'Février';
    month[2] = 'Mars';
    month[3] = 'Avril';
    month[4] = 'Mai';
    month[5] = 'Juin';
    month[6] = 'Juillet';
    month[7] = 'Août';
    month[8] = 'Septembre';
    month[9] = 'Octobre';
    month[10] = 'Novembre';
    month[11] = 'Décembre';

    var lsOptionsMonth = "<option>Sélectionnez</option>";
    for (var i = 0; i <= 11; i++) {
        lsOptionsMonth += "<option>" + month[i] + "</option>";
    }
    document.getElementById("month").innerHTML = lsOptionsMonth;
    
    var year = maintenant.getFullYear()
    var lsOptionsYear = "<option>Sélectionnez</option>";
    for (var i = (year-120); i <= year; i++) {
        lsOptionsYear += "<option>" + i + "</option>";
    }
    document.getElementById("year").innerHTML = lsOptionsYear;

    var birthDay = birthDay;
    var birthMonth = birthMonth;
    var birthYear = birthYear;


        /****************************
        *    AUTRES ÉVÈENEMENTS     *
        ****************************/
    var email = document.getElementById("inputEmail")
    email.onfocus = focusEmail
    function focusEmail() { email.style.backgroundColor = '#E5FCFC'};

    email.onblur = blurEmail;
    function blurEmail() { email.style.backgroundColor = '#ffffff' }
    
    email.onmouseover = overEmail;
    function overEmail() { email.style.backgroundColor = '#FBF9CE' };
    
    email.onmouseout = outEmail;
    function outEmail() { email.style.backgroundColor = '#ffffff' };
        

} /// init

/**
 * 
 * @returns {undefined}
 */
function valider() {
        /****************************
        *   MESSAGE PSEUDO ET MDP   *
        ****************************/
    var message = "";
    var pseudo = document.getElementById('inputPseudo').value.trim();
    if (pseudo.length < 5){
        message += `Pseudo Incorrect, il faut au moins 5 caractère!<br>`
    }
    var mdp = document.getElementById('inputMdp').value.trim();
    if (mdp<6 || mdp>12) {
        message += `Mot de passe Incorrect, il faut entre 6 et 12 caractères! <br/>`
    }
    
        /********************************
        *   MESSAGE DATE DE NAISSANCE   *
        ********************************/

    var day = document.getElementById('day').value.trim();
    if (day == 'Sélectionnez'){
        message += `Il faut sélectionner un jour! <br>`
    }

    var month = document.getElementById('month').value.trim();
    if (month == 'Sélectionnez') {
        message += `Il faut sélectionner un mois! <br>`
    }

    var year = document.getElementById('year').value.trim();
    if (year == 'Sélectionnez') {
        message += `Il faut sélectionner une année! <br>`
    }
    document.getElementById('errorMessage').innerHTML = message;

    var email = document.getElementById('inputEmail').value.trim();
    var email2 = document.getElementById('inputEmail2').value.trim();
    var messagErrorEmail = '';
    if (email != email2){
        messagErrorEmail = `Le deuxième email ne correspond pas au premier!`
        document.getElementById("lblEmail2").insertAdjacentHTML("beforeend", `<span style="color: red;"> ${messagErrorEmail}</span>`);
    }

} /// valider

// Au démarrage on sollicite la fonction init
window.onload = init;