ITERATORS

--  Give a function another name  --

const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};

const busy = announceThatIAmDoingImportantWork;

busy(); 		// To call the fonction
console.log(busy.name); 
//Output: announceThatIAmDoingImportantWork


const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (func, val) => {
  let num1 = func(val);
  let num2 = func(val);
  if (num1 === num2){
    return num1;
  } else {
      return 'This function returned inconsistent results';
	  }
};

checkConsistentOutput (addTwo,4);