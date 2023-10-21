		/****************************
		*	Installation Symfony	*
		****************************/

// Télécharger et installer le fichier setup.exe
"https://symfony.com/download"

// Info sur Symfony
=> taper la commande dans un terminal
symfony --help


/// Créer un projet appelé «sf-start»
=> se positionner dans le dossier où installer le projet avec le terminal:
cd C:\Thomas Dev\Projet_Symfony

=> Créer le projet:
symfony new nomDossier
symfony new --full nomDossier /* */
=> se positionner dans le projet
cd sf-start

/// Autoriser les Plugins et permettre l'auto-complétion
File => Settings => Languages & Frameworks
=> Php => Symfony => cocher: 
"enable Plugin for this Project (change need restart)"
=> OK

/// Démarrer le server
symfony server:start
// ou
symfony serve -d
// ou
/* Pour choisir le Port de connexion */
symfony serve -d --port=8081



/// Commit Git
=> click sur commit en haut à droite de phpStorm


/// Ajouter un Controller
=> click droit sur le dossier Controller
=> New => PHP Class

