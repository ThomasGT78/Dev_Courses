
function moveForward(i, magicPhrase, phraseLength, action){
    let ascii = magicPhrase.codePointAt(i);
    let letterCode =0;
    if (ascii !== 32){
        letterCode = ascii-64;
    }
    
    if (i<phraseLength-1){
        for (k=0; k<letterCode+1; k++){
            if (k<letterCode){
                action += '+';
            } else if (k==letterCode) {
                action += '.>';
            }
        } // for k
    } else {
        for (k=0; k<letterCode+1; k++){
            if (k<letterCode){
                action += '+';
            } else if (k==letterCode) {
                action += '.';
            }
        } // for k
    } // else 
    return action;
} // function moveForwrd

function moveBackward(i, magicPhrase, phraseLength, action){
let ascii = magicPhrase.codePointAt(i);
let letterCode =0;
if (ascii !== 32){
    letterCode = ascii-64;
}

if(letterCode<=13){
    if (i<phraseLength-1){
    for (k=0; k<letterCode+1; k++){
        if (k<letterCode){
            action += '+';
        } else if (k==letterCode) {
            action += '.>';
        }
    } // for k
} else {
    for (k=0; k<letterCode+1; k++){
        if (k<letterCode){
            action += '+';
        } else if (k==letterCode) {
            action += '.';
        }
    } // for k
} // else 
} else {
    letterCode = 27-letterCode;
    if (i<phraseLength-1){
        for (k=0; k<letterCode+1; k++){
            if (k<letterCode){
                action += '-';
            } else if (k==letterCode) {
                action += '.>';
            }
        } // for k
    } else {
        for (k=0; k<letterCode+1; k++){
            if (k<letterCode){
                action += '-';
            } else if (k==letterCode) {
                action += '.';
            }
        } // for k
    } // else 
} // else
return action;
} // function moveForwrd


function stepOver(i, magicPhrase, phraseLength, action){
    let lastI = i-30;
    let ascii = magicPhrase.codePointAt(i);
    let lastAscii = magicPhrase.codePointAt(lastI);

    let letterCode = 0;
    if (ascii !== 32){
        letterCode = ascii-64;
    }
    let lastLetterCode = 0;
    if (lastAscii !== 32){
        lastLetterCode = lastAscii-64;
    }

    //Check if new letter is bigger or smaller
    let newLetterIsBigger = 0
    if (lastLetterCode < letterCode){
        newLetterIsBigger = 1
    } else if (lastLetterCode > letterCode){
        newLetterIsBigger = 2
    }

    //Check difference between characters
    let difBetweenChar = 0;
    if (newLetterIsBigger === 1){
        difBetweenChar = letterCode-lastLetterCode
    } else if (newLetterIsBigger === 2){
        difBetweenChar = 27-lastLetterCode+letterCode
    }
    
    // DO ACTION
    if( // if the letter is closer form the front
        (newLetterIsBigger == 1 && difBetweenChar <= 13) || 
        (newLetterIsBigger == 2 && difBetweenChar <= 13) || newLetterIsBigger == 0
    ){
        if (i<phraseLength-1){
            for (k=0; k<difBetweenChar+1; k++){
                if (k<difBetweenChar){
                    action += '+';
                } else if (k==difBetweenChar) {
                    action += '.>';
                }
            } // for k
        } else {
            for (k=0; k<difBetweenChar+1; k++){
                if (k<difBetweenChar){
                    action += '+';
                } else if (k==difBetweenChar) {
                    action += '.';
                }
            } // for k
        } // else 
    } else { // If letter is closer by the back
        difBetweenChar =27-difBetweenChar;
        if (i<phraseLength-1){
            for (k=0; k<difBetweenChar+1; k++){
                if (k<difBetweenChar){
                    action += '-';
                } else if (k==difBetweenChar) {
                    action += '.>';
                }
            } // for k
        } else {
            for (k=0; k<difBetweenChar+1; k++){
                if (k<difBetweenChar){
                    action += '-';
                } else if (k==difBetweenChar) {
                    action += '.';
                }
            } // for k
        } // else 
    }
    return action;
} // function stepOver



function doSomething(){
// const magicPhrase = readline();
const magicPhrase = 'THREE RINGS FOR THE ELVEN KINGS UNDER THE SKY SEVEN FOR THE DWARF LORDS IN THEIR HALLS OF STONE NINE FOR MORTAL MEN DOOMED TO DIE ONE FOR THE DARK LORD ON HIS DARK THRONEIN THE LAND OF MORDOR WHERE THE SHADOWS LIE ONE RING TO RULE THEM ALL ONE RING TO FIND THEM ONE RING TO BRING THEM ALL AND IN THE DARKNESS BIND THEM IN THE LAND OF MORDOR WHERE THE SHADOWS LIE';
const phraseLength = magicPhrase.length;
let action = '';

for (i=0; i<phraseLength; i++ ){
    if (i<=29){
        action = moveBackward(i, magicPhrase, phraseLength, action)
        // action = moveForward(i, magicPhrase, phraseLength, action)
    } else {
        action = stepOver(i, magicPhrase, phraseLength, action)
    }
    
}
return action
}

// let doSomething = doSomething();
console.log(doSomething());
console.log(doSomething().length)