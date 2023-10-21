// Contenu de file.js:
export function sayWelcom() {
  return "Welcom to WayToLearnX.com";
}

// Contenu de main.js:
import {sayWelcom} from 'file'; 
console.log(sayWelcom());

		/************
		*	jQuery	*
		************/
		
$.getScript("my_lovely_script.js", function() {
   alert("Script loaded but not necessarily executed.");
});

		/************
		*	NodeJS	*
		************/

// mymodule.js
module.exports = {
   hello: function() {
      return "Hello";
   }
}
// server.js
const myModule = require('./mymodule');
let val = myModule.hello(); // val is "Hello"   