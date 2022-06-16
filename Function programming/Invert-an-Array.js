
function invertArray(arr){
    // for(let i=0;i<=arr.length-1;i++){
    //     if(arr[i]==='0'){
    //         arr[i]='0';
    //     }else{
    //         arr[i]=-arr[i];
    //     }
    // }
    // return arr

    // return arr.map(a=>a!=0 ? -a : 0)
   
}

console.log(invertArray([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5])
console.log(invertArray([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5])
console.log(invertArray([]), [])
console.log(invertArray([0]), [0])
// Mubashir