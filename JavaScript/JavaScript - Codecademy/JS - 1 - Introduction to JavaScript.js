INTRODUCTION TO JAVASCRRIPT

//single line comment

/*multiple 
line comment*/	(can be used in the middle of a line of code)

console.log('Hello World');
/*
console 		= Object
.log 			= Method
'Hello World'	= String Instance
*/

.toUpperCase()	//returns a string in all capital letters
.startsWith()	/*returns TRUE or FALSE, if the Instance 
				correspond to the accepted Argument*/

//List of built-in strings METHODS:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

//List of built-in OBJECTS:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

//List of NUMBER's Methods:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

//List of MATH's Methods:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

//List of Key Words
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords

--DECLARE A VARIABLE
VAR			//Value CAN'T be Reassigned but can be Undefined
var myValue = 'Value';
console.log(myValue);	// Output: Value
var myValue;
console.log(myValue);	// Output: undefined

About VAR:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

LET			//Value can be Reassigned and Undefined
let myValue = 'Value';
console.log(myValue);	// Output: Value
myValue = 'New Value';
console.log(myValue);	// Output: New Value

CONST		//Value CAN'T be Reassigned not Undefined
const myValue = 'Value';
console.log(myValue);	// Output: Value

--Mathematical Assignment Operators
let w = 4;
w = w + 1;
console.log(w); // Output: 5

let w = 4;
w += 1;
console.log(w); // Output: 5

let x = 25;
x -= 5;
console.log(x); // Output: 20
x *= 2;
console.log(x); // Output: 40
x /= 4;
console.log(x); // Output: 10

--The Increment and Decrement Operator
let a = 10;
a++;		//increase the value of the variable by 1
a--;		//decrease the value of the variable by 1
	
--STRING CONCATENATION and INTERPOLATION
let myPet  = 'Yuna';

//CONCATENATION
console.log ('The name of my pet: ' + myPet + '.');

//INTERPOLATION		${}
console.log(`The name of my pet: ${myPet}.`);
//Outout: The name of my pet: Yuna.

--typeof Operator	//returns the Data Type of a value
const unknown1 = 'foo' / 9 / true;
console.log(typeof unknown1); 
// Output: string / number / boolean
