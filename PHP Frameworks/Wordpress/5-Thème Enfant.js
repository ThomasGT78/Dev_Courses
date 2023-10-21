		/****************************
		*	Créer un Child Theme	*
		****************************/

// Liens d'information
"https://wpformation.com/theme-enfant-wordpress/"
"https://kinsta.com/blog/wordpress-child-theme/#create"


/// Créer un dossier pour votre thème enfant dans /wp-content/themes

/// Créer 2 fichiers dans le dossier du theme enfant:
functions.php 
style.php

// Écrire le code dans functions.php 
<?php
/*
* activation theme
*/
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
 wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

}
?>

// Écrire le code dans style.php
/*
Theme Name: My Theme's name
Description: Theme enfant de tel theme
Template: Theme Parent 
*/

// Theme Name : 
Le nom que je veux donner a mon thème enfant
// Description : 
La description de mon thème enfant celle qui apparaîtra dans mon gestionnaire de thème WordPress
// Template : 
Le nom du thème parent en l’occurrence le nom du répertoire tel qu’il est écrit sur le FTP


// Détails:
Ne jamais mettre d’espace avant les deux points. 
«Theme Name:» fonctionnera mais «Theme Name :» ne fonctionnera pas

Pour l’attribut Template: Si votre thème dans l’admin se nomme par exemple “wpserveur” mais que le nom affiché dans le répertoire FTP est “WPserveur” alors il faudra obligatoirement respecter la casse et écrire WPserveur et non wpserveur

Pour le reste, vous pouvez ne rien mettre, cela fonctionnera quand même !