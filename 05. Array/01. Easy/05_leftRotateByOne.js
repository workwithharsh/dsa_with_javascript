/* 
    Problem: Create a function that left rotate an array by one place.

    Example: Input -> [1,2,3,4,5] Output -> [2,3,4,5,1]

    Algorithm:
    1. If array length is less than 2, return the array
    2. Iterate through the array from end to start
    3. Swap the first element with the last element
    4. Return the array
*/

// Solution:
function leftRotateByOne(arr) {
  // Step 1: If array length is less than 2, return the array
  if (arr.length < 2) return arr;

  let temp;

  // Step 2: Iterate through the array from end to start
  for (let end = arr.length - 1; end > 0; end--) {
    // Step 3: Swap the first element with the last element
    temp = arr[0];
    arr[0] = arr[end];
    arr[end] = temp;
  }

  // Step 4: Return the array
  return arr;
}

// Test Cases:
console.log(leftRotateByOne([1, 2, 3, 4, 5])); // Expected Output: [2, 3, 4, 5, 1]
console.log(leftRotateByOne([1, 2])); // Expected Output: [2, 1]
console.log(leftRotateByOne([])); // Expected Output: []

/* 
--- Complexity Analysis ---
    Time Complexity: O(n) 
    Space Complexity: O(1)
    
    where 'n' is the length of the array
*/
