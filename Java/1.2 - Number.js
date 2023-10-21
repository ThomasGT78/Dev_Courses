		/**  NUMBER  **/

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

/// INT with FLOAT
int a = 5;
int b = 2;
float c = 2;

// Pas Compatible
`2 « int » ne peuvent pas donner un « float »`
int r = a/b;	/* 2 */
float r = a/b;	/* 2.0 */

// Compatbile
`Un « int » et un « float » peuvent donner un « float » `
float r = a/c;	/* 2.5 */

`cast: modifier le type d'une des variable directement`
float r = (float) a/b;	/* 2.5 */