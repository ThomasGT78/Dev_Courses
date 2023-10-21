		/**  LIST  **/
"https://docs.python.org/fr/3/tutorial/datastructures.html"

faamg = []

faamg = ["Facebook", "Apple", "Amazon", "Microsoft", "Google"]

faamg[0]	/* "Facebook" */
faamg[1]	/* "Apple" */
faamg[4]	/* "Google" */
faamg[-1]	/* "Google" */
faamg[-3]	/* "Amazon" */
faamg[5]	/* IndexError: list index out of the range */

/// CHECK IF element EXIST
in
`Return « true »  if the element is present in the sequence`
"apple" in faamg	/* true */
"orange" in faamg	/* false */
42 in faamg	/* false */

/// UPDATE element of the list
faamg[0] = "Meta" /* ["Meta", "Apple", "Amazon", "Microsoft", "Google"] */

/// ADD element in the list
faamg.append("Tesla") 
`Ajoute un élément à la fin de la liste`

.insert(i, element)
`Insère un élément à une position donnée dans la liste`

.extend(iterable)
`Ajoute plusieurs éléments à la fin de la liste`

/// REMOVE element from the list
.remove() 
`Remove the FIRST element of the list`
faamg.remove("Apple") 
`Remove a SPECIFIC element by VALUE`

del faamg[3]
`Remove a SPECIFIC element by INDEX`

.pop()
`Supprime et renvoie le dernier élément`
.pop(i)
`Supprime et renvoie l'élément à une position donnée`

.clear()
`Supprime tous les éléments de la liste`

/// SORT elements of the list
faamg.sort()


/**  OTHER METHODS  **/
// len(list_name)
`Compte le nombre d'éléments dans la liste`
// .count(element)
`Renvoie le nombre d'occurrences de l'élément spécifié dans la liste`
// .index(element)
`Renvoie la première occurrence de l'élément spécifié dans la liste`
// .reverse()
`Inverse l'ordre des éléments de la liste`
