CONDITIONAL STATEMENTS

--IF.... ELSE
let sale = true;
if(sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
}

--Comparison Operators

>	<		Greater/Less than
>=	<=		Greater/Less than or Equal to
= = =		Is equal to
!= =		Is NOT equal to

let hungerLevel = 7;
if(hungerLevel >= 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}

--Logical Operators

&&		And
||		Or
!		Not (or Bang)

if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}

let excited = true;
console.log(!excited); // Prints false
let sleepy = false;
console.log(!sleepy); // Prints true

let mood = 'sleepy';
let tirednessLevel = 9;
if (!(mood === 'sleepy' || tirednessLevel > 8)) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}
//Output: 'not bed time yet'

--Truthy and Falsy

let myVariable = 'I Exist!';
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}

Falsy values includes:
0
NaN / Not a Number
"" or ''	Empty strings
null 		represent when there is no value at all
undefined 	when a declared variable lacks a value

--Truthy and Falsy Assignment

let defaultName;
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}
same as:
let defaultName = username || 'Stranger';

--Ternary Operator

let nightTime = true;
if (nightTime) {
  console.log('Turn on!');
} else {
  console.log('Turn off!');
}
same as:
nightTime ? console.log('Turn on!') : console.log('Turn off!');


--ELSE IF		//allows for more than two possible outcomes

let stopLight = 'yellow';

if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

--The SWITCH keyword

let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

