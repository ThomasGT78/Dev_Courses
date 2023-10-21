
"https://www.khanacademy.org/computing/computer-programming/html-js-jquery/dom-modification-with-jquery/a/review-dom-modification-with-jquery"

"https://openclassrooms.com/fr/courses/1567926-un-site-web-dynamique-avec-jquery/1569341-manipuler-le-code-html-avec-jquery"

// remplace le contenu actuel du paragraphe par "Nouveau contenu !": text():
$('p').text('Nouveau contenu !'); 
$("h1").text("All about cats"); 

// renvoie le code HTML contenu dans ce bloc div : html():
$('div').html(); 

// remplace le code HTML actuel par celui-ci
$('div').html('<p>Nouveau <strong>code</strong> !</p>'); 
$("h1").html("I <strong>love</strong> cats");

// Set attributes with attr():
$(".dog-pic").attr("src", "dog.jpg");
$(".google-link").attr("href", "http://www.google.com");

// Ajouter du contenu HTML après le contenu actuel
$('p').append(' <strong>Texte inséré après le contenu actuel.</strong>');
$('p').append( $('h1') );
