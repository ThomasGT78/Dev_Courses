ASYNC.... AWAIT

Exemple 1:
async function readFiles() {
  let firstSentence = await promisifiedReadfile('./file.txt', 'utf-8')
  let secondSentence = await promisifiedReadfile('./file2.txt', 'utf-8')
  console.log(firstSentence, secondSentence)
}
readFiles()

-------------------------
Exemple 2:
async function withAsync(num){
    if (num === 0){
      return 'zero'
    } else {
      return 'not zero'
    }
  }
 withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})

------------------------
Exemple 3:
const brainstormDinner = require('./library.js')

// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  })
}
nativePromiseDinner()

// async/await version:
async function announceDinner() {
  let meal = await brainstormDinner();
  console.log(`I'm going to make ${meal} for dinner.`); 
}
announceDinner()

--------------------------
Exemple 4:
let myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Yay, I resolved!')
    }, 1000);
  });
}

//WITHOUT AWAIT
async function noAwait() {
 let value = myPromise();
 console.log(value);
}

//WITH AWAIT
async function yesAwait() {
 let value = await myPromise();
 console.log(value);
}

noAwait(); // Prints: Promise { <pending> }
yesAwait(); // Prints: Yay, I resolved!

---------------------------
Exemple 5:
//WITHOUT AWAIT
function nativePromiseVersion() {
    returnsFirstPromise()
    .then((firstValue) => {
        console.log(firstValue);
        return returnsSecondPromise(firstValue);
    })
   .then((secondValue) => {
        console.log(secondValue);
    });
};

//WITH AWAIT
async function asyncAwaitVersion() {
 let firstValue = await returnsFirstPromise();
 console.log(firstValue);
 let secondValue = await returnsSecondPromise(firstValue);
 console.log(secondValue);
};


		---   DEPENDENT PROMISES   ---

async function makeBeans() {
  const type = await shopForBeans();
  const isSoft =  await soakTheBeans(type);
  const dinner = await cookTheBeans(isSoft);
  console.log(dinner);
};
makeBeans();


		---   Handling Errors with  TRY...CATCH  ---

Exemple 1:
async function usingTryCatch() {
 try {
   let resolveValue = await asyncFunction('thing that will fail');
   let secondValue = await secondAsyncFunction(resolveValue);
 } catch (err) {
   // Catches any errors in the try block
   console.log(err);
 }
}
usingTryCatch();

----------------------------
Exemple 2:
async function hostDinnerParty() {
  try {
    let result = await cookBeanSouffle();
    console.log(result + ' is served!')
  } catch(error) {
    console.log(error);
    console.log('Ordering a pizza!');
  }
};
hostDinnerParty();

		---  INDEPENDENT PROMISES   ---
/*Here we don't have to wait the resolution of each function,
we would have to wait 5 x 1sec, if we put await at each variable
but here we wait only 1 sec because they all happen in the same time.
*/
async function serveDinner() {
  const vegetablePromise = steamBroccoli();
  const starchPromise  = cookRice();
  const proteinPromise = bakeChicken();
  const sidePromise = cookBeans();
  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
};
serveDinner()

		----   Await Promise.all()   ----

Exemple 1:
async function asyncPromAll() {
  const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
  for (let i = 0; i<resultArray.length; i++){
    console.log(resultArray[i]); 
  }
}

Exemple 2:
 async function serveDinnerAgain(){
  let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]); 
  
  console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`)
}

serveDinnerAgain()
