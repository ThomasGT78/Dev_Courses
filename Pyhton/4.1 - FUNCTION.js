		/**  FUNCTION  **/

// Fonction sans paramètres
def message():
`""" 
Docstring
Cette fonction affiche le texte « Hello World ! » 
"""`
    print("Hello World !")

message()		/* Hello World ! */


// Fonction avec paramètres
def display_fullname(name, firstname):
    print("Nom : ", name)
    print("Prénom : ", firstname)

display_fullname(Skywalker, Anakin)
/* 
Nom : Skywalker
Prénom : Anakin 
*/

//--
def addition(a, b):
	result = a + b
	print(result)

addition(10 + 20)		/* 30 */


// Fonction avec une valeur de retour
x = 22
y = 33

def addition(a, b):
	result = a + b
	
sum = addition(x + y)

print(sum)		/* 55 */