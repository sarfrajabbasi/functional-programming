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
