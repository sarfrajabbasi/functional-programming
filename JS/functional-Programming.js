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

--> In the not pure function, the side effect being if that function is called at a later time when the variable changes,you might have an unexpected output.So the pure function you have an expected output,you're gonna pass it one thing and it's gonna return one thing.

*/

// Not Pure:-
let namm = "sarfraj";

function greet2() {
  console.log(`hello ${namm}`);
//   no return statement means function is doing something other than retruning its value,in this case we are logging and don't care about the return value and we interseting in is logging to the console which changing something in the outside world that is sideEffect.
}

namm = "mohseen"
greet2(); //hello sarfraj


// Pure
function greet(namm) {
     //  a pure function every time you call it with the samearguments in this case,Every time you call it with the same argument,you will get the same result, that is a guarantee.

     // There's a term here called deterministic.So a pure function is deterministic,meaning it's output is totally determined by its inputs.
    return  `hello ${namm}`;
}

greet('asif');

/* 
-> Q. A Pure function,if it's not allowed to do anything in the world except return it's output  value,its doesn't really do anything like don't get log output,don't get my profile picture updated on the website.so what gives?How do we do anything in functional programming?

-> Q.How do you be productive as a computer programmer without ever doing sideeffects?Without ever writing things to consoles orstoring things in databases or updating things elsewhere?

Ans:- When we're doing functional programming,we are concerned with the kind of computational aspect of our programs,So What functional programmers do to be able to be productive, and to be able to actually affect the world.Because at the end of the day what we're trying to do when we write programs,is to take all of those side effects.All of those logs, and database transactions, and inputs and outputs from the outside world.And essentially push them to the outside of the program,so that they're kind of the very, very last step in doing any of this.And the inside of the program is all totally pure.

-> it means that, anything going on inside of your program,all the logic, all of the business logic.And the computations and the manipulations of data thatare usually the tricky parts of getting those programs right,all of that becomes much more easier to deal with.Because it is more predictable, it's safer,And those impure side effects,we can force out to the outer edges of our program.

-> Because everything inside the program is deterministic,as we said is a great consequence of pure functions.

*/