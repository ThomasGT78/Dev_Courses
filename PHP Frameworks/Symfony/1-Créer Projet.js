/// Créer un projet appelé «sf-start»
=> se positionner dans le dossier où installer le projet avec le terminal:
cd C:\Thomas Dev\Projet_Symfony

=> Créer le projet:
symfony new nomDossier
symfony new --full nomDossier /* */
=> se positionner dans le projet
cd sf-start

/// Paramétrer la Base de Données
=>  ouvrir fichier .env
=> Copier la ligne correspondant à la BD utilisé (mySQL) et modifier les données
DATABASE_URL="mysql://root:@127.0.0.1:3306/formation_symfony?serverVersion=mariadb-10.5.8"

// Créer la base de données (if new)
php bin/console doctrine:database:create


/// Créer/Modifier une Class => table
php bin/console make:entity
=> Crée 2 fichiers:
« ClassName.php » dans « src/Entity »
et 
« ClassNameRepository.php » dans « src/Repository »

php bin/console make:entity --regenerate
=> pour mettre à jour les méthodes Setter et Getter

// Créer le code de création de table
php bin/console make:migration
=> Crée un fichier « VersionDateTime.php » dans le dossier « migration »

// Execution de la commande SQL créée (Création de la table)
php bin/console doctrine:migrations:migrate