console.log(document.body.childNodes[5].childNodes[1]);

		/****************
		*	PAR BALISE	*	getElementsByTagName
		****************/

var titresElts = document.getElementsByTagName("h2");   // Tous les titres h2
console.log(titresElts[0]);                 // Affiche le premier titre h2
console.log(titresElts.length);              // Affiche 3 (le nombre d'éléments <h2> de la liste)

		/****************
		*	PAR CLASSE	*	getElementsByClassName
		****************/
// Tous les éléments ayant la classe "merveilles"
var merveillesElts = document.getElementsByClassName("merveilles");
for (var i = 0; i < merveillesElts.length; i++) {
    console.log(merveillesElts[i]);
}

		/************
		*	PAR ID	*	getElementById
		************/

console.log(document.getElementById("nouvelles"));      // Elément portant l'identifiant "nouvelles"

		/********************
		*	sélecteur CSS	*	querySelectorAll
        ********************/
        
// Tous les paragraphes
console.log(document.querySelectorAll("p").length); // Affiche 3

// Tous les paragraphes à l'intérieur de l'élément identifié par "contenu"
console.log(document.querySelectorAll("#contenu p").length); // Affiche 2

// Tous les éléments ayant la classe "existe"
console.log(document.querySelectorAll(".existe").length); // Affiche 8

// Tous les éléments fils de l'élément identifié par "antiques" ayant la classe "existe"
console.log(document.querySelectorAll("#antiques > .existe").length); // Affiche 1

		/********************
		*	sélecteur CSS	*	querySelector
		********************/

// Le premier paragraphe
console.log(document.querySelector("p"));

		/********************
		*	Le contenu HTML	*	innerHTML
		********************/

// Le contenu HTML de l'élément identifié par "nouvelles"
console.log(document.getElementById("nouvelles").innerHTML);

// Le Texte de l'élément identifié par "nouvelles" (pas les balises)
console.log(document.getElementById("nouvelles").textContent);


console.log(document.getElementById("contenu").innerHTML);