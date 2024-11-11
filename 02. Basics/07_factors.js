/* 
    Problem: Create a function that find all factors of given integer N.

    Algorithm:
    1. Initiate a result array with [1]
    2. Check factors of input from 2 to n, push in array if true
    3. Return the result array

*/

// Solution:
function factors(n) {
  // Step 1: Initiate a result array with [1]
  let result = [1];

  // Step 2: Check factors of input from 2 to n, push in array if true
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      result.push(i);
    }
  }

  // Step 3: Return the result array
  return result;
}

// Test Cases:
console.log(factors(12)); // Expected Output: [1, 2, 3, 4, 6, 12]
console.log(factors(1)); // Expected Output: [1]
console.log(factors(36)); // Expected Output: [1, 2, 3, 4, 6, 9, 12, 18, 36]

/* 
--- Complexity Analysis ---
    Time Complexity: O(n)
    Space Complexity: O(n)

    where 'n' is the length of the input
*/
