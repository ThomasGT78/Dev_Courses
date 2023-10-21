		/** STAGING **/

"https://www.sebastien-gandossi.fr/blog/difference-entre-git-reset-et-git-rm-cached"

"https://www.atlassian.com/git/tutorials/undoing-changes/git-reset"


/** git reset **/
/*
votre projet sera réinitialisé dans l'état du commit sélectionné, et tous les commits postérieurs seront purement et simplement supprimés de l'arbre
*/

// Placer HEAD sur un commit par hash key
git reset --hard 984d4f4d0ab67a9c7d0766a71

// Revenir 1 ou plusieurs commits (indice) avant HEAD
git reset --hard HEAD~2

// Revenir à l'indice du commits (indice) après HEAD */
git reset --hard 04d27ae // hash in « reflog » 


/** git revert **/
/*
Va créer un nouveau commit contenant l'inverse de toutes les modifications effectuées jusqu'alors
*/
git revert [hash_key]


/** git checkout **/
/* Naviguer sur les versions du projet dans l'historique */
git checkout 4e1b9637427c686274c511f0b44b915b4f4651a3
git checkout master	// revient sur la dernière version

