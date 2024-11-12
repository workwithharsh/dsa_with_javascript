/* 
    Problem: Create a recursive function that reverse a given array.

    Algorithm:
    1. Base case: If array length is 1 or 0 return the array
    2. Recursive step: Return the reversed array
*/

// Solution:
function reverseArray(arr) {
  // Step 1: If array length is 1 or 0 return the array
  if (arr.length <= 1) {
    return arr;
  }

  // Step 2: Return the reversed array
  return reverseArray(arr.slice(1)).concat(arr[0]);
}

// Test Cases:
console.log(reverseArray([1, 2, 3, 4, 5])); // Expected Output: [5, 4, 3, 2, 1]
console.log(reverseArray([1])); // Expected Output: [1]
console.log(reverseArray(["a", "b", "c", "d", "e"])); // Expected Output: [ 'e', 'd', 'c', 'b', 'a' ]

/* 
--- Complexity Analysis ---
    Time Complexity: O(n^2) 
    Space Complexity: O(n)
    
    where 'n' is the length of the array
*/
