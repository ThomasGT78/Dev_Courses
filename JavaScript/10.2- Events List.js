"https://developer.mozilla.org/en-US/docs/Web/Events"
"https://www.w3schools.com/jsref/dom_obj_event.asp"

		/****************************
		*	Chargement de la Page	*
		****************************/

/// window.onload
/* est déclenché lorsque la page entière se charge, y compris son contenu (images, CSS, scripts, etc.) */
window.onload = init	// ATTENTION: ne pas écrire: init()

/// document.onload
/* est appelé lorsque le DOM est prêt, ce qui peut être avant les images et le chargement d'autres contenus externes */
document.onload = init

/// DOMContentLoaded
/* est déclenché quand le document HTML initiale est complètement chargé et analysé, sans attendre la fin du chargement des feuilles de styles, images et sous-document */
window.addEventListener('DOMContentLoaded', function() {
    console.log( "DOM chargé!" );
});

/// onerror
//Une ressource n'a pas pu se charger.

/// on abort
// Le chargement d'une ressource a été abandonné

		/************************
		*	État du Formulaire	*
		************************/

/// onreset
// Le bouton de réinitialisation est enfoncé

/// onsubmit
// Le bouton de soumission est enfoncé

/// onchange
// Se produit lorsque la valeur d'un élément a été modifiée
/*Pour les boutons radio et les cases à cocher, l'événement onchange se produit lorsque l'état coché a été modifié
Se produit lorsque l'élément perd le focus, après que le contenu a été modifié. */

/// oninput
// Se produit lorsqu'un élément obtient une entrée utilisateur,
/*(que la valeur d'un élément <input> ou <textarea> est modifiée).
Se produit immédiatement après que la valeur d'un élément a changé, tandis que  */

/// onfocus
// se produit lorsqu'un élément obtient le focus

/// onblur
// Un élément a perdu le focus

/// focusin
// Un élément est sur le point de recevoir le focus

/// focusout
// Un élément est sur le point de perdre son focus

		/************************
		*	Action de la Souris	*
		************************/

/// onclick
// Se produit lorsque l'utilisateur clique sur un élément

/// ondblclick
// cliqué deux fois sur un élément

/// onmousedown
// bouton de souris est enfoncé sur un élément

/// onmouseup
// bouton de souris est relâché sur un élément.


/// onmouseover
// la souris est déplacé sur l'élément ou sur l'un de ses enfants

/// onmouseout
// la souris est déplacé hors de l'élément ou de l'un de ses enfants

/// onmousmove
// la souris est déplacé sur un élément (déclenché en continu lorsque la souris se déplace)


/// onscroll ou onwheel
// bouton de roue de souris est tourné dans n'importe quelle direction

/// onselect
// Du texte est sélectionné

		/************************
		*	Action du Clavier	*
		************************/
/// onkeydown
// TOUTE touche est enfoncée

/// onkeypress
// TOUTE touche (sauf Shift, Fnou  CapsLock) est dans une position pressée (tiré en continu).

/// onkeyup
// TOUTE touche est relâchée
