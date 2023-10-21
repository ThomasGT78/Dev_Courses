const S = "nS3rA8nxLdorUmT93";
var arrayS = S.split('')
var result = '';

for (i=0; i<arrayS.length; i++){
    letter = arrayS[i]
    if(letter.toUpperCase() === letter && letter !== letter.toLowerCase()){
        result += letter
    }
}


console.log(result);