


const n = parseInt(readline());
let finalObject = {}

for (let i = 0; i < n; i++) {
    const assignment = readline();
    // console.log(assignment); //log
    const re = /[\[.= \]]/;
    let rawArrayAssign = assignment.split(re)
    const arrayAssign = rawArrayAssign.filter(char => char != '');
    // console.log(newArray); //log

    let objectName = arrayAssign[0];
    // Get keys
    let initialKey = parseInt(arrayAssign[1]);
    let lastKey = parseInt(arrayAssign[2]);
    let keys = [];
    for (let k=initialKey; k<=lastKey; k++){
        keys.push(k)
    }
    // Get values
    let values = [];
    for (let k=3; k<arrayAssign.length; k++){
        values.push(arrayAssign[k])
    }
    // console.log(values); //log

    // Create Json String
    let jsonString = `{"${objectName}": {`;

    for (let k=0; k<keys.length; k++){
        if (k < keys.length-1){
            jsonString += `"${keys[k]}":"${values[k]}",`;
        } else {
            jsonString += `"${keys[k]}":"${values[k]}"`;
        }
    }
    jsonString += `}}`;
    // console.log(jsonString); //log

    // Json String to Object
    let object = JSON.parse(jsonString);
    const returnedTarget = Object.assign(finalObject, object);

}

const x = readline();
// console.log(x); //log

// x to array
const rawArrayX = x.split(/[\[\]]/)
const arrayX = rawArrayX.filter(char => char != '');
// console.log(arrayX); //log

for (let m=arrayX.length; m>2; m--){
    let partialResult = finalObject[`${arrayX[m-2]}`][`${arrayX[m-1]}`];
    // console.log(partialResult); //log
    arrayX.pop();
    arrayX.pop();
    arrayX.push(partialResult);
}

console.log(finalObject[`${arrayX[0]}`][`${arrayX[1]}`]);
