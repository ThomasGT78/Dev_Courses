		/**  CONDITIONS  **/

/// IF / ELSE
String args = "Hi!"

if (args.length==1) {
	sayHelloTo(args[0]);
} else if (args.length==2) {
	sayHelloTo(args[0] + "-" + args[1]);
} else if (args.length==3) {
	sayHelloTo(args[0] + "-" + args[1] + "-" + args[2]);
} else {
	sayHelloTo("world");
}

/// SWITCH
switch(args.length) {
	case 0: // aucun argument n'a été envoyé
		sayHelloTo("world");
		break;
	case 1: // l'utilisateur a fourni un argument dans le terminal
		sayHelloTo(args[0]);
		break;
	case 2: // l'utilisateur a fourni 2 arguments
		sayHelloTo(args[0] + "-" + args[1]);
		break;
	default: // l'utilisateur a fourni plus d'arguments qu'on peut en gérer !
		System.out.println("Sorry, I don't know how to manage more than 2 names!");
}


/// OPÉRATEURS
== 	égal à (exactement le même)
!=	non égal à (différent)
< 	inférieur à
<=	inférieur ou égal à
>	supérieur à
>=	supérieur ou égal à

&&	ET
||	OU
!	NON