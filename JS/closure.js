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

const greetItal = curryGreet('hello');
console.log(greetItal('sarfraj'));
console.log(greetItal('asif'));
console.log(greetItal('meme'));
console.log(greetItal('ibola'));
console.log(greetItal('corona'));
console.log(greetItal('black death'));
console.log(greetItal('bird flu')); 