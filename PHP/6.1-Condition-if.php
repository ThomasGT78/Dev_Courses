		<!-----------------------
		-	 Conditions - IF	-
		------------------------>
<?php
// "http://localhost:8081/2.1-Condition-if.php";

// Opérateurs de condition
/***
&&	AND	=>	ET
||	OR	=>
***/


$age = 26;

/*
else if ou elseif,  sans espace ça marche aussi
*/
// If classique
if($age <= 12){
	echo "salut gamin!";
} else if ($age <= 25) {
	echo "salut jeune homme!";
} elseif ($age == 26) {	
	echo "Tu as l'âge parfait!";
} else {
	echo "salut vielle branche!";
};


if ($age >= 18){
	$majeur = true;
} else {
	$majeur = false;
}


// If Ternaire:
echo ($age <= 18) ? 
	"Ternaire: salut gamin!" : 
	"Ternaire: salut vielle branche!";

$majeur = ($age >= 18) ? true : false;


// IF Mix V1(on ferme la balise php après «{» on l'ouvre avant«}»)
if($age <= 12)
{ ?>
	tu as moins de 12 ans?
	<p>Mix V1: Salut gamin!</p>
<?php
} else { 
?>
	<p>Mix V1: salut vielle branche! </p>
<?php }


// IF Mix V2
if($age <= 12):
?>
	<p>Mix V2: Salut gamin!<p>
<?php else : ?>
	<p>Mix V2: salut vielle branche!</p>
<?php endif 



?>