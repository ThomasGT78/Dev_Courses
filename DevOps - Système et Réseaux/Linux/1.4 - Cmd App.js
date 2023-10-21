// sudo
Permet d’obtenir les droits d’administration pour effectuer une tâche qui les nécessite ; par exemple, installer un nouveau logiciel via les packages.

/// apt VS apt-get
"https://aws.amazon.com/fr/compare/the-difference-between-apt-and-apt-get/"
/* 
Les tâches les plus courantes dans apt et apt-get sont d'installer, de mettre à jour et de supprimer des packages logiciels. Les packages logiciels peuvent être des applications, des bibliothèques, des utilitaires et des outils.

Différences:
- apt est une version plus récente d'apt-get
- apt est une alternative plus conviviale à apt-get ( combine les fonctionnalités de plusieurs outils de gestion de packages pour le confort de l'utilisateur) 
*/

		/**  LANCER UNE APPLICATION  **/
		
// Dans le Terminal, écrire:
[AppName]


		/**  LISTE DES APPLICATIONS  **/
		
// apt list [package_name]
List the packages existing with this name
// sudo apt show [package_name]
Provides detailed information on a package
// sudo apt-cache search [package_name]
Cherche dans la bibliothèque des packages dispo à la distribution


// dpkg -l
// dpkg -l [package_name]
// apt list --installed
Liste toutes les packages installées

// compgen -c
// compgen -c [package_name]
Liste tous les éxecutable dans $PATH


// apt list --upgradable
List all packages that have a more recent version, providing information about the upgrade. 

		/**  MISE À JOUR  **/
		
// sudo apt update
// sudo apt-get update
Cherche les dernières versions des logiciel installés, dispo sur les serveurs

// sudo apt-get update [package_name]
Cherche la dernière version d'un logiciel installé

// apt list --upgradable
/* 
List all packages that have a more recent version, providing information about the upgrade. 
*/

// sudo apt upgrade
// sudo apt-get upgrade
propose l'installation des nouvelles versions diponibles des logiciels installés
/* 
« apt upgrade »  removes old versions of installed or upgradeable packages on the system that are no longer needed when upgrading (better for freeing up system memory).
« apt-get upgrade »  does not. 
*/

// sudo apt upgrade [package_name]
// sudo apt-get upgrade [package_name]
Met à jour le logiciel indiqué


		/**  INSTALLATION  **/
		
// sudo apt-cache search [package_name]
Cherche dans la bibliothèque des logiciel dispo à la distribution

// sudo apt show [package_name]
Provides detailed information on a package

// sudo apt install [package_name]
// sudo apt-get install [package_name]
Install l'app
/// OU
// sudo dpkg -i [package_name.ext]
Install l'app depuis un dossier du pc
=> cd [folder_name]	(exemple: cd Téléchargement)
=> sudo dpkg -i code_1.82.0.dev

// [package_name]
Lance le logiciel (le terminal est en utilisation)
« ctrl + C »  pour fermer l'app et rendre le terminal dispo à nouveau)

		/**  DÉSINSTALLATION  **/

// sudo apt remove [package_name]
// sudo apt-get remove [package_name]
Désinstall l'app (le paquet)
(Conserve les fichiers de configuration associés au paquet)


// sudo apt purge [package_name]
// sudo apt-get purge [package_name]
Désinstall le logiciel 
+ supprime les fichiers de configuration de l'app


// sudo apt autoremove
// sudo apt-get autoremove
Supprime automatiquement les paquets qui ont été installés en tant que dépendances, mais qui ne sont plus nécessaires à aucun autre paquet installé sur le système. Cela permet de libérer de l'espace disque en supprimant les paquets inutilisés.
