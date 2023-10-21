/* 
 AuthentificationV1_EXO.js
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
    enTest();
} /// init

function enTest() {
    $("#user").val("tintin");
    $("#pwd").val("Mdp123");
}

/**
 * 
 * @returns {undefined}
 */
function valider() {
    $("#lblMessage").html($("#user").val() + "-" + $("#pwd").val());
} /// valider

// -----------------
$(document).ready(init);


//$("#btValider").on("click", function () {
//    // GETTERS = récupération
//    var u = $("#user").val();
//    var p = $("#pwd").val();
//    // SETTERS = affectation
//    $("#lblMessage").html(u + p);
//    
//    //$("#lblMessage").html($("#user").val() + "-" + $("#pwd").val());
//});

