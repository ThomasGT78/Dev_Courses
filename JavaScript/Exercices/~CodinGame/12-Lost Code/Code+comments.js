const x = parseInt(readline());
const n = parseInt(readline());
let result = "";
let tabFull = [];
let tabTemp = [];
let prevBin = "";
let size = 0;
let codeTab = [];


// Loop through all combinations
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

} // FOR (add all codes in differents arrays)



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
        } else {
            codeTab = tabFull[i];
        }
    }
    else {
        codeTab = tabFull[i];
    }

    // LOOP through each second level arrays 
    for(k=0; k < tabFull[i].length; k++){
        let bin =  codeTab[k]

        // Check if combination exist already in the code
        let exist = false;
        let lastChar = result.substring(result.length-n);

        let lastResult = result.substring(result.length-1);
        let firstBin = bin.substring(0,1);

            //(check each code in order)
            for(let m = 0; m < n; m++){
                let tmp = bin.substring(0,n-m); // digits being compared
                let add = bin.substring(n-m,n); // rest of the digits that will be add if tmp exist
                lastChar = result.substring(result.length-n+m);
        
                // check si bin exist in the result
                if(result.includes(tmp) && tmp.length == size){
                    exist = true;
                    
                // If bin doesn't exist check if a part of it exist in the last characters
                // (check if tmp exist in lastChar)
                } 
                else if (lastChar.includes(tmp)){
                    exist = true;
                }
        
                // Add the non existing part at the end of the string
                if(exist){
                    result += add;
                    break;
                } 
            } // FOR (check each binary code in order)
        
            // if none of the part of the code exist in result, the part of the code necessary
            if(!exist){
                result += bin;
            }
    } // FOR (LOOP through each second level arrays )

} // FOR Loop through all combinations

console.log(result);