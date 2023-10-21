		<!-----------------------------------
		-	  BOUCLE dans TABLEAU ORDINAL	-
		------------------------------------>
<?php
// "http://localhost:8081/4.2-Table-Boucle.php"


		/************************
		*	 Tableau Ordinal	*
		************************/

$prenoms = ['Stéphane', 'Mous', 'Thomas'];

// FOR
for ($i = 0; $i < count($prenoms) ; $i++){
	echo "<p>$prenoms[$i]</p>";
}
// FOREACH
foreach ($prenoms as $prenom){
	echo "<p>$prenom</p>";
}

// WHILE
// current($array);
/* Retourne l'élément courant du tableau */

// key($array | $object);
/*	Retourne la clé courante dans le tableau array 
	renvoi: int | string | null | FALSE on error */

// next($array);
/* Avance le pointeur interne d'un tableau */

while (current($prenomsV2)) {
	$value = current($prenomsV2);
    echo "<br>" . key($prenomsV2) . " => " . $value;
    next($prenomsV2);
}


		/************************
		*	Tableau Associatif	*
		************************/

$personne = array(
	'nom' => 'Garot',
	'prenom' => 'Thomas',
	'age' => '33',
);

			/************
			*	 FOR	*
			************/
			
// FOR
for ($i = 0; $i < count($personne) ; $i++){
	$keys = array_keys($personne);
	$key = $keys[$i];
	echo "<p>for: $key => $personne[$key]</p>";
}

			/****************
			*	 FOREACH	*
			****************/
			
// FOREACH
foreach ($personne as $detail){
	echo "<p>$detail</p>";
}

foreach ($personne as $key => $detail){
	echo "<p>$key = $detail</p>";
}

for ($i = 0; $i < count($prenomsV2) ; $i++){
	$key = key($prenoms);
	echo "<p>$key</p>";
}

			/************
			*	WHILE	*
			************/



while ($value = current($personne)) {
    echo key($personne) . " => " . $value, "<br>";
    next($personne);
}


/*
Renvoi: 
0 => Baptiste 
1 => Laura 
2 => Romain 
*/
?>