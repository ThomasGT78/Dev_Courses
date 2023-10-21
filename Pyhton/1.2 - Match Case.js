		/**  MATCH CASE  **/

// match  
`Indique le début d'un bloc de match case
	=> suivi de la variable à évaluer`
// case
`Vérifie si une valeur donnée correspond à une condition spécifique dans ce bloc`
// Le symbole  _ 
`Définit une action à effectuer si aucune condition ne correspond`

fruit = "pomme"

match fruit:
    case "pomme":
        print("J'aime les pommes !")
    case "banane":
        print("Je n'aime pas les bananes.")
    case "orange":
        print("Les oranges sont bonnes pour la santé.")
    case _:
        print("Je ne connais pas ce fruit.")