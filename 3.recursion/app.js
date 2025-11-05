// Write a recursive function that given an input n, sums all non-negative integers up to n
// findSum(4) > 1 + 2 + 3 + 4 > 10

// Iterative method
function findSumLoop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(findSumLoop(4));

// Recursive method:
function findSumRecursion(n) {
  if (n === 1) return 1; // This is our base case

  return n + findSumRecursion(n - 1);
}

console.log(findSumRecursion(5));

// Fib numbers: 0, 1, 1, 2, 3, 5, 8, 13
// Indexes:     0, 1, 2, 3, 4, 5, 6, 7
function fibonacciNum(n) {
  if (n === 0 || n === 1) return n;

  return fibonacciNum(n - 1) + fibonacciNum(n - 2);
}

console.log(fibonacciNum(6));
