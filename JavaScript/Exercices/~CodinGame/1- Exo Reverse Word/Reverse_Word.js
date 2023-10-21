/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const S = 'Hello World';

 //console.log(S);
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 var arraySentence = S.split(' ')
 //console.log(arraySentence);
 
 var newSentence = '';
 
 for (i=0; i<arraySentence.length; i++){
     var reversedWord = '';
     var word = arraySentence[i];
     //console.log(word);
     var arrayWord = word.split('')
     var arrayWordSize = arrayWord.length-1
     for (k=arrayWordSize; k>=0; k--){
        //  console.log('k');
         letter = arrayWord[k];
        //  console.log(letter);
         reversedWord += letter
        //  console.log(reversedWord);
     }
     if (i<arraySentence.length-1){
         newSentence += reversedWord + ' '
        //  console.log(newSentence);
     } else {
         newSentence += reversedWord
        //  console.log(newSentence);
     }
 }
 
 console.log(newSentence);