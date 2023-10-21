// Liste de raccourcis d'adresse vers les éléments HTML

var firstImage = document.getElementById("firstImage");     
var previewsImage = document.getElementById("previewsImage");
var playDiapo = document.getElementById("playDiapo");
var nextImage = document.getElementById("nextImage");
var lastImage = document.getElementById("lastImage");
var photo = document.getElementById("photo");
var lblPhoto = document.getElementById("lblPhoto");
var i;                          // la variable permettant de voyager dans la liste d'image via le tableau
var tabImage = new Array();         // Crée le tableau qui contiendra la liste d'image

				/************   
				*	INIT    *
				************/

var string = 1000;
console.log(string, typeof string)
var string = string.toString(10);
console.log(string, typeof string)

function init(numberImage){
    for (i=0; i < numberImage; i++){        // boucle ajoutant la liste de photo au tableau
        tabImage[i] = new Image();
        tabImage[i].src = `../image/${i}.JPG`;
    };
    i = 0;                          		// défini la position de l'image à afficher au chargement de la page
    
    changeImage();

		/*****		Défini la couleur des bouttons		*****/
	
	firstImage.style.backgroundColor = '#2F3F67';
    firstImage.style.color = 'white';

	previewsImage.style.backgroundColor = '#4D649F';
	previewsImage.style.color = 'white';

	nextImage.style.backgroundColor = '#4D649F';
	nextImage.style.color = 'white';
	
	lastImage.style.backgroundColor = '#2F3F67';
    lastImage.style.color = 'white';

	playDiapo.style.backgroundColor = '#D33333';
	playDiapo.style.color = 'white';
};

				/*******************************
				*	MODIFICATION DE L'IMAGE    *
				*******************************/

function changeImage() {
    photo.src = `../image/${i}.JPG`;                // modifie la source de l'image pour l'afficher
    lblPhoto.innerHTML = `Image ${i + 1}/${tabImage.length}`    // modifie le label de la nouvelle image
    photo.alt = `image ${i}`;                       // modifie l'attribut alt correspondant à la nouvelle image


/***************   Active ou désactive les bouttons en fonctions de la position de l'image	*************/
    firstImage.disabled = (i === 0);        
    previewsImage.disabled = (i === 0);
    nextImage.disabled = (i === tabImage.length - 1);
    lastImage.disabled = (i === tabImage.length - 1);

/***************    VARIANTE   ******************
*												*
*    firstImage.disabled = false;				*
*    previewsImage.disabled = false;			*
*    nextImage.disabled = false;				*
*    lastImage.disabled = false;				*
*												*
*    if (i == 0) {								*
*        firstImage.disabled = true;			*
*        previewsImage.disabled = true;			*
*      											*
*    } else if (i == tabImage.length-1) {		*
*        firstImage.disabled = false;			*
*        previewsImage.disabled = false;     	*
*    }											*
************************************************/
	if (i === 0){
		firstImage.className = "disabled"
	} else {
		firstImage.className = ""
	};
	
}; // fonction changeImage



				/***********************
				*	FIRST   /	LAST   *
				***********************/

function back2first() {             //Affiche la première image
    stopDiapo();
    i = 0
    changeImage();
} 
firstImage.onclick = back2first;

function go2last() {               //Affiche la dernière image
    stopDiapo();
    i = tabImage.length-1
    changeImage();
} 
lastImage.onclick = go2last;


				/***************************
				*	PREVIEWS   /	NEXT   *
				***************************/

function prevImage() {               //Affiche l'image précédente
    stopDiapo();
	if (i > -1){
		i--
	} else {
		i = 2;
	};
    changeImage();
} 
previewsImage.onclick = prevImage;

function nexImage() {               //Affiche l'image suivante
    stopDiapo();
    i++
    changeImage();
}
nextImage.onclick = nexImage;


				/****************
				*	DIAPORAMA   *
				****************/

var timer;
var play = false;

function diapoImage() {              //Fonction pour modifier l'image de la diapo
    changeImage();                   //Appelée chaque seconde par la fonction suivante
    i++;
    if (i >= tabImage.length) {
        i = 0;
    };
}

function diaporama() {               //Débute la diapo et appel la fonction précédente chaque seconde
    timer = window.setInterval(diapoImage, 1000);
    playDiapo.value = `Pause`;
    play = true;
}

function stopDiapo(){               //Arrête la diapo
    window.clearInterval(timer);
    playDiapo.value = `Play`;
    if (play){
        i--
		play = false;
    }
}

function playStop() {               //Décide si le boutton Play/Pause débute ou stop la diapo
    if (!play) {
        diaporama();
    } else {
        stopDiapo()
    }
}
playDiapo.onclick = playStop;


// lance la fonction «init» au chargement de la page web

document.onload = init(4);          // défini le nombre d'image dans la bibliothèque à 4
                                    