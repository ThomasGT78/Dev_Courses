		<!-----------------------
		-	  Tableau Ordinal 	-
		------------------------>
<?php
// "http://localhost:8081/3.1.1-ARRAY_Ordinal.php"


// INITIALISER un tableau
$namesV1[0] = "Thomas";
$namesV1[1] = "Laura";
$namesV1[2] = "Florian";
// ou
$namesV2 = array('Baptiste', 'Laura', 'Romain');
// ou
$namesV3 = ['Stéphane', 'Mous', 'Thomas'];


// AFFICHER Contenue du Tableau ENTIER
echo print_r($namesV2); 
/* Array ( [0] => Baptiste [1] => Laura [2] => Romain )*/

// AFFICHER Contenue d'une LIGNE du Tableau
echo '<br>'.$namesV1[0];	// Thomas
echo '<br>'.$namesV2[2];	// Romain
echo '<br>'.$namesV3[1];	// Mous

// Afficher le contenu d'un tableau(array)
echo "<br><br>print_r( ):<br>";
echo print_r($namesV3); 

// La TAILLE d'un Tableau
$sizeV3 = count($namesV3);
echo '<br><br>Le tableau $prenomV3 contient ' . $sizeV3 . ' valeurs.<br><br>';

		/****************************
		*	 MODIFIER un TABLEAU	*
		****************************/

// AJOUTER VALEURS
echo '$namesV3:<br>';
array_push($namesV3, "Florian", "Marc");
echo print_r($namesV3)."<br>"; 

// ou
$namesV3[] = "Julien"; // 1 seule valeur à la fois
echo print_r($namesV3)."<br><br>"; 

// avec Numeric KEY
echo '$namesV2:<br>';
echo print_r($namesV2)."<br>"; 
$firstSizeV2 = count($namesV2);
$namesV2[6] = "Brenda";
echo print_r($namesV2)."<br>"; 
$nextSizeV2 = count($namesV2);
echo 'Le tableau $prenomV2 contenait ' . $firstSizeV2 . ' valeurs et en contient maintenant ' . $nextSizeV2 . ' , et non 7.<br><br>';


// CONCATÉNER 2 tableaux
/*Réassigne les clés par ordre d'apparition, prends les élément du 1er tableau de la liste, puis le 2ème, etc...*/
$sizeTheoric = count($namesV2)+count($namesV3);

echo 'CONCAT $namesV2 + $namesV3:<br>';
$concatNames = array_merge($namesV2, $namesV3);
$sizeConcatNames = count($concatNames);

echo print_r($concatNames)."<br>"; 
echo 'Le tableau $concatNames contient bien ' . $sizeConcatNames . ' valeurs.<br><br>';


// FUSIONNER 2 tableaux
/* Garde les valeurs du 2ème tableau et ajoute celle du 1er lorsque les clés n'éxiste pas dans le 2ème*/
echo 'FUSION $namesV2 + $namesV3:<br>';
$fusionNames = $namesV2 + $namesV3;
$sizeFusionNames = count($fusionNames);

echo print_r($fusionNames)."<br>"; 
echo 'Le tableau $fusionNames contient ' . $sizeFusionNames . ' valeurs et non ' . $sizeTheoric . ' .<br><br>';

// ADDITIONNER des valeurs NUMÉRIQUES d'un tableau
$ages = [22,33,29,36,31];
$sumAges = array_sum($ages);
echo $sumAges;

?>
