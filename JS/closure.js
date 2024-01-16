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

