<?php

// --- VillesSelect.php
header("Content-Type: text/html; charset=UTF-8");

try {
    // Connexion
    $connexion = new PDO("mysql:host=mysql-m2icdi.alwaysdata.net;port=3306;dbname=m2icdi_cours;", "m2icdi", "mdp12345");
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $connexion->exec("SET NAMES 'UTF8'");

    // Préparation et exécution du SELECT SQL
    $lsSelect = "SELECT * FROM villes";
    $curseur = $connexion->query($lsSelect);
    $curseur->setFetchMode(PDO::FETCH_NUM);

    $lsContenu = "";

    // On boucle sur les lignes en récupérant le contenu des colonnes 1 et 2
    foreach ($curseur as $enregistrement) {
        // Récupération des valeurs par concaténation et interpolation
        $lsContenu .= "$enregistrement[0]-$enregistrement[1]<br>";
    }
    // Fermeture du curseur (facultatif)
    $curseur->closeCursor();
}
// Gestion des erreurs
catch (PDOException $e) {
    $lsContenu = "Echec de l'exécution : " . $e->getMessage();
}

// Déconnexion (facultative)
$connexion = null;

// Affichage du contenu
echo $lsContenu;
?>

