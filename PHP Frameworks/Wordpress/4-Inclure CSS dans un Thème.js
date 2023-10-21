		/************************************
		*	Inclure du CSS dans un Thème	*
		************************************/
		
=> Créer fichier « style.css » dans le dossier du Thème
	=> Ecrire le code de commentaire suivant
/*
Theme Name: Nom du Thème
*/
	=> Il apparait maintenant dans le tableau de bord Wordpress dans: Apparence => Thèmes 
	
=> Créer un fichier « index.php » dans le dossier du Thème (sibling de style.php)

=> Créer un fichier « functions.php » dans le dossier du Thème (sibling de index.php)

=> Écrir la fonction suivante:
// hook pour l'exécution de la fonction
add_action('wp_enqueue_scripts', function (){
    // L'uri du thème sur lequel on se trouve
    $uri = get_theme_file_uri();

    // Ajout d'une feuille de style
    wp_enqueue_style(
        "default-styles", 
        "$uri/style.css", 
        "bootstrap-css");  // Tableau des dépendances, charge bootstrap-css avant default-style

    // Ajout des scripts Bootstrap
    wp_enqueue_style("bootstrap-css", "$uri/ressources/bootstrap/bootstrap.min.css");
    wp_enqueue_script(
        "bootstrap-js", 
        "$uri/ressources/bootstrap/bootstrap.min.js",
        ["jquery"]  // Tableau des dépendances, charge jquery avant bootstrap-js
    );
}
);