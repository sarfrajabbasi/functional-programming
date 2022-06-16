function multiply(arr){
return function(n){
    return arr.map((i)=> i * n);
}
}

// function multiply(arr){
// 	return function(n){
// 		return arr.map((i) => i * n)
// 	}
// }

// let multiply=(arr)=>{
// 	return function(num){
// 		return arr.map(i=>i*num)
// 	}
// }

// function wrapper(f) {
// 	return function(a) {
// 		return function(b) {
// 			return f(a, b);
// 		}
// 	}
// }

// function mul(arr, n) {
// 	return arr.map(x => x * n);
// }

// let multiply = wrapper(mul);

// multiply = arr => a => arr.map(e => e * a)

console.log(multiply([1, 2, 3])(1), [1, 2, 3])
console.log(multiply([1, 2, 3])(2), [2, 4, 6])
console.log(multiply([1, 2, 3])(0), [0, 0, 0])
console.log(multiply([4, 6, 5])(10), [40, 60, 50])
console.log(multiply([])(10), [], "should return an empty array")
// Mubashir