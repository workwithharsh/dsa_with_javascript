/* 
    Problem: Create a function that checks if a given integer N is an Armstrong number.

    Algorithm:
    1. Check the length of input integer using log10 formula
    2. Store input in a variable and initialize sum with 0
    3. Calculate power of digits and add in sum
    4. Reduce the input by 1 digit each time
    5. Check if the input is an Armstrong number
*/

// Solution:
function isArmstrong(n) {
  // Step 1: Check the length of input integer using log10 formula
  const len = Math.floor(Math.log10(n)) + 1;

  // Step 2: Store input in a variable and initialize sum with 0
  const original = n;
  let sum = 0;

  // Step 3: Calculate power of digits and add in sum
  while (n > 0) {
    sum += Math.pow(n % 10, len);

    // Step 4: Reduce the input by 1 digit each time
    n = Math.floor(n / 10);
  }
  // Step 5: Check if the input is an Armstrong number
  return original === sum ? true : false;
}

// Test Cases:
console.log(isArmstrong(153)); // Expected Output: true
console.log(isArmstrong(123)); // Expected Output: false
console.log(isArmstrong(371)); // Expected Output: true

/* 
--- Notes ---
    Formula to check the length of an integer: Math.floor(Math.log10(n)) + 1

    Example ->  Math.log10(123) = 2.09 (Approx.)
                Math.floor(2.09) = 2
                2 + 1 = 3 (length of 123)

--- Complexity Analysis ---
    Time Complexity: O(n)
    Space Complexity: O(1)

    where 'n' is the length of the input
*/
