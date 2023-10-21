PROMISES

		---   Constructing a PROMISE OBJECT   ---
		
const executorFunction = (resolve, reject) => { };
const myFirstPromise = new Promise(executorFunction);

---

const executorFunction = (resolve, reject) => {
  if (someCondition) {
      resolve('I resolved!');
  } else {
      reject('I rejected!'); 
  }
}
const myFirstPromise = new Promise(executorFunction);

---

const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve('Sunglasses order processed.');
  } else {
    reject('That item is sold out.');
  }
};

const orderSunglasses = () => {
  return new Promise (myExecutor);
};

const orderPromise = orderSunglasses();
console.log(orderPromise);


		---   NODE SETTIMEOUT() FUNCTION   ---



console.log("This is the first line of code in app.js.");

const usingSTO = () => {
  console.log('middle string'); 
};

setTimeout(usingSTO, 2500);

console.log("This is the last line of code in app.js.");

/* Output:
This is the first line of code in app.js.
This is the last line of code in app.js.
middle string
*/


		---   ONFULFILLED and ONREJECTED FUNCTIONS   ---

let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};
prom.then(handleSuccess, handleFailure);

or

prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .then(null, (rejectionReason) => {
    console.log(rejectionReason);
  });

		---   Using CATCH() with Promises   ---

Exemple 1:
prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
  
Exemple 2:
  checkInventory(order)
  .then(handleSuccess)
  .catch(handleFailure)


		---   CHAINING MULTIPLE PROMISES   ---

firstPromiseFunction()
.then((firstResolveVal) => {
  return secondPromiseFunction(firstResolveVal);
})
.then((secondResolveVal) => {
  console.log(secondResolveVal);
});


		---   PROMISE.ALL()   ---

let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);

myPromises
  .then((arrayOfValues) => {
    console.log(arrayOfValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });


const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.');
const checkBags  = checkAvailability('bags', 'Favorite Supply Co.');

Promise.all([checkSunglasses, checkPants, checkBags])
  .then(onFulfill)
  .catch(onReject)




