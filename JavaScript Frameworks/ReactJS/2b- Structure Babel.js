/// Structure BABEL

//Le chargement distant de la bibliothèque Babel
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
//Le chargement local de la bibliothèque Babel
<script src="../libs/babel.min.js"></script>

//Le code est dans une balise script « modifiée »
<script type="text/babel">

Un composant peut être créé avec :
    • une variable,
    • une fonction,
    • une classe.
	
// Le code JSX « JavaScript-HTML » n’est pas délimité par des quotes droites !
//Le composant est stocké dans une variable.
var variableComposant = <balise>Texte</balise>;


// Le code JavaScript à l’intérieur du code JSX doit être entre accolades.
// Ce peut être aussi bien une variable que l’appel d’une fonction paramétrée ou pas.
var variable = "valeur";

var variableComposant = <balise>Texte, {variable}</balise>;

var variableComposant = <balise>Texte, {fonction()}</balise>;

// Affichage du composant créé avec une variable

ReactDOM.render(variable composant, document.getElementById("div"));