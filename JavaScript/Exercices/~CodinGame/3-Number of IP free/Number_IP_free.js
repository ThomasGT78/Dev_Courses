
const inputCount = 1

for (let i = 0; i < inputCount; i++) {
    const ipaddress = "12434424";
    var last2 = ipaddress.slice(-2);
    number = 32-parseInt(last2)
    neNum = Math.pow(2,number)
    neNum -= 2
    console.log(neNum);
}