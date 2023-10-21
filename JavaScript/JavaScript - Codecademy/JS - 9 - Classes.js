CLASSES

class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior ++;
  }
}

const halley = new Dog('Halley'); 	// Create new Dog instance

		---   CONSTRUCTOR   ---

class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
  }
}

		---   INSTANCE   ---

class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}
//Instance:
const surgeonCurry = new Surgeon ('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon ('Durant', 'Orthopedics');

		---   METHODS   ---

get name(){
    return this._name;
  }
  get department(){
    return this._department;
  }
  get remainingVacationDays (){
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff){
    this._remainingVacationDays -= daysOff;
  }


		---   METHODS CALL   ---

class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
};

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

console.log(surgeonCurry.name);
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainingVacationDays);

		---   INHERITENCE   ---

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  
   static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 

  get certifications() {
    return this._certifications;
  }

  addCertification(newCertification){
    this._certifications.push(newCertification);
  }
};

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);

nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

		---   STATIC METHODS   ---

Exemple 1:
static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
console.log(Animal.generateName()); // returns a name

Exemple 2:
 static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }














