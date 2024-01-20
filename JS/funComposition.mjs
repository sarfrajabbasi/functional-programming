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
import {
  ArrLength,
  tail,
  head,
  customReduce,
  arrMaps,
} from "../helperFunctions.mjs";

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
const showSomeLove = pipeline(pluralize, heart, exclaim2);
const loveSomeShow = pipeline(exclaim, heart, pluralize);
const composedPipe = pipeline(pluralize, pipeline(heart, exclaim));
const composedPipe2 = pipeline(pipeline(pluralize, heart), exclaim);

const piplineLove = showSomeLove("pipeline");
const functionLove = showSomeLove("pure function");
const coffeeLove = showSomeLove("coffee break");
const wrongOrder = loveSomeShow("pipeline");
const compositionLove = composedPipe("composition");
const compositionLove2 = composedPipe2("composition");

// Logs:--
console.log(piplineLove);
console.log(functionLove);
console.log(coffeeLove);
console.log(wrongOrder);
console.log(compositionLove);
console.log(compositionLove2);

//  Pipeline with reduce:--

function reducePipeline(...functions) {
  return (input) => customReduce(functions, (acc, fn) => fn(acc), input);
}

// Snake Charming:--

function desnake(snake_case_string) {
  const desnakeing = snake_case_string.split("_");
//   console.log(desnakeing);
  return desnakeing
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
}

function capitalizeAll(stringArray) {
  return arrMaps(capitalizeFirstLetter, stringArray);
}

function camelize(strArr) {
  const camelizeIt = [head(strArr)].concat(capitalizeAll(tail(strArr)));
  return camelizeIt
}
function Pascalize(strArr) {
    const PascalizeIt = capitalizeAll(strArr);
    return PascalizeIt.join('')
  }
 
function kebablize(strArr){
  const kebab = strArr.join('-').toLowerCase();
  return kebab
}

function concatentate(strArr) {
  return customReduce(strArr,(acc, str) => acc + str, "");
}

function hyphenate(strArr) {
  return customReduce(tail(strArr),(acc, str) => [acc, str].join("-"),head(strArr));
}


function underscore(strArr){
  return customReduce(tail(strArr),(acc,str)=> [acc,str].join("_"),head(strArr))
}

function snakeToCamel(snake_case_string) {
  const pipe = pipeline(desnake, camelize, concatentate);

  return pipe(snake_case_string);
}

function screamLize(strArr){
  const scream = arrMaps((e)=> e.toUpperCase(),strArr);
  return scream
}

// const toPascalCase = (str) => str
//   .split(/\s+/)
//   .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//   .join('');

// Function to convert to kebab-case
const toKebabCase = (str) => str
  .split(/\s+/)
  .join('-')
  .toLowerCase();

// Function to convert to SCREAMING_SNAKE_CASE
const toScreamingSnakeCase = (str) => str
  .split(/\s+/)
  .join('_')
  .toUpperCase();

// Function to convert to SCREAMING-TRAIN-CASE
const toScreamingTrainCase = (str) => str
  .split(/\s+/)
  .join('-')
  .toUpperCase();

console.log(snakeToCamel("super_cool_variable"));
console.log(snakeToCamel("very_long_variables_should_also_work"));

console.log(snakeToCamel("edgecase"));


// Challenge: Now, complete the snakeToTrain function below to reformat a string from snake_case to Train-Case. How many of the single-argument functions you used in snakeToCamel can you reuse? Which new ones do you need?

const snakeToTrain = pipeline(desnake, capitalizeAll, hyphenate);

console.log(snakeToTrain('snake_case'));

// Challenge: Write more functions to translate to more cases, e.g. PascalCase, kebab-case, SCREAMING_SNAKE_CASE, SCREAMING-TRAIN-CASE, etc. Try to use pipelining to reuse as much code as possible!

const snakeTOPascal = pipeline(desnake, capitalizeAll, Pascalize);

console.log(snakeTOPascal('snake_case_asdsa'));

//kebab-case
const snakeTokebab = pipeline(desnake,kebablize)

console.log(snakeTokebab('very_long_variables_should_also_work'));

//SCREAMING_SNAKE_CASE
const snakeToScream = pipeline(desnake,screamLize,underscore);

console.log(snakeToScream('very_long_variables_should_also_work'));

// SCREAMING-TRAIN-CASE
const snakeToScreamTrain = pipeline(desnake,screamLize,hyphenate);

console.log(snakeToScreamTrain('very_long_variables_should_also_work'));