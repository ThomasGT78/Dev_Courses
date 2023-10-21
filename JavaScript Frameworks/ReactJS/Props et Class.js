Composition de Component
"https://fr.reactjs.org/docs/react-component.html#gatsby-focus-wrapper"


// STATE

//L’état est un objet JSON constitué de plusieurs paires clés:valeurs.Il est initialisé dans le constructeur.
this.state = { attribut: valeur, ...
//Il est récupéré dans la méthode render().
this.state.attribut;

/// Exemple
this.state = {
	marque: "Ford",
	modele: "Mustang",
	couleur: "rouge",
	annee: 1964
};
render() {
	return (
		<h1>Ma {this.state.marque}</h1>
		<p>C'est une {this.state.modele} {this.state.couleur} de {this.state.annee}.</p>
	);
}

// Mais pour modifier l’état il faut absolument utiliser la méthode setState(). La syntaxe est donc objet.setState({nouvelEtat}).
this.setState({ attribut: valeur });

this.setState({ couleur: "bleue" });

// L’état est récupéré dans la méthode render().
<h1>Ma {this.state.marque}</h1>