				/****************
				*	Basics PHP	*
				****************/

<?php /*Balise à utiliser*/ ?>

<?php 
// Lien de visualisation: 
"http://localhost:8081/[file_name.php]"
"http://localhost:8081/home.php"
"http://localhost:8081/1.2-Basics.php"

// Commentaire sur une ligne
/*Commentaire sur
plusieurs lignes*/ 

// Variable:
$myName = "Thomas";
$myAge = 35;
$myHeight = 1.73;

// Constante: Le nom de ma constante se met en majuscule
define("CATHPHRASE", "YEAAHHH");
$myConst = CATHPHRASE;

/* Les différents TYPES de variables:
STRING : chaîne de caractères
INTEGER: nombre entier
FLOAT (ou DOUBLE): nombre décimal
BOOLEAN: booléen (true/false)
ARRAY: tableau (Ordinal ou assossiatif)
OBJECT: Objet
NULL: Valeur « NULL » ou variable vide
: ressourceResource
*/

// Afficher du texte:
echo "<br>L'instruction « echo » pour afficher le texte.";
print "<br>« print » c'est exactement la même chose";
echo "<br>$myName";
echo "<br>".CATHPHRASE;
echo "<br>".constant('CATHPHRASE');
echo "<br>$myConst";

// Au milieu de HTML Comme raccourcis de: 
/*					<?php echo				*/
// on peut écrire:
/*					<?=						*/

// Afficher le contenu d'un tableau(array)
echo "<br><br>print_r:<br>";
echo print_r($friendsV2); 
/* Array ( [0] => Thomas [1] => Laura [2] => Romain )*/

// Afficher les informations d'une ou plusieurs variables (type, values)
echo "<br><br>var_dump:<br>";
var_dump($friendsV2);

echo "<br><br>var_dump multiple:<br>";
var_dump($friendsV2, $myName, $myAge);

// Réccupérer le type d'une variable
$typeName = gettype($myName);
$typeAge = gettype($myAge);
$typeHeight = gettype($myHeight);
$typeFriends = gettype($friendsV1);

echo "<br><br>gettype():<br>";
echo '<br>$myName = ' . $myName . ' de type ' . $typeName;
echo '<br>$myAge = ' . $myAge . ' de type ' . $typeAge;
echo '<br>$myHeight = ' . $myHeight . ' de type ' . $typeHeight;
echo '<br>$friendsV1 = '; print_r($friendsV1); echo ' de type ' . $typeFriends;
?>

