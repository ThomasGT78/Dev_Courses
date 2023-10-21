/* 
 * ControlesSaisies_EXO.js
 */

/**
 * 
 * @returns {undefined}
 */
function init() {
    $("#btValider").on("click", valider);
    /*
     EN TEST
     */
    $("#user").val("tintin");
    $("#pwd").val("Mdp123");
    $("#email").val("t@gmail.com");
    $("#phone").val("01-02-030405");
} /// init

/**
 * 
 * @returns {undefined}
 */
function valider() {
    // Tous les <input> de type text obligatoires sont obligatoires !!!
    var tInfos = $(".obligatoire");
    var ok = true;

    for (let i = 0; i < tInfos.length; i++) {
        let info = tInfos[i];
        if ($(info).val() === "") {
            ok = false;
        }
    }

    if (!ok) {
        $("#lblMessage").html("User, pwd et email sont obligatoires !");
    } else {
        $("#lblMessage").html("Jusque là tout va bien !");
    }
} /// valider
// -----------------
$(document).ready(init);
