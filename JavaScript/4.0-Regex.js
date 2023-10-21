
// Les Signes

"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"

"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions"

"https://javascript.info/regexp-unicode"

[...] 
"Match with conditions"

/^
"Match the beginning of input"
[^...]
"A negated or complemented character class"
"Match anything that is not enclosed in the brackets"

[ab]
"Match a OR b"

[a-z]	
"Match between the a to z (LowerCase letters)"

[A-Z]	
"Match between the A to Z (UpperCase letters)"

[0-9] // Exemple: /^[0-9]$/
"Match between the 0 to 9"

[a-z0-9]
"Match between the a to z or 0 to 9"

[a-zA-Z]
"Match between the a to z or A to Z" 


\d	// Exemple: /^\d+$/
"Match all digit char"

\D	// opposite of \d
"Match all NON digit char"

\w
"Match any alphanumeric character from the basic Latin alphabet"
/\w/ => /[A-Za-z0-9_]/


\W	(!\w)
"Match any alphanumeric character NOT from the basic Latin alphabet"
/\W/ => /[^A-Za-z0-9_]/
/i
"Flag used for CASE-INSENSITIVE string comparison"
/[a-z]i/ => [a-zA-Z]

\p{L}
"Match any letter in any language"

\p{N}
"Match any number in any language"

\s
"Match a space"


+

$
"It represents the end of the string."


/g
"Don't stop after first match"

/u
"Support unicode pattern matching"

Combined flags
/giu

// Construction



// In the Code
let strRegex = new RegExp(/^[a-z0-9]+$/i);
let result = strRegex.test(string); 


var regEx = /^[0-9a-zA-Z]+$/;
if(name.value.match(regEx))
 {
  return true;
 }
else
 {
 alert("Please enter letters and numbers only.");
 return false;
 }
 