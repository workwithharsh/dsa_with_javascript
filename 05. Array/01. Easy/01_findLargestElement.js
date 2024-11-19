/* 
    Problem: Create a function that find the largest element in the given array.

    Algorithm:
    1. If array has only one element, return the first element
    2. Declare a variable 'max' with the minimum value possible
    3. Iterate through the array from 0 to n-1
    4. If arr[i] > max, update max with the maximum value
    5. Return maximum value
*/

// Solution:
function findLargestElement(arr) {
  // Step 1: If array has only one element, return the first element
  if (arr.length === 1) {
    return arr[0];
  }

  // Step 2: Declare a variable 'max' with the minimum value possible
  let max = -Infinity;

  // Step 3: Iterate through the array from 0 to n-1
  for (let i = 0; i < arr.length; i++) {
    // Step 4: If arr[i] > max, update max with the maximum value
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  // Step 5: Return maximum value
  return max;
}

// Test Cases:
console.log(findLargestElement([3, 5, 8, 2, 1])); // Expected Output: 8
console.log(findLargestElement([-1, -5 - 3, -2])); // Expected Output: -1
console.log(findLargestElement([1])); // Expected Output: 1

/* 
--- Complexity Analysis ---
    Time Complexity: O(n) 
    Space Complexity: O(1)
    
    where 'n' is the length of the array
*/
