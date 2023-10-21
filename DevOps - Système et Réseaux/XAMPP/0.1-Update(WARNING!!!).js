/**  UPDATE XAMPP - ATTENTION !!!  **/
"https://wpmudev.com/blog/upgrading-xampp/"

// Avant de mettre à jour XAMPP il faut SAUVEGARDER quelques données importantes qui seront écrasées lors de l'installation de la nouvelle version !!!!!

=> Ouvrir le disque local C: 
=> Copier le dossier « xampp » 
=> Coller autre part

=> Vider le fichier « xampp » dans le disque C (supprimer tout son contenu)
=> Lancer l'installation de la nouvelle version de XAMPP

=> Reccupérer ses données situées dans 2 fichiers:
// MySQL 
/* permet de réccupérer ses base de données */

// htdocs
/* Vous y trouverez votre propre dossier défini par l'utilisateur pour stocker les données 
Créer un dossier dans « htdocs » (par exemple dossier1) où mettre les fichiers.
http://localhost/dossier1 pour avoir accès aux fichiers.
*/

// php/php.ini
/* Replace the php.ini file with your backup folder php.ini file in case you have changed the default settings earlier. */