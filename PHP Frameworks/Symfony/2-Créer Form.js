/// Class de Formulaire
// Liste des références du Form
"https://symfony.com/doc/current/reference/forms/types.html"

// Installer la Bibliothèque
composer require form

// Créer une Class Form
php bin/console make:form

//Modifier la mise en forme du Form dans:
=>config/packages/twig.yaml
/* Ajouter la ligne: */
form_themes: ['bootstrap_4_layout.html.twig']

// Modifier «function buildForm» du fichier «ClassnameType»