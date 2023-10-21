
const sequence = 'cLash of Code';
const ABC = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
seqArray = sequence.split('');
Total = 0;
let letterValue;

for (i=0; i<seqArray.length; i++){
    let letter = seqArray[i];
    let lowerUpperNone = 0

    // Is Lowercase: 0, Uppercase: 1, or not a letter: 2
    if(letter.toUpperCase() === letter && letter !== letter.toLowerCase()){
        lowerUpperNone = 1
    } else if(letter.toUpperCase() === letter && letter === letter.toLowerCase()){
        lowerUpperNone = 2
    }

    if (lowerUpperNone == 0){
        let index = ABC.indexOf(letter)
        letterValue = index+1
    } else if (lowerUpperNone == 1){
        let index = ABC.indexOf(letter.toLowerCase())
        letterValue = (index+1)*2
    } else {
        letterValue = 0;
    }
    Total += letterValue

}

console.log(Total);
