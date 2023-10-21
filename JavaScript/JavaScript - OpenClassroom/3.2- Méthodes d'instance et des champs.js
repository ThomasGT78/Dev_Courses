Comme vous pouvez le constater, la classe  Show  contient un Array  ratings  , pour les notes, qui est initialisé vide, et une propriété  averageRating  (note moyenne) de zéro.

Déclarez une méthode instance dans la classe  Show  appelée  addRating()  . Elle prendra une  rating  (la note) qui sera un number entre 1 et 5 comme paramètre.

La méthode  addRating()  doit :

ajoutez la note reçue au tableau ratings de l'instance

recalculer la valeur  averageRating  de l'instance


class Show {
  constructor(title, numberOfSeasons) {
    this.title = title;
    this.numberOfSeasons = numberOfSeasons;
    this.ratings = [];
    this.averageRating = 0;
  }
  
  addRating(rating) {
    this.ratings.push(rating);
    let sum = 0;
    for (let rating of this.ratings) {
      sum += rating;
    }
    
    this.averageRating = sum / this.ratings.length;
  }
}