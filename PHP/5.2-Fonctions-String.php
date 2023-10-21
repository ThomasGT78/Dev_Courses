		<!-----------------------
		-	 FUNCTION - STRING 	-
		------------------------>
<?php
// "http://localhost:8081/5.2-Fonctions-String.php"

$phrase = "Hello World";

// strlen(): longueur d'une chaîne
$nbChar = strlen($phrase);

// str_replace(): rechercher et remplacer
$ma_variable = str_replace('W', 'S', $phrase);
=>output: "Hello Sorld"

// strtolower(): écrire en minuscules
$minPhrase = strtolower($phrase);

// strtoupper(): écrire en majuscule
$majPhrase = strtoupper($phrase);

// str_shuffle() : mélanger les lettres
$shuffle = str_shuffle($phrase);

$secondes = date('s');
$minute = date('i');
$hour = date('H');
$day = date('d');
$month = date('m');
$year = date('Y');
$date = date('d/m/Y');
?>
