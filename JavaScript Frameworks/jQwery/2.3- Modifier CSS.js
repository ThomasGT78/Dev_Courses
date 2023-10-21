
// Récupérer la valeur d'une propriété
$('p').css('color');

// Définir propriétés CSS
/* Cela écrasera l'ancienne valeur s'il y en avait une ! */
$('p').css('color', 'red'); 

// Définir PLUSIEURS propriétés CSS
$('p').css({
    color : 'red', // couleur rouge
    width : '300px', // largeur de 300px
    height : '200px' // hauteur de 200px
});

// Propriété avec mot composé
/* les tirets ne sont pas acceptés dans les identifiants d'un objet ! Pour parer à ce problème, il vous faut soit mettre la première lettre de chaque mot en majuscule, sans séparer ceux-ci, soit mettre le nom de la propriété entre guillemets ou apostrophes */

$('p').css({
    borderColor : 'red', // bordure rouge
    paddingRight : '30px', // marge intérieure de 30px
    'margin-left' : '10px' // marge extérieure de 10px
});

/// Supprimer le CSS
// supprimer une propriété
$(".icha0").css("background-color","");
$(".icha0").css("opacity","");

// supprimer l'en-ligne propriété CSS
$('.className').css({propertyName: ''});

// supprimer l'ensemble en ligne de style
$('.className').removeAttr('style');

// supprimer les classes utilisées pour le css
$(".icha0").addClass('properties'); 
$(".icha0").removeClass('properties');