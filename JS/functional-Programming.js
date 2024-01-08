// ======= Pure vs Impure Functions ==========

// Not Pure:-
let namm = "sarfraj";

function greet2() {
  console.log(`hello ${namm}`);
  //   no return statement means function is doing something other than retruning its value,in this case we are logging and don't care about the return value and we interseting in is logging to the console which changing something in the outside world that is side Effect.
}

namm = "mohseen";
greet2(); //hello sarfraj

// Pure
function greet(namm) {
  //  a pure function every time you call it with the same arguments you will get the same result, that is a guarantee.

  // There's a term here called deterministic.So a pure function is deterministic,meaning it's output is totally determined by its inputs.
  return `hello ${namm}`;
}

greet("asif");

//  ===============Side Effect =================

/* 

-> So how to become functional programmer.(use pure functions)(GPT:-User so how to become functional programmer give me main thing and guiding principles)

     1. Do everything with functions:-- make your program become a functions instead of thinking again about a program as like an imperative,series of commands.think program as function(what input and ouput to my functions?) and instead of thinking how should my program run,which is pretty 'imperative' question to be asking ourselves.What should my program take in.And what should my program, return out.


     2. Avoid side effects:- In functional programming is to avoid side effects,only return output do nothing else,and look at input nothing else.
*/

// Imperative:

let namee = "conner";
let greetings = "romi";

console.log(`${greetings} ${namee}`);

greetings = "Howdy";
console.log(`${greetings} ${namee}`);

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

renameThisis("billu barber");

// No-side-effect

function renameThisis2(oldthesis, newName) {
  // instead of updating global thesis object,we create new object.
  // In functional programming we are not update original thing, we take original thing and make new slightly different copy and return out.
  // not data changing bu take some data  and returning new data based on the original data.(data tranformation)
  return {
    name: newName,
    date: oldthesis.date,
  };
}

const thesis2 = renameThisis2(thesis, "conner");
console.log(thesis);
console.log(thesis2);

// Important:--
//The trick with functional programming is to make sure that you'renot changing anything about the outside world andthat whatever that you're returning back is a new thing,a new object instead of that old object that you wanted to update.

// ======= Pure function exercise =========

/* 

#  A pure function has two characteristics:

-> No Side Effects: A pure function has no effect on the program or the world besides outputting its return value

-> Deterministic: Given the same input values, a pure function will always return the same output. This is because its return value depends only on its input parameters, and not on any other information (e.g. global program state) 

*/

// not pure
function getDate() {
  return new Date().toDateString();
}

getDate();

// pure
function getWorkShopDate() {
  return new Date(2020, 11, 4).toDateString();
}

getWorkShopDate()

function toHex(n){
     let hex = n.toString(16);
     return hex.padstart(2,"0");

}

toHex(8)
