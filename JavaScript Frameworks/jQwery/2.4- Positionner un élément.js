		/************
		*	.css()	*
		************/

/// Récupère la position
$('p').css({ top });

/// modifie la position
$('p').css({
    top : '200px', 
    // bottom : '10px', //
    left : '30px', 
	right: '30px'
});

		/****************************
		*	.position() / .offset()	*
		****************************/

/// Récupère la position
$('p').offset().left; // retourne la valeur "left" de l'élément (position absolue)

$('p').position().top; // retourne la valeur "top" de l'élément (position relative)


/// modifie la position
$('p').offset({
    left : 30,
    top : 200
});

$('p').position({
    left : 200
});
