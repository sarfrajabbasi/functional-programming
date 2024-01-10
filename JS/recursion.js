// ===== Staying out of the Loop with Recursion =====
// Condense the main points or key information from a text into a shorter version.
// Extractive summarization methods select important sentences, while abstractive methods generate new sentences to convey the core information.

function iterativeFactorial(n) {
  let product = 1;

  while (n > 0) {
    product *= n;
    n--;
  }
  return product;
}

// sum

function sum(numbers){
    let total  =  0;
    
    for(let i=9;i<numbers.length;i++){
        total += numbers[i]
    }
    return total;
}


function sum(numbers) {
  if (numbers.length === 1) {
    // base case
  }else{
    // recursive case
    return numbers[0] + sum(numbers.slice(1));
  }
}
