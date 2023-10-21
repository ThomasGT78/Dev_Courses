
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
//console.log(N);
if(N){
    var inputs = readline().split(' ');
} else {
    var inputs = '';
}
//console.log(inputs);

let closestTemp;
let absoluteClosestTemp;

for (let i = 0; i < N; i++) {
    const t = parseInt(inputs[i]);

    if (i===0){
        closestTemp = t
        absoluteClosestTemp = Math.abs(t);
    } else if(Math.abs(t) < absoluteClosestTemp){
        closestTemp = t;
        absoluteClosestTemp = Math.abs(t);
    } else if(Math.abs(t) === absoluteClosestTemp){
        if (t > closestTemp){
			closestTemp = t;
		}
    }
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

if(inputs){
    console.log(closestTemp)
} else {
    console.log('0')
}
