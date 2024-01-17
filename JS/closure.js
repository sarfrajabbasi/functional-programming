// example:--

function makeAdjactifier(adjective) {
  return function (noun) {
    return adjective + " " + noun;
  };
}

const coolify = makeAdjactifier("cool");

console.log(coolify("workshop"));
console.log(coolify("drink"));

// currying:-

function greet(greeting, name) {
  return `${greeting} ${name}`;
}

function curryGreet(greeting) {
  return function (name) {
    return `${greeting} ${name}`;
  };
}

const greetItal = curryGreet("hello");
console.log(greetItal("sarfraj"));
console.log(greetItal("asif"));
console.log(greetItal("meme"));
console.log(greetItal("ibola"));
console.log(greetItal("corona"));
console.log(greetItal("black death"));
console.log(greetItal("bird flu"));

// function customFlat(arr,result=[]){
//     arr.forEach((element)=>{
//         if(Array.isArray(element)){
//             result = result.concat(customFlat(element))
//         }else{
//             result.push(element)
//         }
//     })
//     return result
// }

// function createNestedArray(depth, initialValue) {
//     if (depth === 0) {
//         return initialValue;
//     } else {
//         return createNestedArray(depth - 1, [initialValue]);
//     }
// }

// const nestedArray = createNestedArray(10, [12,3,[1,2,3],[12,3,4,4,[1,2,3,[6,5,4]]]]);
// console.log(nestedArray);
// console.log(customFlat([12,3,[1,2,3],[12,3,4,4,[1,2,3,[6,5,4]]]]));
// console.log(customFlat(nestedArray));

// Partial Application & Currying:--


// closure Excercise:-
function writeMessage(message, salutation, name) {
  return `<p style="padding:3em;font-family:monospace">${message}<br><br>${salutation},<br>${name}</p>`;
}

const message1 = writeMessage(
  "You're doing amazing! Hopefully these exercises help you get a bit _closure_ to your programming goals.",
  "Keep _currying_ on",
  "Functional Pungrammer"
);

console.log(message1);

function signMessageFrom(name) {
  return (message, salutation) => writeMessage(message, salutation, name);
}

const writeFriendlyNote = signMessageFrom("Your best bud");

const message2 = writeFriendlyNote("Hey pal! Party at my place tonight, bring snacks!", "See ya");

console.log(message2);


function signMessageWith(message,name){
  return (message,salutation)=> writeMessage(message,salutation,name);
}

const writeBusinessMemo = signMessageWith('Best');

const message3 = writeBusinessMemo("Hi, Peter. We need to talk about your TPS reports.", "Bob");

function makeSignature(salutation,name){
  return message => writeMessage(message,salutation,name)
}

const writeLoveLetter = makeSignature("Thine evermore", "William");

const message4 = writeLoveLetter(
  "Shall I compare thee to a summer's day? Thou art more lovely and more temperate."
);

console.log(message4);

// currying Excercise:

function quote(name,year,text){
   return md`<p style="font-size:smaller;padding:1em;font-family:monospace;">"${text}"<br>- ${name} (${year})</p>`;
}



stillGrumpyQuotes = html`${[
  curriedQuote('Guido van Rossum')(2001)(
    "Don't you hate code that's not properly indented?"
  ),

  quoteCrockford(2005)('There are no good texts on JavaScript programming.'),

  quoteCrockford(2008)(
    'JavaScript is an astonishing language, in the very worst sense.'
  ),

  quoteDijkstra(1978)(
    'Object oriented programming is an exceptionally bad idea which could only have originated in California.'
  ),

  quoteDijkstra75(
    'By claiming that they can contribute to software engineering, the soft scientists make themselves even more ridiculous.'
  ),

  quoteDijkstra75(
    "Besides a mathematical inclination, an exceptionally good mastery of one's native tongue is the most vital asset of a competent programmer."
  ),

  quoteDijkstra75(
    "The irony of my self-contradiction is lost on me. [Just kidding, he didn't actually say this one - making it all the more true!]"
  )
]}`