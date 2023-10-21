		<!-------------------------------
		-	  FONCTIONS de TABLEAU		-
		-------------------------------->
<?php
// "http://localhost:8081/4.2-Array_Fonctions.php"


		/************************
		*	 Tableau Ordinal	*
		************************/

# explode()
explode(string $separator, string $string, int $limit = PHP_INT_MAX): array

$pizza  = "piece1 piece2 piece3 piece4 piece5 piece6";
$pieces = explode(" ", $pizza);

# str_split()
/* Convert a string to an array */
str_split(string $string, int $length = 1): array

$arr1 = str_split($str);
$arr2 = str_split($str, 3);

# preg_split()
/* Split string by a regular expression */
preg_split(
    string $pattern,
    string $subject,
    int $limit = -1,
    int $flags = 0
): array|false

$date = "1970-01-01 00:00:00";
$pattern = "/[-\s:]/";
$components = preg_split($pattern, $date);

		/************************
		*	Tableau Associatif	*
		************************/
		




?>
