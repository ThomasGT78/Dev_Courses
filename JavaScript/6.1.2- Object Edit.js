		/****************
		*	Objet Edit	*
		****************/

// Créer un objet
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Muter une valeur 
spaceship.color = 'glorious gold';

// Ajouter une valeur
spaceship.numEngines  = 6;spaceship.color = 'glorious gold';

// Supprimer une valeur
delete spaceship['Secret Mission'];

// Voir l'objet, ses clés et ses valeurs
console.log(spaceship)