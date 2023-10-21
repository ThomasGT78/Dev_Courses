			/** COMMIT **/

// Ajouter 1 ou plusieurs fichiers dans la zone de transit
git add cheminFichier.xxx
git add cheminFichier.xxx cheminFichier.xxx
git add .		/* tous les fichiers */
git add wp-content\themes\Child-Theme-Divi\.

// Retirer 1 ou plusieurs fichier de la zone de transit
git restore --staged nomFichier.xxx
git restore --staged nomFichier1.xxx nomFichier2.xxx
git restore --staged .	/* tous les fichiers */

git rm --cached [fichier]
git rm --cached -r .	//Vide toute la zone de transit

// Valider le dépôt dans le «local repository»
git commit --message="Message de description"
git commit -m "Message de de description"

git commit --all -m "message"

// Corriger le message du dernier commit
git commit --amend -m "message"

// modifier votre dernier message de validation
git commit --amend

/// Modifier un ancien commit
// Se placer sur l'indice voulu avec « rebase » 
git rebase -i HEAD~3
// Effectuer la modification
git commit --amend