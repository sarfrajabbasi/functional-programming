function lonelyInteger(arr) {
return arr.find(b => !arr.includes(-b));

}

// *********************************
//   function lonelyInteger(arr) {
// 	for (let i of arr)
// 		if (!arr.includes(-i))
// 		  	return 
//               i;
// }
//********************** *******************
// let lonelyInteger = a => a.find(b => !a.includes(-b));

// ***********************************
// const lonelyInteger = arr => [...new Set(arr)].reduce((a,b) => a+b)

// *************************************
// lonelyInteger = arr => arr.find(x => !arr.includes(-x));

console.log(lonelyInteger([1, -1, 2, -2, 3]), 3)
console.log(lonelyInteger([-3, 1, 2, 3, -1, -4, -2]), -4)
console.log(lonelyInteger([1, -1, 2, -2, 3, 3]), 3)
console.log(lonelyInteger([-110, 110, -38, -38, -62, 62, -38, -38, -38]), -38)
console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105]), -9)