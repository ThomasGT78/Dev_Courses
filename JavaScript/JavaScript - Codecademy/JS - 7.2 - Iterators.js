ITERATORS
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods

		---  The .FOREACH() Method  --
/*execute the same code on every element in an array 
but does not change the array and returns undefined*/

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach (favoriteFruit => 
  console.log('I want to eat a '+ favoriteFruit)
  )
/*Output:
I want to eat a mango
I want to eat a papaya
I want to eat a pineapple
I want to eat a apple
*/


		---  The .MAP() Method  --
/*executes the same function on every element in an array and 
returns a new array with the updated elements*/

const numbers = [1, 2, 3, 4, 5]; 

Exemple 1
const bigNumbers = numbers.map(num => {
  return num * 10;
});

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]

Exemple 2
const animals = 
['Hen', 'elephant', 'llama', 'leopard', 
'ostrich', 'Whale', 'octopus', 'rabbit', 
'lion', 'dog'];
const secretMessage = animals.map(firstLetter => 
	{return firstLetter[0]}
);
console.log(secretMessage.join(''));
// Output: HelloWorld

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(numbers => 
{return numbers/100}
);
console.log(smallNumbers);
// Output: [ 1, 2, 3, 4, 5 ]


		---  The .FILTER() Method  --
/*checks every element in an array to see if it meets criteria
and return a new array with only choosen elements*/

Exemple 1
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter(number => 
	{return number < 250}
);

Exemple 2
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(
  word => {return word.length > 7}
);


		---  The .FINDINDEX() Method  --
/*return the index of the first element evaluated to True
returns -1 if none of the elements satisfies the condition*/

Exemple 1
const jumbledNums = [123, 25, 78, 5, 9]; 

const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});
console.log(lessThanTen); // Output: 3 

Exemple 2
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(
  animalType => {return animalType ==='elephant'}
);

const startsWithS = animals.findIndex(
  firtsLetter => {return firtsLetter[0] === 's'}
);


		---  The .REDUCE() Method  --
/*iterates through an array and takes the values of the 
elements and returns a single value*/

const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  
/* <- Second argument for .reduce() acts as an initial 
value for the accumulator*/

console.log(summedNums); 		// Output: 117


		---  The .SOME() Method  --
//return a boolean value (TRUE or FALSE)

console.log(words.some(word => 
    {return word.length < 6}
));


const interestingWords = words.filter(
  bigWords => {return bigWords.length > 5}
);
console.log(interestingWords.every((word) => 
    {return word.length > 5} 
));