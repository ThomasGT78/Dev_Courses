 
/**
Séparer les codes dont le premier chiffres commence par un chiffre différent 
dans des tableaux différents.
Stocker tout ces tableaux dans un autre tableau général
    itérer la liste de code
    checker à chaque code le premier chiffre
        le chiffre est le même:
            stocker le code dans le tableau existant
        le chiffre change:
            envoyer le tableau précédent dans le tableau général .push
            stocker le code dans un nouveau tableau
*/

const x = parseInt(readline());
const n = parseInt(readline());
let result = "";
let tab = [];

// Get all combinations
for(let i = 0; i < x**n; i++){
    let bin = i.toString(x);
    let size = bin.length;
    // console.log("size: " + size);

    if(size < n){
        let comp = "";
        let dif = n-size
        for(let k = 0; k < dif; k++){
            comp += "0"
        }
        bin = comp + bin;
        size = bin.length;
    }

    // Check if combination exist already in the code
    let exist = false;
    let lastChar = result.substring(result.length-n)

    let lastResult = result.substring(result.length-1)
    let firstBin = bin.substring(0,1)
    console.log("lastResult: " + lastResult);
    console.log("firstBin: " + firstBin);
    if(firstBin != lastResult){
        //(check each binary code in order)
        for(let k = 0; k < n; k++){
            console.log("exist: " + exist);
            let tmp = bin.substring(0,n-k)
            let add = bin.substring(n-k,n)
            console.log("tmp1: " + tmp);
            console.log("add1: " + add);
            lastChar = result.substring(result.length-n+k)
    
            // check si bin exist in the result
            if(result.includes(tmp) && tmp.length == size){
                console.log(`tmp.length: ": ${tmp.length} = size: ": ${size}`);
                exist = true;
                console.log(`tmp: "${tmp}" exist in result: "${result}"`);
                
            // If doesn't exist check if a part of it exist in the last characters
            // check si tmp fait partie du lastChar
            } 
            else if (lastChar.includes(tmp)){
                console.log(`tmp: "${tmp}" exist in lastChar: "${lastChar}"`);
                exist = true;
            }
    
            // Add the non existing part at the end of the string
            if(exist){
                console.log("add2: " + add);
                console.log(`Ajoute add: "${add}" in result: "${result}".`);
                result += add;
                break;
            } 
            else {
                console.log(`tmp: "${tmp}" doesn't exist.`);
            }
        } // for (check each binary code in order)
    
        // if none of the part of the code exist in result, then add bin to the result
        if(!exist){
            console.log(`Add tmp: "${bin}" in result: "${result}".`);
            result += bin;
        }

    } // if firstBin != lastResult
    else {
        k
    }


    
    console.log("bin: " + bin);
    console.log(`result: ${result} \n`);
}

// console.log(result);
