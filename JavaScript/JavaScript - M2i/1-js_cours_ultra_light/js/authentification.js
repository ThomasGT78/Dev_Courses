function init() {
    // Quand l'utilisateur clique sur le bouton "valider"
    // On sollicite la fonction valider
    document.getElementById("btValider").onclick = valider;
    document.getElementById("pseudo").value = `Votre pseudo`;
    document.getElementById("mdp").value = `Votre mot de Passe`;
    document.getElementById("lblMessage").innerHTML = ``;
    document.getElementById("checkbox").onclick = show;
    document.getElementById("france").onclick = francais;
    document.getElementById("espagne").onclick = espagnol;

} /// init
function show () {
    var showPW = document.getElementById('mdp');
    var check = document.getElementById('checkbox');

    if (check.checked) {
        showPW.type = 'text';
    } else {
        showPW.type ='password';
    }
}

function espagnol (){
    document.getElementById("titre").innerHTML = `Autenticación`;
    document.getElementById('lblPseudo').innerHTML = `Seudónimo :`;
    document.getElementById('pseudo').value = `Su seudónimo`;
    document.getElementById('lblMdp').innerHTML = `Contraseña :`;
    document.getElementById('mdp').value = `Su contraseña`;
    document.getElementById('lblCheckbox').innerHTML = `Ver contraseña`;
    document.getElementById('btValider').value = `Validar`;
}

function francais () {
    document.getElementById("titre").innerHTML = `Authentification`;
    document.getElementById('lblPseudo').innerHTML = `Pseudo :`;
    document.getElementById('pseudo').value = `Votre pseudo`;
    document.getElementById('lblMdp').innerHTML = `MDP :`;
    document.getElementById('mdp').value = `Votre mot de Passe`;
    document.getElementById('lblCheckbox').innerHTML = `Afficher le mot de passe`;
    document.getElementById('btValider').value = `Valider`;
}

/**
 * 
 * @returns {undefined}
 */
function valider() {
    // Déclaration d'une variable et affectation d'une valeur
    var message = "0K";
    // Récupération d'une saisie de l'utilisateur
    var pseudo = document.getElementById("pseudo").value;
    var mdp = document.getElementById("mdp").value;
    // Test des valeurs saisies
    // trim() enlève les espaces avant et après
    // Si le pseudo est vide ou si le mdp est vide alors
    if (pseudo.trim() === "" || mdp.trim() === "") {
        // Affectation de "KO" à la variable message
        message = "KO";
    }
    // Affichage d'une valeur (0K ou KO) dans le <label>
    document.getElementById("lblMessage").innerHTML = message;
} /// init

// Au chargement de la page et de la lecture du fichier js on sollicite la fonction init
window.onload = init;

