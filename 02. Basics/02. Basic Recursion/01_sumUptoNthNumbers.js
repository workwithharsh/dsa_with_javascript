/* 
    Problem: Create a recursive function that finds the sum of the first N numbers.

    Algorithm:
    1. Base case: If the input is 0, return 0. This stops the recursion.
    2. Recursive step: Return the current number 'n' + the result of the function called with 'n - 1'.
*/

// Solution:
function sumUptoNthNumbers(n) {
  // Step 1:  If the input is 0, return 0. This stops the recursion.
  if (n === 0) {
    return 0;
  }

  // Step 2: Return the current number 'n' + the result of the function called with 'n - 1'
  return n + sumUptoNthNumbers(n - 1);
}

// Test Cases:
console.log(sumUptoNthNumbers(3)); // Expected Output: 6 (3 + 2 + 1)
console.log(sumUptoNthNumbers(5)); // Expected Output: 15 (5 + 4 + 3 + 2 + 1)
console.log(sumUptoNthNumbers(10)); // Expected Output: 55 (10 + 9 + ... + 1)

/* 
--- Notes ---
    -> A recursive function is a function that calls itself as part of its execution.
    -> Each recursive call reduces the problem's size, bringing it closer to a base case.
    -> The base case is a condition that stops the recursion, preventing infinite calls.

    Example Explanation:
    sumUptoNthNumbers(3):
    - sumUptoNthNumbers(3) returns 3 + sumUptoNthNumbers(2)
    - sumUptoNthNumbers(2) returns 2 + sumUptoNthNumbers(1)
    - sumUptoNthNumbers(1) returns 1 + sumUptoNthNumbers(0)
    - sumUptoNthNumbers(0) returns 0 (base case)
    - The results are combined as the call stack unwinds: 3 + 2 + 1 = 6.

--- Complexity Analysis ---
    Time Complexity: O(n) 
    Space Complexity: O(1)
    
    where 'n' is the value of the input
*/
