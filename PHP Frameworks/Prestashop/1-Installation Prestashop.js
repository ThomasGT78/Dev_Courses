		/****************************
		*	INSTALLER PRESTASHOP	*
		****************************/

// Télécharger PRESTASHOP
"https://www.prestashop.com/fr/telecharger"

// Installer
Décompresser le fichier "prestashop_1.7.7.2.zip" dans le dossier de projet


// activer l'extention Intl ( en cas d'erreur)
aller dans:
"C:\xampp\php" 
=> ouvrir « php.ini»
=> rechercher "intl"
=> enlever le « ; » devant « ;extension=intl »
=> enregistrer

=> arrêter et relancer la connexion au serveur si rien ne se passe

// Créer sa BD avec Wokbench ou phpMyAdmin
=> nouvelle BD « formation_prestashop »

// Configurer son projet
=> Nom et infos sur le projet
=> Configurer la BD à utiliser dans Prestashop