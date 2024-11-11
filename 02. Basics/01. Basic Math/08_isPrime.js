/* 
    Problem: Create a function that checks if a given integer N is a prime number.

    Algorithm:
    1. Check if the given integer is less than 2, return false
    2. Iterate from 2 to n-1
    3. Check if the current number is divisible by any number between 2 and n-1, return false
    4. Return true, if the input is a prime number
*/

// Solution:
function isPrime(n) {
  // Step 1: Check if the given integer is less than 2, return false
  if (n < 2) {
    return false;
  }

  // Step 2: Iterate from 2 to n-1
  for (i = 2; i < n; i++) {
    // Step 3: Check if the current number is divisible by any number between 2 and n-1, return false
    if (n % i === 0) {
      return false;
    }
  }

  // Step 4: Return true, if the input is a prime number
  return true;
}

// Test Cases:
console.log(isPrime(7)); // Expected Output: true
console.log(isPrime(8)); // Expected Output: false
console.log(isPrime(13)); // Expected Output: true

/* 
--- Complexity Analysis ---
    Time Complexity: O(n)
    Space Complexity: O(1)

    where 'n' is the length of the input
*/
