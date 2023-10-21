		<!-----------------------
		-	 INCLUDE / REQUIRE 	-
		------------------------>
<?php

// Importer du code d'un autre fichier
include("chemin/nomPage.php");
include_once ("chemin/nomPage.php");
require("chemin/nomPage.php");
require_once ("chemin/nomPage.php");


// Wordpress
get_template_part( 'filePath/fileName' );
/* ne pas noter l'extension à la fin du nom du fichier */