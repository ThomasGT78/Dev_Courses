OBJECT

--  STRUCTURE  --

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};


--  ACCESSING PROPERTIES --

-- DOT Notation Access
//can't be used if property's name has special character
spaceship.numCrew;		//Returns: 5
spaceship.flightPath;	//Returns: ['Venus', 'Mars', 'Saturn']

=> Use in  a Variable:
let crewCount = spaceship.numCrew;	
let planetArray = spaceship.flightPath; 

-- BRACKET access
//must be used if property's name has special character
spaceship['Active Duty'];   // Returns: true
spaceship['Fuel Type'];   // Returns:  'Turbo Fuel'

=> Use in  a Variable:
let activeMission = spaceship['Active Duty'];
let chooseFuel = spaceship['Fuel Type'];

let propName =  'Active Mission';
console.log(spaceship[propName]);	// Output: true

let isActive = spaceship['Active Mission'];
console.log(isActive);				// Output: true

=> Use in  a FUNCTIUN:
let returnAnyProp = (objectName, property ) => 
objectName[property];

returnAnyProp(spaceship, 'Fuel Type');	// Returns: 'Turbo Fuel'
returnAnyProp(spaceship, 'homePlanet');	// Returns: 'Earth'
returnAnyProp(spaceship, 'numCrew');	// Returns: 5


--  PROPERTY ASSIGNEMENT  --

const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; 
// TypeError: Assignment to constant variable.
spaceship.type = 'alien'; 
// Changes the value of the type property
spaceship.speed = 'Mach 5'; 
// Creates a new key of 'speed' with a value of 'Mach 5'

-- Delete a Property:
const spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe' 
};
delete spaceship.mission;  // Removes the mission property

spaceship.color = 'glorious gold';	//Modify a property
spaceship.numEngines  = 6;			//Assign a new property
delete spaceship['Secret Mission'];	//Remove a property


--  METHODS  --
//When the data stored on an object is a function

const alienShip = {			// object's name
  invade () { 				// method's name
    console.log('Hello, you are going to be exterminated')
  }
};
alienShip.invade(); 		// to call the object method

Exemple 2:
let retreatMessage = 'Your planet is so dirty, we are leaving!';

let alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log('Fssshhhhhhh..... PRRROUHHH')
  }
};

console.log(alienShip.retreat());
//Output: Your planet is so dirty, we are leaving!
console.log(alienShip.takeOff());
//Output: Fssshhhhhhh..... PRRROUHHH


--  NESTED OBJECTS  --

let spaceship = {
  passengers: null,
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },

let capFave = spaceship.crew.captain['favorite foods'][0];
//Returns: 'cookies'

spaceship.passengers = [{
	Princess: [{'favorite foods': 'Pizza'}], 
	Slave: [{mission: 'protect the princess'}]
	}];
// Add 2 nested objects on 2 levels

--  PASS BY REFERENCE  --

Exemple 1:
const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};
let paintIt = obj => {
  obj.color = 'glorious gold'
};
paintIt(spaceship);
spaceship.color 	// Returns 'glorious gold'

-------------
Exemple 2:
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
};
let remotelyDisable = obje => {
  obje.disabled = true;
}
greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship)

--  LOOPING Through Objects  --  // FOR...IN

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: 
  ${spaceship.crew[crewMember].name}
  `);
};

/*Output:
captain: Lily
chief officer: Dan
medic: Clementine
translator: Shauna*/

for (let crewMemberSpe in spaceship.crew) {
  console.log(`$
  {spaceship.crew[crewMemberSpe].name}: 
  ${spaceship.crew[crewMemberSpe].degree}
  `);
};

/*Output:
Lily: Computer Engineering
Dan: Aerospace Engineering
Clementine: Physics
Shauna: Conservation ScienceP*/
