const F = 50;   // initial number of food
const P = 6;    // number of people on the island
const E = 3;    // number of food obtained per day
const S = 17;    // number of food consumed daily per person


let stock = F;
let foodUsed = E*P;

for (let i=1; i<50; i++ ){
    stock = stock-foodUsed
    if (stock <= 0){
        console.log(i)
        break
    } else {
        stock += S
    }
    if (stock>F){
        console.log('Forever')
        break
    }
    
}