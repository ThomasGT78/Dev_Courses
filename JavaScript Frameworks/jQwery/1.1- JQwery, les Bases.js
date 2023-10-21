			/************
			*	JQuery	*
			************/

Relier le fichier Jquery.js a son HTML
<script src="../jquery/jquery.js"></script>

(On peut aussi mettre le lien CDN http://....)
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

			/*---------------
			-	STRUCTURE	-
			---------------*/
			
$("#id").html("comme .innerHTML");
// on appel la function JQuery avec $
// on sélectione par l'ID, la Classe, la balise, etc... (comme en CSS)
// .laFonction(le paramètre adéquat)

// Pour relier une seule fonction sans paramètre à un événement d'un élément identifié :
$('élément').on("événement", nomDeFonction);

// Pour relier un événement sur un élément à plusieurs fonctions 
// ou passer des arguments à une fonction d'un élément identifié 
// il faut passer par une fonction anonyme.
$('élément').on("événement", function() {
    nomDeFonction([argument(s)]);
}
);


//Au chargement du document:
$(document).ready(init);

// Sur clic:
$("#btValider").on("click", checkValues);

// Sur changement (Lorsque la valeur change dans un <input type="text" /> ou dans un <select>, etc):
$("#lbEffets").on("change", choixListe);

// Cacher une photo et la faire apparaitre progressivement.
$("#photoFade").hide().fadeIn(5000);

// Récupérer une donnée et la stocker dans une variable
var chkSeSouvenir = $("#chkSeSouvenir").prop("checked");

// Combiner les actions
$('#kevin').removeClass('rouge').addClass('vert');

// Appliquer action sur chaque éléments
$('div').each(function)