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
  let a = 0;
  let b = 1;
  let c = 0;
  let nth_arr = [];
  for (let i = 0; i < n; i++) {
    nth_arr.push(a);
    c = a + b;
    a = b;
    b = c;
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

const nth_Number = iterativeFibonacci(10);
const nth_Number2 = recursiveFibonacci(10);
console.log(nth_Number);
console.log(nth_Number2);
