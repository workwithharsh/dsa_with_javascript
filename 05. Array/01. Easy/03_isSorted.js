/* 
    Problem: Create a function that find given array is sorted.

    Algorithm:
    1. Iterate through the array, if current element is less than prev, return false
    2. Else return true
*/

// Solution:
function isSorted(arr) {
  // Step 1: Iterate through the array, if current element is less than prev, return false
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) return false;
  }

  // Step 2: Else return true
  return true;
}

// Test Cases:
console.log(isSorted([1, 2, 3, 4, 5])); // Expected Output: true
console.log(isSorted([5, 4, 3, 2, 1])); // Expected Output: false
console.log(isSorted([1])); // Expected Output: true

/* 
--- Complexity Analysis ---
    Time Complexity: O(n) 
    Space Complexity: O(1)
    
    where 'n' is the length of the array
*/
