// tsc
The TypeScript transcompiler can be used on the command line by running the command:

tsc

This will create an equivalent .js file in the same directory as well as surface any errors found by the TypeScript transcompiler.

/**
*	FUNCTION
*/
function greet(name?: string) {
  console.log(`Hello, ${name|| 'Anonymous'}!`);
}
 
greet(); // Prints: Hello, Anonymous!

// OR

function greet(name = 'Anonymous') {
  console.log(`Hello, ${name}!`);
}


// Assigning type to the returned value of a function
function createGreeting(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  }
 
  return undefined;
  // Typescript Error: Type 'undefined' is not assignable to type 'string'.
};

// In arrow function:
const createArrowGreeting = (name?: string): string => {
  if (name) {
    return `Hello, ${name}!`;
  }
 
  return undefined;
  // Typescript Error: Type 'undefined' is not assignable to type 'string'.
};

/**
*	ARRAY
*/

let names: string[] = ['Danny', 'Samantha'];
// OR
let names: Array<string> = ['Danny', 'Samantha'];

let bestNumbers: number[] = [7,77,4];
let bestLunches: string[] = ['chicken soup', 'non-chicken soup'];
let bestBreakfasts: string[]= ['fasting', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
let bestBooleans: boolean[] = [true, false];


// Multidimensional Arrays:
let bestMealPlan: string[][] = [bestLunches, bestBreakfasts, ['baked potato', 'mashed potato']];
let bestBooleansTwice: boolean[][] = [bestBooleans, bestBooleans];
let numbersMulti: number[][][] = [ [[1],[2,3]], [[7],bestNumbers] ];


// TUPLE (With a fixed sequence of types):
/* 
Tuple types specify both the lengths and the orders of compatible tuples, and will cause an error if either of these conditions are not met 
*/
let ourTuple: [string, number, string, boolean] = ['Is', 7 , 'our favorite number?' , false]; 

/* 
Tuples and Arrays do not have compatible types within TypeScript. We can’t assign an array to a tuple variable, even when the elements are of the correct type:
*/

let tup: [string, string] = ['hi', 'bye'];
let arr: string[] = ['there','there'];
tup = ['there', 'there']; // No Errors.
tup = arr; // Type Error! An array cannot be assigned to a tuple.

// .concat turn the Tuple in an Array
let tup: [number, number, number] = [1,2,3];
let concatResult = tup.concat([4,5,6]); // concatResult has the value [1,2,3,4,5,6].

let dogTup: [string, string, string, string] = ['dog', 'brown fur', 'curly tail', 'sad eyes'];
let myArr = dogTup.concat([])
myArr[50] = 'not a dog' // no error


/**
*	REST parameter (...restElement)
*/

// Exemple
function smush(firstString, ...otherStrings: string[]){
  let output = firstString;
  for(let i = 0; i < otherStrings.length; i++){
    output = output.concat(otherStrings[i]);
  }
  return output;
}

// Exemple
function addPower(p: number, ...numsToAdd: number[]): number{
  let answer = 0; 
  for(let i = 0; i < numsToAdd.length; i++){
    answer += numsToAdd[i] ** p;
  }
  return answer;
}

addPower(3, 4, 5, 6)


// Exemple
function performDanceMove(moveName:string, moveReps:number, hasFlair:boolean):void{
  console.log(`I do the ${moveName} ${moveReps} times !`);
  if(hasFlair){
    console.log('I do it with flair!');
  }
}

let danceMoves: [string, number,boolean][] = [
  ['chicken beak', 4, false],
  ['wing flap', 4, false],
  ['tail feather shake', 4, false],
  ['clap', 4, false],
  ['chicken beak', 4, true],
  ['wing flap', 4, true],
  ['tail feather shake', 4, true],
  ['clap', 4, true],
];

danceMoves.forEach( move => performDanceMove(...move))