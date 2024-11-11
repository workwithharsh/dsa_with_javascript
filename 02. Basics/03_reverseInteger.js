/* 
    Problem: Create a function that reverse of the given number N.

    Algorithm:
    1. Check if the given integer is negative
    2. Make it positive
    3. Initialize a reversed number with 0
    4. While given integer is greater than 0, reverse the number
    5. Reduce one digit after every count
    6. Return the reversed number
*/

// Solution:
function reverseInteger(n) {
  // Step 1: Check if the given integer is negative
  let isNegative = n < 0;

  // Step 2: Make it positive
  n = Math.abs(n);

  // Step 3: Initialize a reversed number with 0
  let reversed = 0;

  // Step 4: While given integer is greater than 0, reverse the number
  while (n > 0) {
    reversed = reversed * 10 + (n % 10);

    // Step 5: Reduce one digit after every count
    n = Math.floor(n / 10);
  }

  // Step 6: Return the reversed number
  return isNegative ? -reversed : reversed;
}

// Test Cases:
console.log(reverseInteger(123)); // Expected Output: 321
console.log(reverseInteger(-123)); // Expected Output: -321
console.log(reverseInteger(120)); // Expected Output: 21

/* 
--- Complexity Analysis ---
    Time Complexity: O(n)
    Space Complexity: O(1)

    where 'n' is the length of the input
*/
