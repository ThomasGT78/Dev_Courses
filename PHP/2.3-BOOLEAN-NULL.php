				/************************
				*	  BOOLEAN / NULL	*
				************************/
<?php
// Lien de visualisation: "http://localhost:8081/1.4-Boolean-Null.php"

		/****************
		*	 BOOLEAN 	*
		****************/

$vrai = true;
$faux = false;

echo '<br><br>$vrai = ' . $vrai;	// $vrai = 1
echo '<br>$faux = ' . $faux;	// $faux = 

echo '<br>La variable $vrai contient une valeur "' . $vrai . '" de type "' . gettype($vrai) . '".<br>';
echo 'La variable $vrai contient une valeur "' . $faux . '" de type "' . gettype($faux) . '".<br>';

$vrai += $faux;
echo '<br>$vrai = ' . $vrai;	// $vrai = 1
echo '<br>La variable $vrai contient une valeur "' . $vrai . '" de type "' . gettype($vrai) . '".<br>';


		/************
		*	 NULL 	*
		************/
/* 
Le type de données Null est un type un peu particulier puisqu’il correspond à l’absence de valeur et sert donc à représenter des variables vides
*/

$vide1 = null;
$vide2;

echo '<br>La variable $vide1 contient une valeur de type "' . gettype($vide1) . '".<br>';
echo '<br>La variable $vide2 contient une valeur de type "' . gettype($vide2) . '".<br>';



?>