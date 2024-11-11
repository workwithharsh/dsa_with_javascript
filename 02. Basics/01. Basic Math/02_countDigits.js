/* 
    Problem: Create a function that returns the number of digits in a given integer N.

    Algorithm:
    1. Initialize a count with 0
    2. Check if the given integer is 0, if so, return 1
    3. While given integer is greater than 0, increase the count by 1
    4. Reduce one digit after every count
    5. Return the count
*/

// Solution:
function countDigits(n) {
  // Step 1: Initialize a count with 0
  let count = 0;

  // Step 2: Check if the given integer is 0, if so, return 1
  if (n === 0) {
    return 1;
  }

  // Step 3: While given integer is greater than 0, increase the count by 1
  while (n > 0) {
    count++;

    // Step 4: Reduce one digit after every count
    n = Math.floor(n / 10);
  }

  // Step 5: Return the count
  return count;
}

// Test Cases:
console.log(countDigits(123456)); // Expected Output: 6
console.log(countDigits(0)); // Expected Output: 1
console.log(countDigits(9050)); // Expected Output: 4

/* 
--- Complexity Analysis ---
    Time Complexity: O(n)
    Space Complexity: O(1)

    where 'n' is the length of the input
*/
