		/****************************************
		*	Programmation Orientée Objet (POO)	*
		****************************************/
// https://buzut.net/programmation-orientee-objet-javascript/		
/* 
La classe regroupe les méthodes et propriétés (attributs) qui se rapportent à un objet. 
Elle définit ce qu’est un objet et ce que l’on peut faire avec. 
Elle permet de produire rapidement des objets similaires
*/

/// Structure
class className {}


class House {
	// Propriété (ou Attribut)
	/* variable interne à une classe qui pourra évoluer */
	constructor(city, country, size, nbRoom, garage) {
		this._city = city;
		this._country = country;
		this._size = size;
		this._nbRoom = nbRoom;
		this._garage = garage
	}

	// Method
	/* fonction interne à la classe qui permet d'exécuter des actions au sein de la classe instanciée */
	get size() {
		return this._size;
	}
	
	set changeSize(newSize){
		this._size = newSize;
	}
	
	newNbRoom(){
		return `New room's number is ${this._nbRoom}`;
	}
	
	changeNbRoom(number) {
		this._nbRoom = number;
	}
	addGarage(){
		this._garage = true;
	}

} // end Class

/// Instance de Classe
const beachHouse = new House ('Rio de janeiro', 'Brésil', 55, 3, false);
const mountainHouse = new House ('Courchevel', 'France', 35, 2, false);

// With Getter and Setter
console.log(beachHouse._size) // 55 
beachHouse.changeSize = 65;
console.log(beachHouse.size) // 65 (with Getter)

// With classic Method
console.log(beachHouse._nbRoom) // 3
beachHouse.changeNbRoom(4);
console.log(beachHouse.newNbRoom()) // New room's number is 4 (with Method)