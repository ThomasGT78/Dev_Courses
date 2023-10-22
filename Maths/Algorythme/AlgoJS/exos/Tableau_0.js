/* 
 * Tableau_0.js
 */

var pResultats = document.getElementById("pResultats");
var t = new Array(1, 3, 5, 7, 9, 11);

pResultats.innerHTML = "Contenu du tableau : " + t + "<br/>";
pResultats.innerHTML += "Nombre d'éléments : " + t.length + "<br/>";
pResultats.innerHTML += "2ème élément : " + t[1];

t.push(404);
console.log(t);

