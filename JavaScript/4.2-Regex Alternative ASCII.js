 
	/// ASCII value Alternative to RegExp
 
(code > 47 && code < 58)  // numeric (0-9)
(code > 64 && code < 91)  // upper alpha (A-Z)
(code > 96 && code < 123) // lower alpha (a-z)

// Use the charCodeAt() Method
for (let letter of string) {
	let charCode = letter.charCodeAt(0);
	if ((charCode > 47 && charCode < 58) &&
	   (charCode > 96 && charCode < 123) &&
	   (charCode > 64 && charCode < 91)
	) {
	   return "Is Alpha-Numeric"
	}
}