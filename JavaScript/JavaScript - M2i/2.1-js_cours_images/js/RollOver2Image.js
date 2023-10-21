        /************
        * ROLL OVER *
        ************/

function init() {
    var photo1 = document.getElementById("photo1");

    photo1.onmouseover = function () {
        photo1.setAttribute("src", "../image/ipanema.JPG");
    };

    photo1.onmouseout = function () {
        photo1.setAttribute("src", "../image/natural_window.JPG");
    };
} /// init

        /***************
        * DOUBLE CLICK *
        ***************/

var photo2 = document.getElementById("photo2");
photo2.ondblclick = function bigger() {
    if (photo2.width == 300){
        photo2.setAttribute("width", "600");
    } else {
        photo2.setAttribute("width", "300");
    }
};

        /*******
        * ZOOM *
        *******/
var valeurZoom = [];
valeurZoom[0] = "0.2";
valeurZoom[1] = "0.5";
valeurZoom[2] = "0.75";
valeurZoom[3] = "1";
valeurZoom[4] = "1.5";
valeurZoom[5] = "2";

var option = "";
var selectZoom = document.getElementById("selectZoom")
var photo3 = document.getElementById("photo3");

          // Création de la liste d'option déroulé

function addOption (tableau){ 
    for (var i = 0; i < tableau.length; i++){
        option += `<option value="${tableau[i]}">${tableau[i]*100}%</option>`
    };
    selectZoom.innerHTML = option;
};
          // Création de la liste d'option déroulé

var getZoom = selectZoom.getAttribute("value");     // Récupération de la valeur du zoom
selectZoom.onchange = function zoom() {             //affectation du Zoom
    photo3.width = `${100*getZoom}%`;
}

window.onload = init; 
window.onload = addOption(valeurZoom);
