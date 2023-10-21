FUNCTIONS

function functiunName() {
	console.log ('My name is Thomas');
}
functiunName()				//Output: My name is Thomas

-- Parameters and Arguments
function functiunName(name) {
	console.log ('My name is' + name);
}
functiunName('Thomas')		//Output: My name is Thomas
functiunName('Michel')		//Output: My name is Michel
functiunName()				//Output: My name is undefined

--  Default Parameters  --
function functiunName(name = stranger) {
	console.log ('Hello' + name);
}
functiunName('Thomas')		//Output: Hello Thomas
functiunName()				//Output: Hello Stranger

--  Return  --

function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}
-----------
function monitorCount(rows, columns) {
  return rows * columns;
}
const numOfMonitors = monitorCount(5, 4);
console.log (numOfMonitors)		//Output: 20


--  Helper Functions  --

function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors (rows, columns){
  return monitorCount(rows, columns) * 200;
}
const totalCost = costOfMonitors (5, 4);
console.log (totalCost);		//Output: 4000

--  Function Expressions  --

const plantNeedsWater = function (day) {
  if (day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
}
console.log (plantNeedsWater('Tuesday')); //Output: false

--  Arrow Functions  --

const plantNeedsWater = function () { }
const plantNeedsWater = () => {		//need parenthesis
  if (day === 'Wednesday') { }
}

const plantNeedsWater = function (day) { }
const plantNeedsWater = day => {	//don't need parenthesis
  if (day === 'Wednesday') { }
}

const plantNeedsWater = function (day, month) { }
const plantNeedsWater = (day, month) => {	//need parenthesis
  if (day === 'Wednesday') { }
}

-- Concise Body Arrow Functions
const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};

//=implicit return
const plantNeedsWater = day => day === 'Wednesday' ? true : false;
