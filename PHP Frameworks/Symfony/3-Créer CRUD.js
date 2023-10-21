/// Créer CRUD sur une Classe
php bin/console make:crud
=> crée:
	=> formulaire > ClassType.php
	=> controller > ClassController.php
	=> views > templates > nomClass > crud.html.twig

//Modifier la mise en forme des Views:
=>ajouter lien css et js de Bootstrap dans base.html.twig
=>config/packages/twig.yaml
/* Ajouter la ligne: */
form_themes: ['bootstrap_4_layout.html.twig']


