/*
Basic concept of functional programming and core ideas that make us life long functional programmer.

             <==== LEARN =====>

Q. What will we learn in this course?

Ans ==> we will learn about basic principle of the functional programming paradigm,such as:

   --> talk about pure functions and side-effects why want to avoid them.

   --> talk about programms as piplines through which data flows between functions.

   --> talk about higher order functions,first class functions,closure,currying.
   --> Our focus in the core ideas.

   --> talk about immutablity and changing data in a way that they works  with functional programming.


 ------------------XXXXX------------------

=========== Outline/content for that i learn ===========

1. Q. What is functional programming?

    -> Pure Functions vs. Side Effects
    -> Time, state, and (in)sanity
    -> Imperative vs. Declarative programming

2. Staying out of the loop with recursion.
    -> Iteration vs. Recursion.
    -> Recursive function basics.
    -> Exercise: Iteration vs Recursion.
    -> The problem with the problem with the problem with recursion.

 3. Flying first-class with higher-order functions
      -> Functions as values.
      -> Functions that operate on functions.
      -> Exercise: Filter, Map, Reduce.
  
 4. Getting closure
      -> Closures & "remembering" scope
      -> Partial application
      -> Currying
      -> Exercise: Closures & Currying.

 5.  It's functions all the way down
      -> Data flow
      -> Pipelining
      -> Function composition
      -> Exercise: Function Composition
  
 6.   Immutability
      -> Time, state, and (in)sanity, revisited
      -> Copying vs. Mutating
      -> The pitfalls of immutability
      -> Exercise: Avoiding Mutation    
*/

// ================= START HERE =================

/* 
Q. What is functional programming and why are people so excited about it?

Ans:- The ideas behind the functional programming is that it is a style of coding,a type of programming that some languages support and maybe some others don't.

   # Examples:-- Haskell,F#,Erlang,Clojure,Elm,Scala,OCaml.

   # help
 --> Learn functional programming also helped  get better at Javascript and make you beccome a more productive JS Developer.

   # other way to understand F.P;
 --> One other way to understand functional programming instead of thinking of as style of writing code is as a programming paradigm(mean worldview or mindset or a way of understanding the world).

   # different types of programming paradigms
 --> Many different types of programming paradigms that software developers have developed over the course of computing history.But there are two really main distinct paradigms:--


   # functional programming Vs imperative or OO programming

 Q. What does functional code look like? how is different from imperative or OO code?

       1. Non-functional side(imperative programming:- think of imperative programming as understanding the world of computing as a series of commands/Where programs are a series of instructions).

       --> And one kind of sub paradigm of the imperative mindset is object-oriented programming and in object-oriented programming, we use concepts like encapsulation,where we have objects that keep internal values to themselves,and they can change those values that we call state
       and also they can talk to each other thorugh messages that they pass(call methods on other objects in the program)

       2. Declarative programming (world view):- we declare,what i would like from you computer And we let the computer or the program figure out how it's going to do that computation or how it's going to get it to us(let the implementation to figure it out)

       --> So the idea with declarative programming is to move away from this command oriented imperative style And functional programming is one type of a declarative paradigm.

       # Pure Functions:----

       --> Functional Programming boils down to a single thing or idea, pure functions." what are they?  A pure function is a function like we're used to writing in code.But it's special in that it only takes its input in and that is the only thing, the only data that it looks at about the world,and all that it does is return its output."So we could think about pure functions as only input in and only output out.

       --> but what we write function day to day that  similar but it also communicates with the outside world,So it also might be reading things from the outside world to help it make its computation,like what is time is it? Or what profile picture does this user have stored on their profile things like that aren't direct inputs to the function,but the function may be uses to do its computation.

       --> And similarly, the function might send something back to the outside world other than its return value.
       --> Even though none of those are actually the return value, the output of the function.
       --> That communication with the outside world that sometimes our day to day functions do, that's what we call "side effects".It's basically any time the function has any relation to the outside world other than through its input arguments and its return value.It is doing some kind of side effect, and  that is what is not allowed in a pure function.

       --> So a pure function,to put it in another way is a function that does not have any side effects.the only information it needs is whatever is passed in to it as an input, and the only thing it does in the world is return its output value.

*/

// ======= Pure vs Impure Functions ==========

/*
Q. What a pure function looks like, and what a not pure function looks like?
--> And keeping in mind that, pure functions have no side effects.

--> In the not pure function, the side effect being if that function is called at a later time when the variable changes,you might have an unexpected output.So the pure function you have an expected output,you're gonna pass it one thing and it's gonna return one thing.

*/

// Not Pure:-
let namm = "sarfraj";

function greet2() {
  console.log(`hello ${namm}`);
  //   no return statement means function is doing something other than retruning its value,in this case we are logging and don't care about the return value and we interseting in is logging to the console which changing something in the outside world that is sideEffect.
}

namm = "mohseen";
greet2(); //hello sarfraj

// Pure
function greet(namm) {
  //  a pure function every time you call it with the samearguments in this case,Every time you call it with the same argument,you will get the same result, that is a guarantee.

  // There's a term here called deterministic.So a pure function is deterministic,meaning it's output is totally determined by its inputs.
  return `hello ${namm}`;
}

greet("asif");

/* 
-> Q. A Pure function,if it's not allowed to do anything in the world except return it's output  value,its doesn't really do anything like don't get log output,don't get my profile picture updated on the website.so what gives?How do we do anything in functional programming?

-> Q.How do you be productive as a computer programmer without ever doing sideeffects?Without ever writing things to consoles orstoring things in databases or updating things elsewhere?

Ans:- When we're doing functional programming,we are concerned with the kind of computational aspect of our programs,So What functional programmers do to be able to be productive, and to be able to actually affect the world.Because at the end of the day what we're trying to do when we write programs,is to take all of those side effects.All of those logs, and database transactions, and inputs and outputs from the outside world.And essentially push them to the outside of the program,so that they're kind of the very, very last step in doing any of this.And the inside of the program is all totally pure.

-> it means that, anything going on inside of your program,all the logic, all of the business logic.And the computations and the manipulations of data that are usually the tricky parts of getting those programs right,all of that becomes much more easier to deal with.Because it is more predictable, it's safer,And those impure side effects,we can force out to the outer edges of our program.

-> Because everything inside the program is deterministic,as we said is a great consequence of pure functions.

*/

// ========== Why Functional JS =========

/* 
--> becoz functions are determninistic and we get code that's much more predictable,means that there's also less opportunity for bugs to arise and it's safer and it's more dependable we can say and also this mean it's much easier to test and debug and find places where there are problems,so it's much easier to test our code and to mainain our code and think about the interactions of different parts of program coz they each become kind of these isloated pure deterministic units and how we can build complex programs out of simple & pure functions.

--> function programming have lots of advantages and so especially for writing code,like data transformations.

-> becoz out objective here is to understand our programs better write code that's easier to test to debug make our lives easier as developers.
->  Object-oriented JavaScript is hard,programming in a functional style in JavaScript,that became so much easier, because again, the functions are predictable.
->  Great rule of thumb.That each function should do one kind of operation or one kind of computation. 

->important to focus on the purity of the function and the predictability of the function.

*/

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

