https://api.jqueryui.com/category/effects/

// FADE

$( document ).click(function() {
  $("#id").toggle("fade");
});

// ANIMATE

// déplacer une image de gauche à droite
/* "position: absolute" OBLIGATOIRE */
<div id="id" style="position:absolute; top:50px">Image</div>

$(document).ready(function() {
       $("#id").animate({left: "+=500"}, 2000);
       $("#id").animate({left: "-=300"}, 1000);
});

// mouvement continue
/* stocker chaque mouvement dans un sens dans une fonction puis appeler la fonction du mouvement suivant à l'interieur */
function beeLeft() {
       $("#b").animate({left: "-=500"}, 2000, "swing", beeRight);
}
function beeRight() {
       $("#b").animate({left: "+=500"}, 2000, "swing", beeLeft);
}
beeRight();