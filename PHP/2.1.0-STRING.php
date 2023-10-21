				/****************
				*	  STRING	*
				****************/
<?php
// Lien de visualisation: "http://localhost:8081/1.2-String.php"

// Single Quotes
$herName = 'Laura';
$apostrophe = 'Attenion à échapper l\'apostrophe';

// Double Quotes
$myName = "Thomas";
$myAge = "35";
$noEchap = "Pas besoin d'échapper l'apostrophe";

// back quotes don't work like in JavaScript 

		/********************
		*	Concaténations	*
		********************/

echo '<h3>
		Concaténations :
	</h3>';
// quote simple (attention aux appostrophes)
echo '<h4>Concaténation quote simple:</h4>';
echo 'Je m\'appelle ' . $myName . ' et j\'ai ' . $myAge . ' ans.';

// quote double 
echo "<h4>Concaténation quote double:</h4>";
echo "Je m'appelle $myName et j'ai $myAge ans.<br>";
echo "Je suis " . $myName . " et j'ai " . $myAge . " ans" . "<br>";

//ou avec { }
echo "<br><br>ou avec { } si la variable touche le texte:<br>";
echo "Nous sommes {$myName}/{$herName} et nous avons {$myAge}ans.<br>";

// Combinaison	.=
$a = "Bonjour";
$a .= " le monde"; //$a stocke "Bonjour le monde"
echo '<br>$a = ' . $a . '<br>';


	/****************************************
	*	Afficher les charactères spéciaux 	*
	*	  ou convertir les entités HTML		*
	****************************************/

echo '<h3>
		Afficher les charactères spéciaux ou convertir les entités HTML :
	</h3>';
// htmlentities(string,flags,character-set,double_encode)
// htmlspecialchars(string,flags,character-set,double_encode)
/* 
htmlentities() change tous les caractères qui ont des équivalents en entités HTML. 
htmlspecialchars() change uniquement les caractères & " ' < et > en entités HTML 
*/

$str = '<a href="https://www.https://www.w3schools.com/spaces/">Create a Free Website with w3schools</a>';
echo $str.'<br>';
echo "<h4>htmlentities(): change tous les caractères qui ont des équivalents en entités HTML</h4>".htmlentities($str).'<br>';
echo "<h4>htmlspecialchars(): change uniquement les caractères". htmlspecialchars(" & \" ' < et > ")."en entités HTML</h4>".htmlspecialchars($str).'<br>';

// ou écrire directement le code HTML à la place des charactères spéciaux
"http://lorem-ipsum.studiovitamine.com/caracteres-speciaux,287,fr.html";
"https://www.leptidigital.fr/productivite/caracteres-speciaux-html-2-19297/";
"https://www.toutimages.com/codes_caracteres.htm";
/* pour écrire: 
"This is some <b>bold</b> text." 
*/
echo "This is some &lt;b&gt;bold&lt;/b&gt; text.<br>";


// html_entity_decode
// htmlspecialchars_decode()
/*
Converts HTML entities to characters
*/echo "<h4>A l'inverse, pour décoder les les code HTML, on utilise: html_entity_decode() ou htmlspecialchars_decode()</h4>";

$strDecode = '&lt;a href=&quot;https://www.w3schools.com&quot;&gt;w3schools.com&lt;/a&gt;';
$strDecode = '&lt;p&gt;&lt;a href=&quot;http://lorem-ipsum.studiovitamine.com/caracteres-speciaux,287,fr.html"/&gtListe des Caractères Spéciaux&lt;p/&gt;';
echo 	"<p>".html_entity_decode($strDecode)."</p>
		<p>".htmlspecialchars_decode($strDecode)."</p>";
// is like
$str ='<p><a href="http://lorem-ipsum.studiovitamine.com/caracteres-speciaux,287,fr.html">Liste des Caractères Spéciaux</a></p>';
echo $str;


// Replace string
$bodytag = str_replace("%body%", "black", "<body text='%body%'>");
echo '<br>'.$bodytag.'<br>';

// Check the first caracteres from a string
$url = 'https://qrmiam.fr/';
$string = 'http';

/* PHP.7 et antérieur */
substr( $url, 0, 4 ) == $string;

/* PHP.8 */
//str_starts_with($url, $string);








?>