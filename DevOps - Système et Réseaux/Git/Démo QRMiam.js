/// 1- Créer un commit sur le dossier
git init /* cela crée un fichier caché .git */

// Ajouter les fichiers dans la zone de transit
git add wp-content\themes\Child-Theme-Divi\.

// Valider le dépôt dans le «local repository»
git commit -m "1ère sauvegarde de mon code"

// Définir un dépôt distant
git remote add origin https://github.com/ThomasGT78/test.git


/// 3- Ajouter les modifications sur le dépôt distant
git push [nomDepotLocal] [brancheCibleDuDepotDistant]
// Exemple
git push origin master