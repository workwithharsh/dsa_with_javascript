/* 
    Problem: Create a function that checks if a given integer N is a palindrome.

    Algorithm:
    1. Make the given integer positive and store in a variable
    2. Initialize a reversed number with 0
    3. While given integer is greater than 0, reverse the number
    4. Reduce one digit after every count
    5. Check if the reversed number is equal to the original number
*/

// Solution:
function isPalindrome(n) {
  // Step 1: Make the given integer positive and store in a variable
  n = Math.abs(n);
  const original = n;

  // Step 2: Initialize a reversed number with 0
  let reversed = 0;

  // Step 3: While given integer is greater than 0, reverse the number
  while (n > 0) {
    reversed = reversed * 10 + (n % 10);

    // Step 4: Reduce one digit after every count
    n = Math.floor(n / 10);
  }

  // Step 5: Check if the reversed number is equal to the original number
  return original === reversed ? true : false;
}
// Test Cases:
console.log(isPalindrome(123321)); // Expected Output: true
console.log(isPalindrome(2)); // Expected Output: true
console.log(isPalindrome(606006)); // Expected Output: false

/* 
--- Complexity Analysis ---
    Time Complexity: O(n)
    Space Complexity: O(1)

    where 'n' is the length of the input
*/
