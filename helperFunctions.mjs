// head
function head(arr) {
    if (ArrLength(arr) === 0) {
      return undefined;
    }
    return arr[0];
  }
  
  // tail
  function tail([, ...rest]) {
    return rest;
  }
  
  // concat
  function arrConcat(arr1, arr2) {
    return [...arr1, ...arr2];
  }
  
  // length
  function ArrLength(arr) {
    let count = 0;
    for (let _ of arr) {
      count++;
    }
  
    return count;
  }
  function customReduce(array,callback,initialValue){
    // check if the array is not empty base case
    if(ArrLength(array)===0)return initialValue;
    
    // get the first element of the array and apply callback function to initialValue and head Element and store into accumulator
    const accumuator = callback(initialValue,head(array));
    // now recursive call to customRduce with accumuator and rest of the tail array.
    
    return customReduce(tail(array),callback,accumuator)
    }

// Maps:---

function arrMaps(fn, arr) {
  if (ArrLength(arr) === 0) return [];

  return [fn(head(arr))].concat(arrMaps(fn, tail(arr)));
}


  export {arrConcat,ArrLength,head,tail,customReduce,arrMaps}