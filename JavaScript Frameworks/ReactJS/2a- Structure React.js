/// Structure REACT

var element = React.createElement("élément HTML", Attributs de l’élément sous forme d’objet JSON, enfant(s));
/* 
- Le premier paramètre est un élément HTML sous forme de chaîne de caractères (p, ul, li, select, option, …).
- Le deuxième paramètre est un ensemble d’attributs HTML sous forme d’objet JSON. Mais cela peut-être null ou {}.
- Le troisième paramètre est un élément enfant (nœud texte, objet React, ...). 
*/

// Affichage … toujours dans la balise <script>
ReactDOM.render(element, elementId);


/// Exemple
var p = React.createElement("p", {id: "id1", className: "red"}, "Hello React");

ReactDOM.render(p, document.getElementById("app"));

/// Structure d’une page HTML-React

<html>
    <head>
        <title>Titre</title>
        <script src="chemin/react.development.js"></script>
        <script src="chemin/react-dom.development.js"></script>
    </head>

    <body>
        <div id="app1"></div>
        <div id="app2"></div>
        <div id="app3"></div>

        <script>
			// code react
			ReactDOM.render(
				// Le code de création de l’élément
				<div>Mon premier élément</div>,
				// Le code d’affichage de l’élément dans la div 
				document.getElementById('app1')
			)
        </script>

    </body>
</html>