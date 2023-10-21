'use strict';
window
// Vous devez déclarer 3 variables,
var player;
var random;
var computer;

// demandez à l'utilisateur son choix (pierre, feuille ou ciseaux)
player = window.prompt('Choisissez pierre feuille ou ciseaux');
player = player.toLowerCase();

random = Math.random();


if(random < 1 / 3){
    computer = 'pierre';
}
else if(random < 2 / 3){
    computer = 'feuille';
} else {
    computer = 'ciseaux';
}

// affichez le choix de l'ordinateur dans le document
document.write("<p>Choix de l'ordinateur : <strong>" + computer + "</strong></p>");
