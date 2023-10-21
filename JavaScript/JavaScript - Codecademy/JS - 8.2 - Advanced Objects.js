ADVANCED OBJECTS

		---   The THIS Keyword   ---
/*references the calling object which provides access 
to the calling object’s properties*/

Exemple 1-----------
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};

goat.diet(); 			// Output: herbivore

Exemple 2 -----------

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};
console.log(robot.provideInfo());

---   ARROW FUNCTIONS and THIS   ---
/*the value of this is the global object, or an object that 
exists in the global scope. Arrow fonctions CAN NOT call
inside the object with This.*/

		---   PRIVACY   ---

/*common convention is to place an underscore _ before the name 
of a property to mean that the property should not be altered.*/

const bankAccount = {
  _amount: 1000
}

		---   GETTER   ---
/*Getters are methods that get and return the internal 
properties of an object.*/

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel () {
    if(typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`
    }else{
      return 'System malfunction: cannot retrieve energy level'
    }
  }
};
console.log(robot.energyLevel);


		---   SETTER   ---
//reassign values of existing properties within an object

Exemple 1:
const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};
person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age

Exemple 2:
  set numOfSensors(num){
    if(typeof num === 'number' && num >= 0){
      return this._numOfSensors = num
    }else{
      'Pass in a number that is greater than or equal to 0'
    }
  } 

		---   FACTORY FUNCTIONS   ---

Exemple 1:
const monsterFactory = (name, age, energySource, 
catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'


Exemple 2:
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
};

const tinCan = robotFactory('P-500', true);
tinCan.beep();


		---   PROPERTY VALUE SHORTHAND   ---

const monsterFactory = (name, age) => {
  return { 
    name: name,
    age: age
  }
};

			= 
 
 const monsterFactory = (name, age) => {
  return { 
    name,
    age 
  }
};


		---   DESTRUCTURED ASSIGNMENT   ---

const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania'

		=

const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'

----We can even grab nested properties of an object:

const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'
		or
const { preferences } = vampire; 
const { day } = preferences; 
console.log(day); // Prints 'stay inside'

Exemple 2:
const robot = {
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
  }
};
const {functionality} = robot;
functionality.beep();	//Output: Beep Boop

		---   BUILT-IN Object Methods   ---
		
Object Instance Methods:		
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods

Object Class Methods:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods_of_the_Object_constructor

const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

	---	Object.keys()
/*Returns an array containing the names of all of the 
given object's own enumerable string properties*/

const robotKeys = Object.keys(robot);
console.log(robotKeys);

	---	Object.entries() 
[/*Returns an array containing all of the [key, value] pairs 
of a given object's own enumerable string properties*/

const robotEntries = Object.entries(robot);
console.log(robotEntries);
]

	---	Object.assign()
/*Copies the values of all enumerable own properties from one 
or more source objects to a target object.*/

const newRobot = Object.assign(
	{laserBlaster: true, voiceRecognition: true}, robot
);

console.log(newRobot);

