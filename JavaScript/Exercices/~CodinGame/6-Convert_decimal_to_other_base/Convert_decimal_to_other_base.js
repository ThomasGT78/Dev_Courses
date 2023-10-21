
const B = 8; // Base to convert to
let result;

// Create 3 random number to covert and addition
let inputs = [];
for (let i=0 ; i<3; i++){
    let number = Math.floor(Math.random()*50)
    inputs.push(number)
}
console.log(inputs);

// Convertir et Additionner
for (let i = 0; inputs.length; i++) {
    const N = inputs[i];
    const Ns =N.toString();
    let Narray = N.toString().split('')
    const NsLength = Narray.length;
    console.log(Narray)

    //Convertir

    let newN = 0;
    for(k=0; k<NsLength; k++){
        NB = Narray[k]*(B^NsLength-k)
        newN += NB
    }
    console.log(NB);

    result += newN;
}
console.log(result);

