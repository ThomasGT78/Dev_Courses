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

if(computer === player) {
	document.write("<p>Il y a Egalité, vous avez fait tous les 2 : <strong>" + computer + "</strong></p>")
	//Player Gagne
}else if (player === "feuille" && computer === "pierre")
	{alert("YESSSS!!! Vous avez Gagné")}
else if (player === "pierre" && computer === "ciseaux")
	{alert("YESSSS!!! Vous avez Gagné")}
else if (player === "ciseaux" && computer === "feuille")
	{alert("YESSSS!!! Vous avez Gagné")}
	//Computer Gagne
else if (computer === "feuille" && player === "pierre")
	{alert(`NOOOOO!!! computer Wins, il a choisis ${computer}`)}
else if (computer === "pierre" && player === "ciseaux")
	{alert(`NOOOOO!!! computer Wins, il a choisis ${computer}`)}
else if (computer === "ciseaux" && player === "feuille")
	{alert(`NOOOOO!!! computer Wins, il a choisis ${computer}`)}
	
	
	
	
	
	