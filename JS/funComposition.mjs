// Example:

var ender = (ending) => (input) => input + ending;

var adore = ender(" rocks");
var announce = ender(" y,all");
var exclaim = ender("!");

var hypUp = (x) => exclaim(announce(adore(x)));

/* 
-  adore('JS') returns 'JS rocks'
-  announce('JS rocks') returns 'JS rocks y,all'
-  exclaim('JS rocks y,all') returns 'JS rocks y,all!'

*/

console.log(hypUp("JS"));
console.log(hypUp("FP"));

// function composition exercise:-

// Pipelining:--

// helper function import
import { ArrLength, tail, head } from "../helperFunctions.mjs";

function pipeline(...functions) {
  // agar koi function pass nahi kiya toh toh ye identity function return karega joh input wasie hi return kar dega.
  if (ArrLength(functions) === 0) return (input) => input;

  // agar sirf ek function pass kiya h toh yeh woh function return karega joh input ko modify karega.

  if (ArrLength(functions) === 1) return (input) => head(functions)(input);

  // agar multiple functions pass kiye gaye hain,toh yeh ek recursive approach use karta hai or phele function ko call karta h head ke through (head(functions)(input))uske baad baki functions keliye pipline(...tail(functions)) use call karta hai,joh intermediateInput mean pichale function ka output woh lekar new function ko call karta h

  return function (input) {
    const intermediateInput = head(functions)(input);

    return pipeline(...tail(functions))(intermediateInput);
  };
}

// Test the Functions

const pluralize = (singulerWord) => singulerWord + "s";

const heart = (word) => "I ❤️ " + word;

const exclaim2 = (sentence) => sentence + "!";

// Example:-
const showSomeLove = pipeline(pluralize,heart,exclaim2);
const loveSomeShow = pipeline(exclaim, heart, pluralize);
const composedPipe = pipeline(pluralize, pipeline(heart, exclaim))

const piplineLove = showSomeLove('pipeline')
const functionLove = showSomeLove('pure function');
const coffeeLove = showSomeLove('coffee break')
const wrongOrder = loveSomeShow('pipeline')
const compositionLove = composedPipe('composition') 
// Logs:--

console.log(piplineLove);
console.log(functionLove);
console.log(coffeeLove);
console.log(wrongOrder);
console.log(compositionLove);