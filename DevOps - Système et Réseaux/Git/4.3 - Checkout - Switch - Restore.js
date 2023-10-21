
// switcher sur une branche
git switch [nom de la branche]
git checkout [nom de la branche]
/*Lorsque vous changez de branche, Git réinitialise votre répertoire de travail pour qu'il corresponde à au dernier commit sur cette branche (ajoute, supprime et modifie automatiquement les fichiers)*/

// Raccourci pour créer une branche et switcher dessus
git checkout -b [nom de la branche]

// Reset files to certain revisions
git restore 
git checkout -- <path_to_file>

(git checkout = git switch + git restore)