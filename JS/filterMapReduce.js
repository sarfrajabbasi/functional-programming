function generateNumberArr(num, i = 0, result = []) {
  if (i > num) {
    return result;
  }
  const updateResult = [...result, i];
  return generateNumberArr(num, i + 1, updateResult);
}

const wholes = generateNumberArr(100);
// console.log(wholes);

// helper functions

// head
function head(arr) {
  if (ArrLength(arr) === 0) {
    return undefined;
  }
  return arr[0];
}

// tail
function tail([, ...rest]) {
  return rest;
}

// concat
function arrConcat(arr1, arr2) {
  return [...arr1, ...arr2];
}

// length
function ArrLength(arr) {
  let count = 0;
  for (let _ of arr) {
    count++;
  }

  return count;
}

// Filter:---

function filterArr(predicateFn, arr) {
  // base case reursion
  if (ArrLength(arr) === 0) {
    return [];
  }

  // get first item of the arr
  const firstItem = head(arr);

  // apply the predicate function to the first item
  // if it true create an array with the first item otherwise create empty arr
  const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];

  // recursively call filter on the rest of the arr
  // concatenate the filtered first item with the filtered rest of the  arr
  return arrConcat(filteredFirst, filterArr(predicateFn, tail(arr)));
}

// Even numbers
function isEven(n) {
  return n % 2 === 0;
}

const even = filterArr(isEven, wholes);

// console.log(even);

// Odd number

const odd = filterArr((n) => !isEven(n), wholes);
// console.log(odd);

// Greater then provided number

const greaterThenFour = filterArr((n) => {
  return n > 4;
}, wholes);

// console.log(greaterThenFour);

// isPrime

function isPrime(n) {
  // check if number is less than or equal to 1 in which case it's not prime
  if (n <= 1) return false;

  // create number arr from 0 to 100
  const wholes = generateNumberArr(100);

  // filter out nums greater than 1 and less than n
  const possibleFactors = filterArr((m) => m > 1 && m < n, wholes);
  // log the possible factors
  // console.log(possibleFactors);
  // filter out factors of n from the possible factors
  const factors = filterArr((m) => n % m === 0, possibleFactors);
  // if there are no factors,then n is prime number; otherwise,it's not
  return ArrLength(factors) === 0 ? true : false;
}

const primeNumbers = filterArr(isPrime, wholes);

console.log(primeNumbers);

// Maps:---

function arrMaps(fn, arr) {
  if (ArrLength(arr) === 0) return [];

  return [fn(head(arr))].concat(arrMaps(fn, tail(arr)));
}

// multiply
const doubled = arrMaps((n) => n * 2, wholes);

// divide
const halved = arrMaps((n) => n / 2, wholes);

// mapping fizz and buzz
console.log(wholes);
const fizzBuzz = arrMaps((n) => {
  const fizzed = n % 3 === 0 ? "Fizz" : "";
  const buzzed = n % 5 === 0 ? "Buzz" : "";
  return fizzed || buzzed ? fizzed + buzzed : n;
}, wholes);

// console.log(fizzBuzz);

// Reduce

function reduceMe(reduceFn, initialValue, array) {
  // check if array is not empty base case
  if (ArrLength(array) === 0) return initialValue;

  // use head function to get first element of the array and apply reduce function to initialValue and head element and store in newInitialValue
  const newInitialValue = reduceFn(initialValue, head(array));

  // now recurisve call to reduceMe with the updated newInitialValue and rest of the array tail(array)
  return reduceMe(reduceFn, newInitialValue, tail(array));
}

function customReduce(array,callback,initialValue){
// check if the array is not empty base case
if(ArrLength(array)===0)return initialValue;

// get the first element of the array and apply callback function to initialValue and head Element and store into accumulator
const accumuator = callback(initialValue,head(array));
// now recursive call to customRduce with accumuator and rest of the tail array.

return customReduce(tail(array),callback,accumuator)
}

const sumOfArr = reduceMe((acc,val)=> acc+val,0,wholes);
const sumOfArr2 = customReduce(wholes,(acc,val)=>acc+val,0);
console.log(sumOfArr);
console.log(sumOfArr2);
const maxValue = reduceMe((acc,val)=> acc > val ? acc:val,0,wholes);
const maxValue2 = customReduce(wholes,(acc,val)=> acc > val ? acc:val,0);
console.log(maxValue);
console.log(maxValue2);