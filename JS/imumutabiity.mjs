const prePush = [1, 2, 3];
const postPush = cutomPush(prePush, 4);

function cutomPush(arr, el) {
  return [...arr, el];
}

// log

// console.log(prePush);
// console.log(postPush);

// update value

const preUpdate = ["spellling", "is", "hard"];
const postUpdate = update(0, "spelling", preUpdate);

// function update(index, value, arr) {
//   return arr
//     .slice(0, index)
//     .concat([value])
//     .concat(arr.slice(index + 1));

// }
function update(index, value, arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === index) {
      newArr[i] = value;
    } else {
      newArr[i] = arr[i];
    }
  }
  return newArr;
}

const updatedArray = update(0, "correct", preUpdate);
// console.log(preUpdate);
// console.log(updatedArray);
// console.log(postUpdate)

// pop:--

const prePop = [1, 2, 3, "popMe"];

const postPop = customPop(prePop);

function customSlice(arr, startindex, endIndex) {
  let newArr = [];
  endIndex = endIndex || arr.length;
  if (endIndex < 0) {
    endIndex = arr.length - (-endIndex);
  }

  for (let i = startindex; i < endIndex; i++) {
    newArr = cutomPush(newArr, arr[i]);
  }

  return newArr;
}

function customPop(arr) {
  return customSlice(arr,0, -1);
}

const originalArray = [1, 2, 3, 4, 5];
const slicedArray = customSlice(originalArray, 1, 4);

// log
console.log(prePop);
console.log(postPop);
console.log(originalArray);
console.log(slicedArray);
