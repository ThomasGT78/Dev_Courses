const x = parseInt(readline());
const n = parseInt(readline());
let result = "";
let tabFull = [];
let tabTemp = [];
let prevBin = "";
let size = 0;
let codeTab = [];


for(let i = 0; i < x**n; i++){

    let bin = i.toString(x);
    size = bin.length;

    if(size < n){
        let zeroFill = "";
        let dif = n-size
        for(let k = 0; k < dif; k++){
            zeroFill += "0"
        }
        bin = zeroFill + bin;
        size = bin.length;
    }

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

for(let i = 0; i < tabFull.length; i++){
    codeTab = [];
    let lastCharResult = "";

    if(result.length !== 0){
        lastCharResult = result[result.length-1];
        let firstCharCode = tabFull[i][0][0];
        if (firstCharCode == lastCharResult){
            codeTab = tabFull[i].reverse();
        } else {
            codeTab = tabFull[i];
        }
    } // IF lastCharResult == firstCharCode => reverse array code
    else {
        codeTab = tabFull[i];
    }

    for(k=0; k < tabFull[i].length; k++){
        let bin =  codeTab[k]

        let exist = false;
        let lastChar = result.substring(result.length-n);

        let lastResult = result.substring(result.length-1);
        let firstBin = bin.substring(0,1);

            for(let k = 0; k < n; k++){
                let tmp = bin.substring(0,n-k); // digits being compared
                let add = bin.substring(n-k,n); // rest of the digits that will be add if tmp exist
                lastChar = result.substring(result.length-n+k);
        
                if(result.includes(tmp) && tmp.length == size){
                    exist = true;
                    
                } 
                else if (lastChar.includes(tmp)){
                    exist = true;
                }
        
                if(exist){
                    result += add;
                    break;
                } 

            } // FOR (check each binary code in order)
        
            if(!exist){
                result += bin;
            }
    } // FOR (LOOP through each second level arrays )

} // FOR Loop through all combinations

console.log(result);

