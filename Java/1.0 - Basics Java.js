		/**  BASIC JAVA  **/

/// VARIABLE
// Integer
byte serviceFee = 20;	/* 8 bits : 127 => -128 */
short	/* 16 bits : 32 767 => -32 768 */
char	/* 16 bits : 65 535 => 0 */
int		/* 32 bits : 2 147 483 647 => -2 147 483 648 */
long	/* 64 bits : 9 223 372 036 854 775 807 
			=> -9 223 372 036 854 775 808 */
`Ne stock que des nombres entiers`

// Float
float price = 499.99;	/* 32 bits */
double width = 1876.797976;		/* 64 bits */
`« double » est communément utilisé car stock 2 fois plus d'information que « float » `

// String
String hello = "Hello World !";
`Ne stock que des chaînes de charctères`

// Boolean
`« true »  or « false » (1 ou 0 => 1 bits)`
boolean isHigher = false
!isHigher	/* Return : true */

/// CONSTANT
`Permettent aux programmes d'être plus rapides. L'ordinateur sait combien d'espace une constante prend`

final int INCOME = 2500;
final double TVA = 19.5;
final String NAME = "Thomas";

/// OPÉRATEURS D'AFFECTATION
+=  addition
-=  soustraction
*=  multiplication
/=  division.