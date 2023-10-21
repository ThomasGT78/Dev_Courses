var player;
var computer;
var random;

player = window.prompt("pierre, feuille ou ciseaux?")
player = player.toLowerCase();

random = Math.random();


if(random < 1/3){
	computer = 'pierre';
} else {
	if (random < 2/3) {
		computer = 'feuille';
	} else {
		computer = 'ciseaux';
	}
}

document.write(computer);
//document.write("<p>Choix de l'ordinateur : <strong>" + computer + "</strong></p>");

if(computer === player) {
	document.write("<p>Il y a Egalité, vous avez fait tous les 2 : <strong>" + computer + "</strong></p>")
}else {
	switch (player) {
		case 'pierre':
			if (computer === 'ciseaux'){
				alert(`Player WINS, Computer played ${computer}`)
			} else {
				alert(`Computer WINS, Computer played ${computer}`)
			};
			break;
		case 'feuille':
			if (computer === 'pierre'){
				alert(`Player WINS, Computer played ${computer}`)
			} else {
				alert(`Computer WINS, Computer played ${computer}`)
			};
			break;
		case 'ciseaux':
			if (computer === 'feuille'){
				alert(`Player WINS, Computer played ${computer}`)
			} else {
				alert(`Computer WINS, Computer played ${computer}`)
			};
			break;
	}
}

	
	
	
	
	
	
	