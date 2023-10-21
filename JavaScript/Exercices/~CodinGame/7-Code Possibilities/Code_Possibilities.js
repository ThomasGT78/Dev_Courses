const length = 2;
const characters = "1 2 3" ;
const charArray = characters.split(' ')
const charCount = charArray.length;
console.log(length);
console.log(charCount);
console.log(charArray);
let result=[];
let lineResult = '';

for (i=0; i<charCount; i++){

    
    lineResult = `${charArray[i]}`
    for(k=0; k<charCount; k++){
        lineResult += `${charArray[k]}\n`
        if(lineResult.length >= length){
            result.push(lineResult)
        } else {
            lineResult += `${charArray[k]}`
        }
    } 
    
}

for (i=0; i<charCount; i++){

    for (l=1; l<length; l++){
        lineResult = `${charArray[i]}`
        for(k=0; k<charCount; k++){
            lineResult += `${charArray[k]}\n`
            if(lineResult.length >= length){
                result.push(lineResult)
            } else {
                lineResult += `${charArray[k]}`
            }
        } 
    }
}
console.log(lineResult)

