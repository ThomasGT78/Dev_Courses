https://getcomposer.org/download/

=> Download and run Composer-Setup.exe

// vérifier l'installation de composer
composer --version
=>"Composer version 2.0.11 2021-02-24 14:57:23"

// on se déplace dans le dossier app
cd share/app

composer init

=>
"
Package name (<vendor>/<name>) [thomas/app]: 
thomas/projet-slim

Description []: 
1er projet slim

Author [thomas <thomas.garot@gmail.com>, n to skip]: 

Minimum Stability []: 

Package Type (e.g. library, project, metapackage, composer-plugin) []: 
project

License []:
"


// Bibliothèque de Composer
https://packagist.org/?query=slim

composer require slim/slim
composer require slim/psr7
composer require php-di/slim-bridge
composer require slim/twig-view

/// Ajoute un namespace
// dans fichier composer.json:
"autoload": {
        "psr-4": {
            "ProjetSlim\\Controllers\\": "src/controllers"
        }
    }

// dans terminal: pour mettre à jour le fichiser composer.json après modif
composer dump-autoload
