/* 
    Problem: Create a recursive function that give fibonacci series upto input N.

    Algorithm:
    1. Create a recursive function that give fibonacci series
      i. if n is 0 or 1, return n
      ii. return the sum of previous two numbers

    2. Create a function that print fibonacci series
      i. Create an empty array
      ii. Iterate from 0 to n, and push the fibonacci series in the array
      iii. Return the array
*/

// Solution:

// Step 1: Create a recursive function that give fibonacci series
function fibonacci(n) {
  // Step 1 (i): if n is 0 or 1, return n
  if (n === 0 || n === 1) {
    return n;
  }

  // Step 1 (ii): return the sum of previous two numbers
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Step 2: Create a function that print fibonacci series
function printFibonacciSeries(n) {
  // Step 2 (i): Create an empty array
  let result = [];

  // Step 2 (ii): Iterate from 0 to n, and push the fibonacci series in the array
  for (let i = 0; i < n; i++) {
    result.push(fibonacci(i));
  }

  // Step 2 (iii): Return the array
  return result;
}

// Test Cases:
console.log(printFibonacciSeries(10)); // Expected Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(printFibonacciSeries(5)); // Expected Output: [0, 1, 1, 2, 3]
console.log(printFibonacciSeries(3)); // Expected Output: [0, 1, 1]

/* 
--- Complexity Analysis ---
    Time Complexity: O(n * 2^n)
    Space Complexity: O(n)
    
    where 'n' is the value of the input
*/
