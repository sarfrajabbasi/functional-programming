function factory(a){
    return (function(arr){
        return arr.map(x =>x/num)
    })
}
// ***********************************
function factory(num){
    return (function(arr){
      return arr.map(x => x/num)
    })
  }
// ********************************************
  const factory = num => arr => arr.map(v => v / num);

console.log(factory(15)([30, 45, 60]), [2, 3, 4])
console.log(factory(2)([2, 4, 6]), [1, 2, 3])
console.log(factory(6)([60, 30]), [10, 5])
console.log(factory(7)([14, 21, 49]), [2, 3, 7])
console.log(factory(5)([10, 5, 20]), [2, 1, 4])
console.log(factory(10)([100, 10, 60]), [10, 1, 6])