		/****************************
		*	Ajouter des Recettes	*
		****************************/
		
// liste de Recettes	
"https://flex.symfony.com/"

=> Tapper la commande:
composer require nomRecette
Ex:
composer require annotations
composer require twig
/* plusieurs à la fois */
composer require debug maker doctrine migrations annotation twig orm-fixtures form validator security-csrf

// Outils de debuggage à installer
composer req debug
composer req --dev debug

/* Fonctionne comme consol.log() */
dump($elementToAnalize); 

// Afficher la liste des Routes + liste des controllers
php bin/console debug:router --show-controllers

// stocker le résultat dans un fichier
php bin/console debug:router --show-controllers > debug.txt

php bin/console make:user