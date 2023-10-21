				/****************
				*	  NUMBER	*
				****************/
<?php
// Lien de visualisation: "http://localhost:8081/1.3-Number.php"


		/********************
		*	 Opérateurs 	*
		********************/
echo "<h4>Opérateurs</h4>";
/*

+		Addition
–		Soustraction
*		Multiplication
/		Division
%		Modulo (reste d’une division euclidienne)
**		Exponentielle (puissance d’un nombre par un autre)

*/

$x = 2;
$y = 3;
$z = 4;

echo '$x = ' .$x. '<br> $y = ' .$y. '<br> $z = ' .$z. '<br>';

$a = $x + 1;
$b = $x + $y; 
$c = $x - $y;

echo '<br>$a = $x + 1  =  ' .$a. '<br> $b = $x + $y = ' .$b. '<br> $c = $x - $y = ' .$c. '<br>';

$x = $x * $y; 
echo '<br>$x = $x * $y = ' .$x. '<br> ';

$z = $x / $y;

echo '<br>$z = $x / $y = ' .$z. '<br> ';

$m = 5 % 3;
echo 'Le reste de 5 / 3 = ' .$m. '<br>';

$p = $z ** 4; 
echo '$p  = 2**4 = ' .$p. '<br>';


		/********************
		*	 Conversion 	*
		********************/
echo "<h4>Conversion</h4>";
// + et - peuvent également convertir le type d'une variable vers Integer ou Float(double)

$x = "2";
$y = "3.14";
echo '$x = ' .$x. ' de type ' .gettype($x). '<br>';
echo '$y = ' .$y. ' de type ' .gettype($y). '<br>';

$x = +$x;
$y = -$y;
$z = +"3";
echo '<br>$x = ' .$x. ' de type ' .gettype($x). '<br>';
echo '$y = ' .$y. ' de type ' .gettype($y). '<br>';
echo '$z = ' .$z. ' de type ' .gettype($z). '<br>';


		/********************
		*	 Combination 	*
		********************/
echo "<h4>Combination</h4>";
/*

.=	Concatène puis affecte le résultat à la même variable
+=	Additionne 	"
-=	Soustrait 	"
*=	Multiplie 	"
/=	Divise 	"
%=	Calcule le modulo 	"
**=	Élève à la puissance 	"

*/

$a = 10;
$b = 12.13;
echo '$a = ' .$a. ' et $b = ' .$b. ' et sont de type "' . gettype($a) .'"<br>';
$a .= $b; // $a stocke 1012 et convertis en string
echo '$a .= $b = ' .$a. ' et de type "' . gettype($a) . '"<br>'; // $a = 1012 et de type "string"

$x = 5;
$y = 3;
echo '$x = ' .$x. ' et $y = ' .$y. '<br>';
$x -= $y; //$x stocke désormais 2
echo '$x  -= $y = ' .$x. '<br>';
$y = 3;
$y **= $x; //$y stocke 3^2 = 3 * 3 = 9
echo '$y **= $x = ' .$y;
?>