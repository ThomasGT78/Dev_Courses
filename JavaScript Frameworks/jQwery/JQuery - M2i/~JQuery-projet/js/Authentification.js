var message;
                        /*********
                        *  INIT  *
                        *********/

function init (){
    $("#chkMdpVisible").prop("checked", false)
    $("#btValider").on("click", valider);
    $("#chkMdpVisible").on("click", mdpVisible)

    $("#lblMessage").html("");
    $("#pseudo").val("");
    //$("#mdp").val("GT");
    recupCookie()
} // init

                        /****************
                        *  MDP VISIBLE  *
                        ****************/

function mdpVisible (){
    if ($("#mdp").attr("type") == "password") {
        $("#mdp").attr("type", "text")
        $("#chkMdpVisible").prop("checked", true)
    } else {
        $("#mdp").attr("type", "password")
        $("#chkMdpVisible").prop("checked", false)
    }
}// mdpVisible

                        /************
                        *  VALIDER  *
                        ************/

function valider () {
    var pseudoOK = "Tom";
    var mdpOK = "GT";
    var pseudoValue = $("#pseudo").val();
    var mdpValue = $("#mdp").val();
    
    if (mdpValue == "" || pseudoValue == ""){
        $("#lblMessage").html("Tous les champs doivent être saisis");
    } else if (mdpValue != mdpOK || pseudoValue != pseudoOK) {
        $("#lblMessage").html("Authentification ratée");
    } else {
        rememberMe();
        $("#lblMessage").html(message);
    }
    
} // valider

                        /****************************
                        *  CRÉER/SUPPRIMER COOKIES  *
                        ****************************/

function createCookie(cookieName, cookieValue){
    var dateExpire = new Date();
    dateExpire.setYear(2021);
    document.cookie = cookieName + "=" + cookieValue + ";expires=" + dateExpire.toGMTString();
} // creerCookie

function deleteCookie(cookieName) {
    var dateExpire = new Date();
    document.cookie = cookieName + "=" + "" + ";expires=" + dateExpire.toGMTString();
} // supprCookie

function rememberMe (){
    var chkSeSouvenir = $("#chkSeSouvenir").prop("checked");
    console.log($("#chkSeSouvenir").prop("checked"));

    if (chkSeSouvenir) {
        pseudoValue = $("#pseudo").val();
        mdpValue = $("#mdp").val();
        createCookie("cookPseudo", pseudoValue);
        createCookie("cookMdp", mdpValue);
        message = "Authentification réussie et Cookies créés !!!";
    } else {
        deleteCookie("cookPseudo");
        deleteCookie("cookMdp");
        message = "Authentification réussie et PAS de Cookies créés !!!";
    }
} // seSouvenir

                        /*******************************
                        *  RÉCUPÉRER/AFFICHER COOKIES  *
                        *******************************/

function recupCookie (){
    var cookies = document.cookie;          // Récupération des cookies enregistrés (sous forme de table)
                                            // Chaque cookie est séparé par un ; donc on sépare chaque cookie dans
    var tabCookies = cookies.split("; ");   // un tableau propre à chacun
    for (var i=0 ; 1<tabCookies.length ; i++){      // boucle pour aller d'un cookie à un autre
        var nameValueCookie = tabCookies[i].split("=");  // on sépare le nom et la valeur du cookie (séparé par =)
        if (nameValueCookie[0] == "cookPseudo"){    // compare le nom du cookie pour savoir où appliquer la valeur
            $("#pseudo").val(nameValueCookie[1])    // on applique la valeur de "cookPseudo" au pseudo
        };
        if (nameValueCookie[0] == "cookMdp") {      // compare le nom du cookie pour savoir où appliquer la valeur
            $("#mdp").val(nameValueCookie[1])       // on applique la valeur de "cookMdp" au mdp
        };
    };
} // recupCookie

$(document).ready(init)