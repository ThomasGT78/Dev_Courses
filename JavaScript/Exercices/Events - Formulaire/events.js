
var lblPseudo = document.getElementById("lblPseudo");       // PSEUDO
var inputPseudo = document.getElementById("inputPseudo");
var msgPseudo = document.getElementById("msgPseudo");
var pPseudo = document.getElementById("pPseudo");

var lblEmail = document.getElementById("lblEmail");         // EMAIL
var inputEmail = document.getElementById("inputEmail");
var msgEmail = document.getElementById("msgEmail");
var pEmail = document.getElementById("pEmail");
var lblEmail2 = document.getElementById("lblEmail2");
var inputEmail2 = document.getElementById("inputEmail2");
var msgEmail2 = document.getElementById("msgEmail2");

var lblMdp = document.getElementById("lblMdp");             // MDP
var inputMdp = document.getElementById("inputMdp");
var msgMdp = document.getElementById("msgMdp");
var pMdp = document.getElementById("pMdp");
var checkMdpVisible = document.getElementById("checkMdpVisible");
var lblMdpVisible = document.getElementById("lblMdpVisible");
var lblMdp2 = document.getElementById("lblMdp2");
var inputMdp2 = document.getElementById("inputMdp2");
var msgMdp2 = document.getElementById("msgMdp2");

var btValider = document.getElementById("btValider");       // VALIDER/RESET
var btReset = document.getElementById("btReset");
var idForm = document.getElementById("idForm");     // récup l'Id du Form
var myForm = document.getElementsByName("myForm")   // récupère le name du Form
var myFormShort = document.myForm                   // récupère aussi le name du Form

var errorMessage = document.getElementById("errorMessage"); 

// vérifie pattern onInput des champs de texte et met message d'erreur rouge si pas bon ou vert si OK
// quand on click sur un paragraphe, ça chang ses bordure 1 seconde et montre le texte caché

// vérifie email2 onInput et met un background-color rouge si mauvais et vert si correct, 
// met email2 blanc onBlur

init = () => {
    
    function checkErOnInput(input, er, msg, p) { // CHECK PATTERN
        var testEr = er.test(input.value);
        if (!testEr) {
            input.setAttribute("class", "redText")
            msg.setAttribute("class", "redText")
            msg.textContent = "Format non respecté"
            p.removeAttribute("class")
        } else {
            input.setAttribute("class", "greenText")
            msg.setAttribute("class", "greenText")
            msg.textContent = "Format OK"
            p.setAttribute("class", 'hidden')
        }
    }
    
    function colorBlack(element) {          // fonction pour écrire en noir
        element.setAttribute("class", "blackText")
        //element.style.color = "black";
    }

    function testChamps2(input2, input) {       // TEST LES CHAMPS 2 (verif email et mdp)
        if (input2.value == input.value) {
            input2.style.backgroundColor = "green"
            setTimeout(() => {
                input2.style.backgroundColor = "white"
            }, 1000)
        } else {
            input2.style.backgroundColor = "red"
            setTimeout(() => {
                input2.style.backgroundColor = "white"
            }, 1000)
        }
    }

    

                    /************
                     *  Pseudo  *
                     ************/

    /// change couleur en fonction du focus ou du survol de la souris
    inputPseudo.onmouseover = () => { 
        lblPseudo.style.color = "green",
        document.body.onclick = () => { }   // au dessus de l'Input, le clic ne fait rien
    };

    inputPseudo.onmouseout = () => { 
        lblPseudo.style.color = "red",
        document.body.onclick = () => { lblPseudo.style.backgroundColor = "white", lblPseudo.style.color = "black" }    // en dehors de l'input, le clic enlève les couleur
    };
    inputPseudo.onfocus = () => { lblPseudo.style.backgroundColor = "yellow" };
    
    
    /// Autofocus Pseudo au chargement de la page, doit être mis après les style pour changer de couleur au premier focus.
    inputPseudo.focus()

    // vérifie pattern onInput des champs de texte et met message d'erreur rouge si pas bon ou vert si OK
    var erPseudo = new RegExp("^[A-Za-z0-9 '-_.]{6,16}$");
    inputPseudo.oninput = () => { checkErOnInput(inputPseudo, erPseudo, msgPseudo, pPseudo) };
    inputPseudo.onblur = () => { colorBlack(inputPseudo) }

                    /************
                     *  Email   *
                     ************/

    // Check Email

    // vérifie pattern onInput de l'email et met message d'erreur rouge si pas bon ou vert si OK
    var erEmail = new RegExp("^[a-z.-_]{1,50}[@][a-z]{1,50}[.][a-z]{2,3}$");
    inputEmail.oninput = () => { checkErOnInput(inputEmail, erEmail, msgEmail, pEmail) };
    inputEmail.onblur = () => { colorBlack(inputEmail) }

    /*
    var testEmail;
    function testErEmail() {
        testEmail = erEmail.test(inputEmail.value); // doit être utiliser dans la fonction, sinon ne change pas
        if (!testEmail) {
            inputEmail.style.color = "red";
        } else {
            inputEmail.style.color = "green";
        }
    }
    inputEmail.oninput = testErEmail
    inputEmail.onblur = () => {inputEmail.style.color = "black"};
    */

    // verifie Email onBlur du email2
    inputEmail2.addEventListener("blur", function () { testChamps2(inputEmail2, inputEmail) })
    inputEmail.addEventListener("blur", function () { testChamps2(inputEmail2, inputEmail) })

                    /************
                     *   MDP   *
                     ************/

    // AFFICHER / CACHER le MDP de passe onChange de la checkbox
    function showHideMdp () {
        if (inputMdp.type == "password") {
            inputMdp.setAttribute("type", "text")
        } else {
            inputMdp.setAttribute("type", "password")
        }
    }
    checkMdpVisible.onchange = showHideMdp;

    // CHECK PASSWORD, verifie le format du mdp à chaque lettre, met en rouge si faut, en vert si bon, en noir onBlur
    var erMdp = new RegExp("^.{6,25}$");  // entre 6 et 25 de n'importe quel caractère
    inputMdp.oninput = () => { checkErOnInput(inputMdp, erMdp, msgMdp, pMdp) };
    inputMdp.onblur = () => { colorBlack(inputMdp) }

    /*
    var testPassWord;
    function testMdp () {
        testPassWord = erPassWord.test(inputMdp.value);
        if (!testPassWord){
            inputMdp.style.color = "red";
        } else {
            inputMdp.style.color = "green";
        }
    }
    inputMdp.oninput = testMdp
    inputMdp.onblur = () => { inputMdp.style.color = "black"; }
    */

    // TESTER MDP onBlur du mdp2
    inputMdp2.addEventListener("blur", function () { testChamps2(inputMdp2, inputMdp) })
    inputMdp.addEventListener("blur", function () { testChamps2(inputMdp2, inputMdp) })

    /* 
    inputMdp2.onblur = () => {
        if (inputMdp2.value == inputMdp.value){
            inputMdp2.style.backgroundColor = "green"
        } else {
            inputMdp2.style.backgroundColor = "red"
        }
    } 
    */

                    /*****************
                     *  Validation   *
                     ****************/

    /// reset form sur click du boutton reset
    btReset.onclick = function () { 
        idForm.reset(),
        document.location.reload()      // recharge la page actuelle
     }
    // change couleur des bouttons pendant la durée du clic

    /// emet une alert au click de valider (OK et envoi si tout est bon, sinon Erreur)
    btValider.onclick = () => { 

        testErPseudo = erPseudo.test(inputPseudo.value); // test les RegExp
        testErEmail = erEmail.test(inputEmail.value);
        testErMdp = erMdp.test(inputMdp.value);

        // test email 2
        var testEmail;
        if (inputEmail2.value == inputEmail.value) {
            testEmail = true
        } else {
            testEmail = false
        }

        // test MDP2
        var testMdp;
        if (inputMdp2.value == inputMdp.value) {
            testMdp = true
        } else {
            testMdp = false
        };
        
        // envoi la requête si tout est bon ou sinon affiche erreur
        if (testErPseudo && testErEmail && testErMdp && testEmail && testMdp) {
            idForm.submit()
            errorMessage.setAttribute("class", "hidden")
        } else {
            //errorMessage.setAttribute("class", "")
            errorMessage.removeAttribute("class")
        }
    
    }
    
    // btValider.onclick = () => { document.forms["myForm"].submit()}
    // btValider.onclick = () => { document.forms["IdForm"].submit()}
    // btValider.onclick = () => { document.forms["0"].submit()}
    // btValider.onclick = () => { myFormShort.submit() }
    // btValider.onclick = () => { myForm[0].submit() }


} // fonction init

window.onload = init