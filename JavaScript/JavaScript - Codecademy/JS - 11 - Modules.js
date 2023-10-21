MODULES
		---   MODULE.EXPORTS    ---
		
//in 1-airplane.js
let Airplane = {};
Airplane.myAirplane = 'StarJet';
module.exports = Airplane;


		---   REQUIRE()    ---
		
//in 1-missionControl.js
const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
}
displayAirplane();

Exemple 2:
//in 2-airplane.js
module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};
//in 2-missionControl.js
const Airplane = require('./2-airplane.js');
console.log(Airplane.displayAirplane());


		---   EXPORT DEFAULT    ---

//in airplane.js
let Airplane = {};
Airplane.availableAirplanes = [{}, {}];

export default Airplane;


		---   IMPORT    ---

//in missionControl.js
import Airplane from './airplane'

function displayFuelCapacity() {};

displayFuelCapacity();


		---   NAMED EXPORT    ---

//in airplane.js


let availableAirplanes = [{}, {}];
let flightRequirements = {};
function meetsStaffRequirements() {};

export {availableAirplanes, flightRequirements, 
meetsStaffRequirements};


		---   NAMED IMPORT    ---

//in missionControl.js

import {availableAirplanes, flightRequirements,  meetsStaffRequirements} from './airplane';

function displayFuelCapacity() {};
displayFuelCapacity();

function displayStaffStatus() {};
displayStaffStatus();



		---   EXPORT NAMED EXPORT    ---
		
export let availableAirplanes = [{}, {}];
export let flightRequirements = {};
export function meetsSpeedRangeRequirements() {};
export function meetsStaffRequirements() {};

--------Exercice Complet------------

export let availableAirplanes = [{
 name: 'AeroJet',
 fuelCapacity: 800,
 availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
 maxSpeed: 1200,
 minSpeed: 300
}, 
{name: 'SkyJet',
 fuelCapacity: 500,
 availableStaff: ['pilots', 'flightAttendants'],
 maxSpeed: 800,
 minSpeed: 200
}];

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};
export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  const range = maxSpeed - minSpeed;
  if(range > requiredSpeedRange){
    return true
  } else {
    return false
  }
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};


		---   IMPORT NAMED IMPORT    ---

import {availableAirplanes, flightRequirements,  meetsStaffRequirements} from './airplane';

--------Exercice Complet------------

import {availableAirplanes, flightRequirements,  meetsStaffRequirements, meetsSpeedRangeRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
  });
};

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(
    function(element){
      console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
    }
  )
};
displayStaffStatus();

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(element.name + 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
};

displaySpeedRangeStatus();

/*Output:
Fuel Capacity of AeroJet: 800
Fuel Capacity of SkyJet: 500
AeroJet meets staff requirements: true
SkyJet meets staff requirements: false
AeroJetmeets speed range requirements: true
SkyJetmeets speed range requirements: false
*/


		---   EXPORT AS   ---
let availableAirplanes = [{}, {}];
let flightRequirements = {};
function meetsStaffRequirements() {};
function meetsStaffRequirements() {};

export { 
availableAirplanes as aircrafts, 
flightRequirements as flightReqs, 
meetsStaffRequirements as meetsStaffReqs, 
meetsSpeedRangeRequirements as meetsSpeedRangeReqs 
};


		---   IMPORT AS   ---

import {aircrafts, flightReqs,  meetsStaffReqs, 
meetsSpeedRangeReqs} from './airplane';

or		//if not aliased in the exportation

import { availableAirplanes as aircrafts, } 
from './airplane';


import * as Airplane from './airplane';


		---   COMBINING EXPORT STATEMENTS   ---
// export methods can be done in many time and combined

export let availableAirplanes = [{}, {}];
export { 
flightRequirements as flightReqs, 
meetsStaffRequirements as meetsStaffReqs, 
meetsSpeedRangeRequirements
};


		---   COMBINING IMPORT STATEMENTS   ---
// import methods can be done in many time and combined

import {availableAirplanes, flightReqs,  meetsStaffReqs} from './airplane';
import meetsSpeedRangeRequirements from './airplane';






