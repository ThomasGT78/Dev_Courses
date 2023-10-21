		/** SUPPRIMER DES COMMIT **/
"https://code-garage.fr/blog/annuler-un-ou-plusieurs-commit-facilement-avec-git-reset-vs-revert/"
"https://www.freecodecamp.org/french/news/git-revert-commit-comment-defaire-le-dernier-commit/"
"https://devconnected.com/how-to-git-reset-to-head/"


	/**  EXEMPLE  **/
// Se placer sur la branche à modifer
git switch [branch_name]

git reset --hard 984d4f4d0ab67a9c7d0766a71ec26de06121a289

git push origin [branch_name] --force


	/** CIBLER LE COMMIT DÉSIRÉ **/
git log
/* Le hash est présent à côté du mot-clé "commit" */

git log --oneline
/* print a single commit in a single line as output */

git reflog
/* Use the short hash or « HEAD@{index} » */

	/** GIT RESET **/
/*
votre projet sera réinitialisé dans l'état du commit sélectionné, et tous les commits postérieurs seront purement et simplement supprimés de l'arbre
*/

// Placer HEAD sur un commit par hash key
git reset --hard 984d4f4d0ab67a9c7d0766a71


// Revenir a HEAD (le dernier commit fait)
git reset HEAD

// Revenir 1 commits (indice) avant HEAD
git reset HEAD~ 
git reset HEAD~1 // 1 indice avant
git reset HEAD^

// Revenir plusieurs commits (indice) avant HEAD
git reset HEAD~2

// Revenir à l'indice du commits (indice) après HEAD */
git reset --hard 04d27ae // short hash in « reflog » 
git reset HEAD@{1}
git reset --hard HEAD@{3}

// Ne pas perdre les modifications non validées
git reset --soft HEAD~1

// Revenir au commit précédent et également supprimer toutes les modifications non organisées
git reset --hard HEAD~1


/** FORCE PUSH TO GITHUB (pour supprimer les indices au-dessus) **/
/* Si vous aviez déjà poussé votre commit en remote, votre version locale va alors se retrouver en retard par rapport à la version distante */
git push origin [branch_name] --force
// OR
git push origin [branch_name] --force-with-lease
/* Using --force-with-lease instead of --force will raise an error if others have meanwhile committed to the remote branch, in which case you should fetch first */

// revenir au code enregistré dans master
git reset --hard origin/master
/* peut être utilisé pour mettre en scène ou non des modifications. Il supprime toutes les modifications apportées à la branche locale actuelle, la rendant identique à l'origine/maître, et réinitialise le pointeur HEAD 
Ne fonctionne que comme un effacement complet si vous êtes dans une branche locale . Si vous êtes plutôt dans la branche master et si vous avez apporté des modifications, vous ne pouvez supprimer que tous les fichiers que vous avez créés ou modifiés. Vous ne pouvez pas supprimer les dossiers que vous avez ajoutés.
*/


/** ERROR **/
git reset HEAD@{2} // Error unknown switch `e

/*In PowerShell, unlike in cmd.exe, @ and { / } are metacharacters that either */

// require individual escaping with ` (the so-called backtick) 
# git reset HEAD`@`{2`}

//OR enclosing the entire argument in quotes:
# git reset 'HEAD@{2}' 