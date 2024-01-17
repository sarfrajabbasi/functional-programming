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

console.log(hypUp('JS'));
console.log(hypUp('FP'));