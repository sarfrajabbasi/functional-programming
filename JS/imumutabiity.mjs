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


/* 

**Introduction:**
The passage introduces a discussion on solutions to exercises focused on avoiding mutation in JavaScript. It mentions that the solutions are available in a Fork notebook and encourages readers to explore it. The primary emphasis is on avoiding mutating array methods and exploring creative approaches to implement non-mutating functions.

**Main Points:**
1. **Avoiding Mutating Array Methods:**
   The main emphasis is on not using mutating array methods and exploring alternatives to implement non-mutating functions. Techniques such as spread syntax and non-mutating array methods like `slice` and `concat` are suggested for achieving this goal.

2. **Examples - Non-Mutating Push, Update, and Pop:**
   Examples of non-mutating solutions are provided for common array operations such as push, update (index assignment), and pop. For instance, using spread syntax for push, and non-mutating methods like `slice` and `concat` for update and pop.

3. **Chaining Non-Mutating Methods:**
   The passage introduces a chaining approach for non-mutating operations, demonstrating a pipeline of methods such as `slice` and `concat` to update values in an array without modifying it in place.

4. **Discussion on Immutable Data Structures Libraries:**
   The passage briefly discusses different libraries, specifically mentioning Immutable JS and Mori, for working with immutable data structures in JavaScript. It touches upon differences in syntax, terminology (e.g., lists in Immutable JS and produce function in Mori), and encourages readers to explore and form preferences.

5. **Efficiency Concerns and Benefits of Libraries:**
   The passage addresses efficiency concerns related to copying data in immutable structures. It discusses the benefits of using libraries that leverage persistent data structures for efficient updates, especially in scenarios with large data structures or performance considerations.

**Conclusion:**
The passage concludes with an encouragement for readers to try out the provided exercises, explore the documentation of immutable data structure libraries, and delve deeper into the world of functional programming. It emphasizes the benefits of these libraries for working with deeply nested data structures and suggests checking the documentation for comprehensive insights.
*/