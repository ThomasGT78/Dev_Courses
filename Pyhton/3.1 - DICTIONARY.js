		/**  DICTIONARY  **/

// CREATE Dictionary
hero = {}
hero = dict()

hero = {
	"lastname": "Garot",
	"firstname": "Thomas",
	"age": 36,
	"has_job": true,
	"hobbies": ["trekking", "IT", "sport", 69],
}

/// CHECK IF key of element EXIST
in 
`Return « true »  if the key is present in the sequence`
"lastname" in hero	/* true */
"nickname" in faamg	/* false */

// ADD element
hero["super power"] = "Space control"
hero["nickname"] = "Rifter"

// UPDATE element
hero["age"] = 28

// DELETE element
del hero["nickname"]
hero.pop("nickname")	/* Return « none » if no key */

/// Other Methods
keys()
`Retourne une vue sur les clés du dictionnaire`

values()
`Retourne une vue sur les valeurs du dictionnaire`

items()
`Retourne une vue sur les couples (clé, valeur) du dictionnaire`

get(clé)
`Retourne la valeur associée à la clé spécifiée. 
Si la clé n'est pas présente dans le dictionnaire, retourne la valeur None`

clear()
`Supprime tous les éléments du dictionnaire`