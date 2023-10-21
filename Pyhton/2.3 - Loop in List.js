		/**  LOOP IN LIST  **/

	/**  FOR IN  **/
`Permet d’exécuter du code un nombre spécifique de fois`

list = ["a", "b", "c", "d"]

`Boucle dans une liste`
for item in list:
    print(item)		/* a b c d */

// FOR IN RANGE()
`Valeur de début réglée sur 0 par défaut
N'inclut pas le nombre limite`
for i in range(7):
    print(i)		/* 0 1 2 3 4 5 6 */
	
for i in range(len(list)):
    print(i)		/* 0 1 2 3 */

`Valeur de début peut être modifiée en ajoutant un nombre entier comme paramètre`

for i in range(4, 10):
    print(i)		/* 4 5 6 7 8 9 */

// BREAK
`Permet d'interrompre une boucle avant sa fin normale`

for i in range(10):
    if i == 5:
        break
    print(i)

// CONTINUE
`Permet de passer à la prochaine itération sans exécuter le reste du code de l'itération en cours`

liste = [1, 2, 3, 4, 5]

for element in liste:
    if element == 3:
        continue
    print(element)


	/**  WHILE  **/
`Le code s’exécute jusqu’à ce que la condition devienne fausse`

max = 10
number = 3

while number < max:
    number += 1

//
x = 1

while x != 5:
    x += 2
