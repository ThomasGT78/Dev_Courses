"https://www.w3schools.com/jsref/dom_obj_event.asp"

/// En HTML:
<element onclick="myScript">

/// En JavaScript:
			/********************************
			*	element.event = function	*
			********************************/
			
// Structure de lgestion d'évènement avec une propriété
element.onclick = function(){myScript};

///Exemples 1:
// fonctions déclarées en ligne, anonymes ou non
var p = document.getElementById("foo");
p.onclick = function() { alert("Evènement de click détecté"); };
p.onclick = () => { alert("Evènement de click détecté"); };

// Appeler une fonction déclaré ailleurs avec son nom 
/* NOTE: showAlert(); ou showAlert(param); NE fonctionne PAS ici. */
p.onclick = showAlert;

function showAlert()
{
  alert("Evènement de click détecté");
}

///Exemples 2:
notification.onclick = function(event) {
  event.preventDefault(); // prevent the browser from focusing the Notification's tab
  window.open('http://www.mozilla.org', '_blank');
}

			/************************
			*	addEventListener()	*
			************************/

addEventListener()		// attache un gestionnaire d'événements à l'élément spécifié
removeEventListener()	// supprime un gestionnaire d'événements qui a été attaché avec la méthode addEventListener ()

/// Structure de la méthode addEventListener ():
element.addEventListener("event", function, [useCapture])
document.addEventListener ()	// attacher un gestionnaire d'événements au document

// Attach an event handler
monElement.addEventListener("click", function() {
	alert("Hello World");
});

monElement.addEventListener("click", showAlert);
function showAlert () {
	alert("Hello World");
}

// Remove the event handler
monElement.removeEventListener("click", function() {
  alert("Hello World");
});

monElement.removeEventListener("click", showAlert);

// INCORRECT: la fonction sera appelée avant même le click
monElement.removeEventListener("click", showAlert());

/// Avec Paramètre
// deux solutions :
	// fonction anonyme qui appelle notre fonction
monElement.addEventListener('click', function() { onClick(param) })

	// utilisation de bind (changement de contexte)
monElement.addEventListener('click', onClick.bind(null, param))

// on ne peut pas passer de paramètre comme ça
monElement.addEventListener('click', onClick(param)) 

