"https://git-scm.com/docs/git-rev-list"

// Créer un dossier de Projet et l’ouvrir dans VSC
// Ouvrir le terminal ou commande Windows
git init
(=> cela crée un fichier caché .git)


// voir les infos git (permet aussi de voir si un .git existe)
git status

// voir les commit effectué
git log

// quitter la navigation
q	OU	ctrl + c

// Naviguer sur les versions du projet dans l'historique
git checkout 4e1b9637427c686274c511f0b44b915b4f4651a3
git checkout master	// revient sur la dernière version