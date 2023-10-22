https://www.epochconverter.com/

milliseconde
seconde = milliseconde / 1000

minute = seconde / 60
minute = milliseconde / (1000 * 60)
minute = milliseconde / 60000 

heure = minute / 60
heure = milliseconde / (1000 * 60 * 60)
heure = milliseconde / 3600000

jour = heure / 24
jour = milliseconde / (1000 * 60 * 60 * 24)
jour = milliseconde / 86400000

var dateTimestamp = 'Temps en seconde'
date  = new Date(dateTimestamp*1000)
console.log(date);
console.log(`date: ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)
// variante
console.log(`date en français: ${date.toLocaleDateString('fr-FR')}`)