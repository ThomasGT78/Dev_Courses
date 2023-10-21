/* Liens de mes projets: (Repository path) */
"https://github.com/ThomasGT78/convertisseur_fichier_bdd.git"
"https://github.com/ThomasGT78/Dev_Courses.git"
"https://github.com/ThomasGT78/formation-git.git"
"https://github.com/ThomasGT78/MyMiniApps.git"
"https://github.com/ThomasGT78/QRMiam.git"
"https://github.com/ThomasGT78/Modify_Directory_Name.git"

	/********************************************
	*	Exporter un dossier/projet sur GitHub	*
	********************************************/

/// 1- Créer un commit sur le dossier
//Dans un terminal, se placer dans le dossier
git init /* cela crée un fichier caché .git */

/// 2- Create branch « main » on local
git checkout -b main 
`Create and switch on the new branch`

/// 3- FETCH Changes from remote repository
git fetch origin
`Fetch the latest changes from the remote repository, like the files created with the Repository`

/// 4- REBASE Your Local Changes
git rebase origin/main
`Rebase your local branch onto the updated remote "main" branch. This integrates your changes on top of the remote changes`

/// 5- ADD files from « Working Repository » 
// ADD files in the « Staging area » 
git add .

// COMMIT into the « Local Repository »
git commit -m "First Commit"

/// 2- Define « Remote Repository » 
git remote add [nomDepotLocal] [adresseDepotGitHub]
// Exemple
git remote add origin https://github.com/ThomasGT78/test.git
git remote add origin "https://github.com/ThomasGT78/name with space.git"

/// 5- PUSH files on « Remote Repository » 
git push [nomDepotLocal] [brancheCibleDuDepotDistant]
// Exemple
git push origin main



		/** Indications GitHub	**/
		
/* Pour connecter un dossier local à un repository gitHub */

/// Create a new local repository on the command line
echo "# MyMiniApps" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin [cheminDuRepositeryGitHub]
git push -u origin main

//OU

/// Push an existing local repository from the command line
/* Crée le dossier du projet via le bureau puis PUSH les projet dans GitHub */
git remote add origin [cheminDuRepositeryGitHub]
git branch -M main // pour créer une branch "main" (facultatif)
git push -u origin master	// main si la branch a été créé