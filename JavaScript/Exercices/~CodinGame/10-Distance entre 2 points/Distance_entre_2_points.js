const a = '60 30 10';
const b = '20 10 8';
arrayA = a.split(' ');
arrayB = b.split(' ');
function sqr(num){
    return num*num;
}

function distance(x1, y1, z1, x2, y2, z2){
    return Math.round(Math.sqrt(sqr(x2 - x1) + sqr(y2 - y1) + sqr(z2 - z1)));
}


console.log(distance(arrayA[0], arrayA[1], arrayA[2], arrayB[0], arrayB[1], arrayB[2]));