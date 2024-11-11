/* 
    Problem: Create a function that find GCD of two given integer N1 and N2.

    Algorithm:
    1. Check minimum of N1 and N2
    2. Initialize a result with 1
    3. Iterate from 2 to min
    4. Check if both N1 and N2 are divisible by i
    5. Return the result
*/

// Solution:
function gcd(n1, n2) {
  // Step 1: Check minimum of N1 and N2
  let min = Math.min(n1, n2);

  // Step 2: Initialize a result with 1
  let result = 1;

  // Step 3: Iterate from 2 to min
  for (i = 2; i <= min; i++) {
    // Step 4: Check if both N1 and N2 are divisible by i
    if (n1 % i === 0 && n2 % i === 0) {
      result = i;
    }
  }

  // Step 5: Return the result
  return result;
}
// Test Cases:
console.log(gcd(9, 12)); // Expected Output: 3
console.log(gcd(10, 15)); // Expected Output: 5
console.log(gcd(5, 10)); // Expected Output: 5

/* 
--- Complexity Analysis ---
    Time Complexity: O(min(n1, n2))
    Space Complexity: O(1)

    where 'n1' and 'n2' are the value of the inputs
*/
