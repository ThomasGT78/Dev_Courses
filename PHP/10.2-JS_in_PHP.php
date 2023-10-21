		<!-------------------
		-	 JS  /  PHP 	-
		-------------------->

		/****************************
		*	Variable JS dans PHP	*
		****************************/


=> DIRECTEMENT
<?php
$variable_php = '<script type="text/javascript" >document.write(variable_js);</script>';
 
?>

=> Via le HTML
<!-- JS -->
<script>
var variableAPasser = "my value"

document.getElementById(variableAPasser).value(variableAPasser);
//ou jquery
$("#variableAPasser").val(variableAPasser)
</script>

<!-- HTML -->
<input type=hidden id=variableAPasser ?>/>

<!-- PHP -->
<?php echo $_GET['variableAPasser']; ?>

=> Requête Ajax

<script>
var a = "Hello";
var b = " World";

$.ajax({
	url: 'functions.php', 
	type: 'POST',
	data: 'a='+a+'&b='+b,
	success: function(data){
			// instructions
	}
});
</script>

<?php
$a = $_POST['a'];
$b = $_POST['b'];
?>


		/****************************
		*	Variable PHP dans JS	*
		****************************/

=> DIRECTEMENT

<script>
var variable_js = '<?php echo $variable_php; ?>';

// avec json_encode pour la sécurité en évitant les injections php
var variableRecuperee = <?php echo json_encode($variableAPasser); ?>;
</script>


=> Via le HTML
<!-- PHP -->
<?php
$variableAPasser = "my value";
?>

<!-- HTML -->
<input type=hidden id=variableAPasser value=<?php echo $variableAPasser; ?>/>

<!-- JS -->
<script>
var variableRecuperee = document.getElementById(variableAPasser).value;
//ou jquery
var variableRecuperee = $("#variableAPasser").val()
</script>


=> Requête Ajax
<?php
// Fichier PHP script.php

echo $variableAPasser;
?>

<script>
// Code JavaScript

var requete = new XMLHttpRequest();
requete.onload = function() {
	//La variable à passer est alors contenue dans l'objet response et l'attribut responseText.
	var variableARecuperee = this.responseText;
};
requete.open(get, script.php, true); //True pour que l'exécution du script continue pendant le chargement, false pour attendre.
requete.send();

</script>



=> Via Cookies:
<?php
//PHP
setcookie(MonCookie, $variableAPasser);
?>

<script>
//JavaScript
//Ce bout de code permet de trier les cookies pour les stocker dans un tableau associatif.
var cookies = document.cookie.split(;).
	map(function(el){ return el.split(=); }).
	reduce(function(prev,cur){ prev[cur[0]] = cur[1];return prev },{});
//Récupération de la variable dans le tableau
var variableRecuperee = cookies[MonCookie];
</script>