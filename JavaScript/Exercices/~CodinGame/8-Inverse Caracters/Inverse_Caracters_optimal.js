const s = 'XXOOXXXOOO'
let newValue = "";
const arrayS = s.split('')
const clean = [...new Set(arrayS)]

arrayS.map((caracter) => caracter == clean[0]? newValue += clean[1]: newValue += clean[0])

/*ALSO POSSIBLE

for (i=0; i<arrayS.length; i++){
    if (arrayS[i] == clean[1]){
        newValue += clean[0]
    } else {
        newValue += clean[1]
    }
}
*/
console.log(newValue);
 