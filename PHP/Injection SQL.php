<?php
mysql_real_escape_string()


	
$password = filter_input(INPUT_POST,"password", FILTER_DEFAULT);
$hash = password_hash($password, PASSWORD_BCRYPT);

?>