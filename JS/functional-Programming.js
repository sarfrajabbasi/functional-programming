/* basic concept of functional programming and core ideas which make us life long functional programmer.

Q. What is functional programming and why are people so excited about it?

Q. What does functional code look like? how is different from imperative or OO code?


<==== LEARN=====>

  Q. What will we learn in this course?

Ans ==> we will learn about basic principle of the functional programming paradigm,such as:

   --> we gonna talk about pure functions and side-effects why want to avoid them.
   -->we gonna talk about programms as piplines through which data flows between functions.
   --> talk about higher order functions,first class functions,closure,currying.our focus is not gonna be on the terminology so much,but those core ideas.
   --> talk about immutablity and changing data in a way that's functional, that works  with functional programming.

   {----
-> construct programs from pure, “input in-output out” functions through which data flows.

-> use higher-order functions like map & filter instead of iterative loops, and closures instead of objects & classes.

-> avoid mutation (changing things in-place), and use immutable data structures for efficiency
-----}

=========== Outline/content for that i learn ===========

1. Q. What is functional programming?

    -> Pure Functions vs. Side Effects
    -> Time, state, and (in)sanity
    -> Imperative vs. Declarative programming

2. Staying out of the loop with recursion
    -> Iteration vs. Recursion
    -> Recursive function basics
    -> Exercise: Iteration vs. Recursion
    -> The problem with the problem with the problem with recursion.

 3. Flying first-class with higher-order functions
      -> Functions as values
      -> Functions that operate on functions
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
Q. What is functional programming?
Ans:- The ideas behind  functional programming is that it is a style of coding,a type of programming that some languages support and maybe some others don't. 

 --> learn functional programming also helped  get better at Javascript and make you beccome a more productive JS Developer.

 --> one other way to understand functional programming instead of thinking of as style of writing code is as a programming paradigm(mean worldview or mindset or a way of understanding the world).

 --> many different types of programming paradigms that softwaredevelopers have developed over the course of computing history.

 --> But there are two really main distinct paradigms,

       1. Non-functional side(imperative programming:- think of imperative programming as understanding the world of computing as a series of commands/Where programs are a series of instructions).

       --> And one kind of sub paradigm of the imperative mindset is object-oriented programming and in object-oriented programming, we use concepts like encapsulation,where we have objects that keep internal values to themselves,and they can change those values that we call state.

       2. Declarative programming:- we declare,what i would like from you computer.And we let the computer or the program figure out how it's going to do that computation or how it's going to get it to us.

       --> So the idea with declarative programming is to move away from this command oriented imperative style.And functional programming is one type of a declarative paradigm.

       --> functional programming boils down to a single thing, pure functions." what are they?A pure function is a function like we're used towriting in code.But it's special in that it only takes its input in and that is the only thing, the only data that it looks at about the world,and all that it does is return its output."So we could think about pure functions as only input in and only output out.

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

*/

// Pure:-
let namm = "sarfraj";

function greet() {
  console.log(`hello ${namm}`);
}

greet(); //hello sarfraj

function greet(namm) {
  console.log(console.log(`hello ${namm}`));
}
