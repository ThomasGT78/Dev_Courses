const x = parseInt(readline());
const n = parseInt(readline());
let result = "";
let tabFull = [];
let tabTemp = [];
let prevBin = "";
let size = 0;
let codeTab = [];

// console.log(tabFull);

// Loop through all combinations -------------------------------------------
for(let i = 0; i < x**n; i++){

    // Get all combinations
    let bin = i.toString(x);
    size = bin.length;

    // Ajoute les 0 manquant au début des codes si besoin
    if(size < n){
        let zeroFill = "";
        let dif = n-size
        for(let k = 0; k < dif; k++){
            zeroFill += "0"
        }
        bin = zeroFill + bin;
        size = bin.length;
    }

    // separate codes with different 1st digit in different arrays
    if(tabTemp.length === 0){
        tabTemp.push(bin)
    }
    else if (bin[0] == prevBin[0]){
        tabTemp.push(bin)
    }
    else {
        tabFull.push(tabTemp)
        tabTemp = [];
        tabTemp.push(bin)
    }
    // IF last number, close the array and send it to tabFull
    if(i == (x**n)-1){
        tabFull.push(tabTemp)
    }
    prevBin = bin;

} // FOR (add all codes in differents arrays) -------------------------------------

// /*

// LOOP in general Array
for(let i = 0; i < tabFull.length; i++){
    codeTab = [];
    let lastCharResult = "";

    // IF lastCharResult == firstCharCode => reverse array code
    if(result.length !== 0){
        lastCharResult = result[result.length-1];
        let firstCharCode = tabFull[i][0][0];
        if (firstCharCode == lastCharResult){
            codeTab = tabFull[i].reverse();
            // console.log("codeTab: " + codeTab);
        } else {
            codeTab = tabFull[i];
            // console.log("codeTab: " + codeTab);
        }
    } // IF lastCharResult == firstCharCode => reverse array code
    else {
        codeTab = tabFull[i];
        // console.log("codeTab: " + codeTab);
    }


// /*

    for(k=0; k < tabFull[i].length; k++){
        let bin =  codeTab[k]
        // console.log("bin: " + bin);

        // Check if combination exist already in the code
        let exist = false;
        let lastChar = result.substring(result.length-n);

        let lastResult = result.substring(result.length-1);
        let firstBin = bin.substring(0,1);
        // console.log("lastResult: " + lastResult);
        // console.log("firstBin: " + firstBin);


        // if(firstBin != lastResult){
            //(check each binary code in order)
            for(let k = 0; k < n; k++){
                // console.log("exist: " + exist);
                let tmp = bin.substring(0,n-k);
                let add = bin.substring(n-k,n);
                // console.log("tmp1: " + tmp);
                // console.log("add1: " + add);
                lastChar = result.substring(result.length-n+k);
        
                // check si bin exist in the result
                if(result.includes(tmp) && tmp.length == size){
                    // console.log(`tmp.length: ": ${tmp.length} = size: ": ${size}`);
                    exist = true;
                    // console.log(`tmp: "${tmp}" exist in result: "${result}"`);
                    
                // If doesn't exist check if a part of it exist in the last characters
                // check si tmp fait partie du lastChar
                } 
                else if (lastChar.includes(tmp)){
                    // console.log(`tmp: "${tmp}" exist in lastChar: "${lastChar}"`);
                    exist = true;
                }
        
                // Add the non existing part at the end of the string
                if(exist){
                    // console.log("add2: " + add);
                    // console.log(`Ajoute add: "${add}" in result: "${result}".`);
                    result += add;
                    break;
                } 
                else {
                    // console.log(`tmp: "${tmp}" doesn't exist.`);
                }
            } // for (check each binary code in order)
        
            // if none of the part of the code exist in result, then add bin to the result
            if(!exist){
                // console.log(`Add tmp: "${bin}" in result: "${result}".`);
                result += bin;
            }
        
        // console.log("bin: " + bin);
        // console.log(`result: ${result} \n`);

    }
// */

} // FOR Loop through all combinations

// */

console.log(result);

