		<!---------------
		-	  BOUCLE	-
		----------------->
<?php
// "http://localhost:8081/3-Boucle.php"

$repeat = 0;

// WHILE
/* boucle sur un bloc de code tant que la condition spécifiée est vraie */
while ($repeat < 10){
	echo "<p>while repeat: $repeat</p>";
	$repeat++;
};
// DO...WHILE
/* effectue une boucle sur un bloc de code une fois, puis répète la boucle tant que la condition spécifiée est vraie */
do {
  echo "<p>do ... while repeat: $repeat</p>";
  $repeat--;
} while ($repeat >= 5);

// FOR
for ($i = 0; $i < 10 ; $i++){
	echo "<p>message i: $i</p>";
}

		/********************************
		*	  Boucle dans un Tableau	*
		********************************/

$table = ['Thomas', 'Laura', 'Romain'];

// FOR
for ($i = 0; $i < count($table) ; $i++){
	echo "<p>for: $table[$i]</p>";
}

// FOREACH
foreach ($table as $item){
	echo "<p>foreach: $item</p>";
}

foreach ($table as $key => $item){
	echo "<p>foreach: $key = $item</p>";
}

// WHILE
while (current($table)) {
	$value = current($table);
    echo key($table) . "=>" . $value, "<br>";
    next($table);
}
?>
