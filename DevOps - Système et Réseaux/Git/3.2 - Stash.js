
// créer un stash
git stash

// Lister tous les Stash
git stash list

// Appliquer un stash (récupérer les modifs mises de côté)
git stash apply // prend le dernier stash
git stash apply stash@{numéro}

// supprimer un stash
git stash drop stash@{numéro}
git stash pop	// supprime le dernier