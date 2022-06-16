function isRepdigit(Num){
    
      Num = Num.toString().split('');
      let letter = Num[0];
      for(var a = 0;a<Num.length;a++){
          if(Num[a] !== Num[0]){
              return false;
            
        }
    
    }
    return true;
}

// // ********************************
// function isRepdigit(num) {
// 	let arr = String(num).split('');
// 	let letter = arr[0];
// 	for (let i = 0; i < arr.length; i++){
// 		if (arr[i] !== letter) return false
// 	};
// 	return true;
// }
// // *************************************
// function isRepdigit(num) {
// 	return new Set('' + num).size === 1
// }
// // ***********************************
// function isRepdigit(num) {
// 	return String(num).split('').every((x, i, arr) => x=== arr[0])
// }
// // *************************************8
// function isRepdigit(num) {
// 	num += "";
// 	for (i = 0; i < num.length; i++) {
// 			if (num[i] != num[0]) {
// 					return false;
// 			}
// 	}
// 	return true;
// }


console.log(isRepdigit(6), true)
console.log(isRepdigit(66), true)
console.log(isRepdigit(666), true)
console.log(isRepdigit(6666), true)
console.log(isRepdigit(1001), false)
console.log(isRepdigit(-11), false, "The number must be >= 0")