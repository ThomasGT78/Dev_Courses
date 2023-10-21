		/****************************
		*	MODIFIER LES CLASSES	*
		****************************/

// Récupérer la classe
$("#id").attr('class')

// Récupérer la classe du paragraphe sur lequel on a cliqué
$('p').click(function()
{
	$(this).attr('class')
});


// addClass()
ajoute la classe spécifiée en argument
// removeClass()
supprime la classe de la sélection, si elle existe
// toggleClass()
retire ou ajoute la classe de la sélection, selon si elle existe ou si elle n’existe pas

/// Exemples:
$('#cathy').removeClass('grand');
$('#julie').addClass('vert');
$('#trich').removeClass('vert').addClass('rouge').addClass('grand');

// Ajouter plusieurs classes simultanément :
$('#julie').addClass('bleu immense');
$('#eric').addClass('rouge grand');

// Combiner les actions
$('#kevin').removeClass('rouge').addClass('vert');
$('#eric').addClass('rouge').addClass('grand');
$('#trich').removeClass('vert').addClass('rouge grand');
$('#trich').removeClass('vert').addClass('rouge').addClass('grand');