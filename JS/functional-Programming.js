// ======= Pure vs Impure Functions ==========

// Not Pure:-
let namm = "sarfraj";

function greet2() {
  console.log(`hello ${namm}`);
  // No return statement means function is doing something other than retruning its value,in this case we are logging and don't care about the return value and we interseting in is logging to the console which changing something in the outside world that is side Effect.
}

namm = "mohseen";
// greet2(); //hello sarfraj

// Pure
function greet(namm) {
  //  a pure function every time you call it with the same arguments you will get the same result, that is a guarantee.

  // There's a term here called deterministic.So a pure function is deterministic,meaning it's output is totally determined by its inputs.
  return `hello ${namm}`;
}

greet("asif");

//  =============== Side Effect =================

/* 
-> So how to become functional programmer.(use pure functions)(GPT:-User so how to become functional programmer give me main thing and guiding principles)
*/

// Imperative:

let namee = "conner";
let greetings = "romi";

// console.log(`${greetings} ${namee}`);

greetings = "Howdy";
// console.log(`${greetings} ${namee}`);

// Functional:(pure)
function greetMe(greetings, namee) {
  // functional programs are a really great fit for things like again data transformation where you know what type of thing is coming in,what thing you want to come out.
  return `${greetings} ${namee}`;
}

greetMe("hello", "sarfraj");
greetMe("howdy", "conner");

// Side Effects:-

const thesis = { name: "bill", date: 1993 };

function renameThisis(newName) {
  // reading data from outside world
  thesis.name = newName;
  console.log("Renamed");
}

// renameThisis("billu barber");

// No-Side-Effect

function renameThisis2(oldthesis, newName) {
  // Instead of updating global thesis object,we create new object.
  // In functional programming we are not update original thing, we take original thing and make new slightly different copy and return out.
  // Not data changing but take some data  and returning new data based on the original data.(data tranformation)
  return {
    name: newName,
    date: oldthesis.date,
  };
}

const thesis2 = renameThisis2(thesis, "conner");
// console.log(thesis);
// console.log(thesis2);

// Important:--

// The trick with functional programming is to make sure that you're not changing anything about the outside world and that whatever that you're returning back is a new thing,a new object instead of that old object that youa wanted to update.



// ======= Pure function exercise =========

/* 

#  A pure function has two characteristics:

-> No Side Effects: A pure function has no effect on the program or the world besides outputting its return value

-> Deterministic: Given the same input values, a pure function will always return the same output. This is because its return value depends only on its input parameters, and not on any other information (e.g. global program state) 

*/

// Not Pure
function getDate() {
  return new Date().toDateString();
}

getDate();

// Pure
function getWorkShopDate() {
  return new Date(2020, 11, 4).toDateString();
}

getWorkShopDate();

function toHex(n) {
  // pure
  let hex = n.toString(16);
  return hex.padStart(2, "0");
}

toHex(8);

function rgbToHex(R,G,B){
  // pure
  return "#" + [toHex(R),toHex(G),toHex(B)].join("");
}
const rgb_to_hex = rgbToHex(223,45,124)

// console.log(rgb_to_hex);

function setColor(R,G,B){

  const hex = rgbToHex(R,G,B);
  // not pure
  const colorMe = document.getElementById('color-me');

  colorMe.setAttribute('style','color:' + hex )
}

const set_color = setColor(233,146,134);
// console.log(set_color);

async function readJsonFile(filename) {
  // not pure
  const file = await fetch(
    'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson'
  );
  return await file.json();
}


function writeJsonString(object) {
  // pure
  return JSON.stringify(object, null, 2);
}

function exclusiveOr(A, B) {
  // pure
  return (A || B) && !(A && B);
}

function computeTruthTable(operator) {
  // pure
  const truthValues = [true, false];
  const table = [];
  for (const A of truthValues) {
    for (const B of truthValues) {
      const value = operator(A, B);
      table.push({ A, B, value });
    }
  }
  return table;
}

function showTruthTable(operator) {
  console.table(computeTruthTable(operator));
}

// showTruthTable(exclusiveOr);



