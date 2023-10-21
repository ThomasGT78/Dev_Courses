<?php

# Récupèrer le nom du fichier initial d'où est lancé le code
echo $_SERVER['PHP_SELF'].'<br>';
/*  output: \file_name.php  */

echo basename($_SERVER['PHP_SELF'], '.php');
/*  output: file_name  */


# Réccupérer le path du fichier où le code est écrit
echo __FILE__ . '<br>';

# Réccupérer le nom du fichier où le code est écrit
echo basename(__FILE__, '.php');