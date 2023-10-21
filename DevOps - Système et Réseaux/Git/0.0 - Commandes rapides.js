
			/** ADD/COMMIT/PUSH **/

// Aller dans le dossier où le git init est créé
cd C:\Users\thoma\Documents\Développeur

// Ajouter 1 ou plusieurs fichiers dans la zone de transit
git add .
// or
git add wp-content\themes\Child-Theme-Divi\.
git add MongoDB\.
git add "DevOps - Système et Réseaux\."


// Valider le dépôt dans le «local repository»
git commit -m ""

// Envoyer sur github
git push origin branch


			/** BRANCH **/

// commit dans la branch
git checkout branch_name
"Écrir  son code"
git add .
git commit -m "message"
git push origin branch_name

// merge dans master
`Be on branch dev`
git checkout master
git merge branch
git push origin master


	/**  SUPPRIMER UN COMMIT  **/

git switch [branch_name]
git reset --hard [hash_key]
git push origin [branch_name] --force
