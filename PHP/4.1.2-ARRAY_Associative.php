		<!---------------------------
		-	  Tableau Associatif 	-
		---------------------------->
<?php
// "http://localhost:8081/4.1.2-ARRAY_Associative.php"

		
$personne = array(
	'nom' => 'Garot',
	'prenom' => 'Thomas',
	'age' => '33',
);

// Vérifier si une Clé existe dans l'array (boolean)
array_key_exists('key', $array);

// Vérifier si une Valeur existe dans l'array (boolean)
in_array('value', $array);


//Text key (assoc)
$personne['taille'] = '1.73cm';

		/************
		*	 KEY	*
		************/
		
// Récupérer la Clé d'une Valeur dans l'array
array_search('value', $array);


// Retourne toutes les clés d'un tableau
array_keys($array ,[$search_value] ,[$strictMode = false]);
/* renvoi: array */
$keys = array_keys($personne);

print_r($keys);
	echo "<br>";
	

// Retourne la clé de la position actuelle du pointeur interne du tableau
key($array | $object);
/* renvoi: int | string | null |  FALSE on error */
	
			/****************
			*	 FOREACH	*
			****************/

// Show KEYS	
foreach($keys as $key){
	echo $key ."<br>";
}

// Show KEYS => VALUES
foreach($personne as $key => $value){
	echo $key . " => " . $value, "<br>";
}

			/************
			*	WHILE	*
			************/
			
// Retourne l'élément courant du tableau
current($array);

// Retourne la clé courante dans le tableau array
key($array | $object);
/* renvoi: int | string | null |  FALSE on error */

// Avance le pointeur interne d'un tableau
next($array);

while ($value = current($personne)) {
    echo key($personne) . " => " . $value, "<br>";
    next($personne);
}


// SUM

function array_multisum(array $arr): float {
    $sum = array_sum($arr);
    foreach($arr as $child) {
        $sum += is_array($child) ? array_multisum($child) : 0;
    }
    return $sum;
}

// Example:

$data =
[
    'a' => 5,
    'b' =>
    [
        'c' => 7,
        'd' => 3
    ],
    'e' => 4,
    'f' =>
    [
        'g' => 6,
        'h' =>
        [
            'i' => 1,
            'j' => 2
        ]
    ]
];

echo array_multisum($data);

//output: 28
?>