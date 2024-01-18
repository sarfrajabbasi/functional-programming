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

  export {arrConcat,ArrLength,head,tail}