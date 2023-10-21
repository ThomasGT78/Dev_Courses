		/**  PYTHON BASICS  **/

// Style and Philosophy
"https://peps.python.org/pep-0008/"
"https://peps.python.org/pep-0020/"

// Comment
# ceci est un commentaire

// Docstring
` 
""" 
Explication d'une fonction 
Peut être affichée dans la console avec: 
help(function_name)
""" `

/**  Variables  **/

hello = "Hello world!"
name = "Thomas"
age = 36
has_job = true
hobbies = ["trekking", "IT", "sport", 69]

/**  Methods  **/
print(name)		/* Thomas */
type(hello)		/* string */
len(hello)		/* 12 */
len(hobbies)	/* 4 */


/// Concaténation
print(hello + " Je m'appelle " + name + " et j'ai " + age + " ans.")

// f-string
print(f"{hello} Je m'appelle {name} et j'ai {age} ans.")
