// ===== Staying out of the Loop with Recursion =====
// Condense the main points or key information from a text into a shorter version.
// Extractive summarization methods select important sentences, while abstractive methods generate new sentences to convey the core information.

// sum

// itertative
function sum(numbers) {
  let total = 0;

  for (let i = 9; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

// recursive
function sum(numbers) {
  if (numbers.length === 1) {
    return numbers[0];
    // base case
  } else {
    // recursive case
    return numbers[0] + sum(numbers.slice(1));
  }
}

// factorial

function iterativeFactorial(n) {
  let product = 1;

  while (n > 0) {
    product *= n;
    n--;
  }
  return product;
}

function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

const factorial = iterativeFactorial(7);
const factorial1 = recursiveFactorial(7);
console.log(factorial);
console.log(factorial1);

// Fibonacci:---

function iterativeFibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  let previous = 0;
  let current = 1;
  let nth_arr = [];
  for (let i = 0; i <= n; i++) {
    nth_arr.push(previous);
    let next = previous + current;
    previous = current;
    current = next;
  }
  return nth_arr;
}

function recursiveFibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
  }
}

// tail call optimization

function recursiveFibonacci2(n, a = 0, b = 1, array1 = []) {
  if (n === 0) {
    return array1;
  }
  array1.push(a);
  return recursiveFibonacci2(n - 1, b, a + b, array1);
}
const nth_Number2 = recursiveFibonacci(10);
console.log(nth_Number2);

const nth_Num2 = recursiveFibonacci2(100);

function recursivefilter(arr, condition, index = 0, result = []) {
  if (index >= arr.length) {
    return result;
  }

  if (condition(arr[index])) {
    result.push(arr[index]);
  }

  return recursivefilter(arr, condition, index + 1, result);
}

function numArr(nums, i = 1, newArr = []) {
  if (i > nums) {
    return newArr;
  }
  newArr.push(i);
  return numArr(nums, i + 1, newArr);
}

const nums = numArr(100);

evenNumbers = recursivefilter(nums, (num) => num % 2 !== 0);

console.log(evenNumbers);

