		<!---------------------------
		-	 Conditions - SWITCH	-
		---------------------------->
<?php
// "http://localhost:8081/2.2-Condition-switch.php"

$age = 27;

// Switch =
echo "<br> Switch 1: <br>";

switch ($age){
	case 12:
		echo "salut gamin!";
		break;
	case 18:
		echo "salut jeune homme!";
		break;
	case 26:
		echo "Tu as l'âge parfait!";
		break;
	case 30:
		echo "salut vielle branche!";
		break;
};

// Switch Lesser or Greater
echo "<br> Switch 2: <br>";

switch (true){
	case ($age <= 12):
		echo "salut gamin!";
		break;
	case ($age <= 18):
		echo "salut jeune homme!";
		break;
	case ($age == 26):
		echo "Tu as l'âge parfait!";
		break;
	case ($age >= 27):	// ou	default:
		echo "salut vielle branche!";
		break;
};

// Autre exemple
function capital(string $arg1){
    switch ($arg1){
        case "France":
            return "Paris";
            break;
        case "Allemagne":
            return "Berlin";
            break;
        case "Italie":
            return "Rome";
            break;
        default:
            return "Inconnu";
            break;
    }
}

echo capital("Allemagne");
?>