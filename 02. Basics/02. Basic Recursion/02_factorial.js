/* 
    Problem: Create a recursive function that finds the factorial of input N.

    Algorithm:
    1. Base case: If the input is 1, return 1. This stops the recursion.
    2. Recursive step: Return the product of number 'n' and 'n - 1'.
*/

// Solution:
function factorial(n) {
  // Step 1:  If the input is 1, return 1. This stops the recursion.
  if (n < 2) {
    return 1;
  }

  // Step 2: Return the product of number 'n' and 'n - 1'
  return n * factorial(n - 1);
}

// Test Cases:
console.log(factorial(3)); // Expected Output: 6
console.log(factorial(5)); // Expected Output: 120
console.log(factorial(1)); // Expected Output: 1

/* 
--- Complexity Analysis ---
    Time Complexity: O(n) 
    Space Complexity: O(1)
    
    where 'n' is the length of the input
*/
