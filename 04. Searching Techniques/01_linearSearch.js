/* 
    Problem: Create a function that searches for an element in an array using Linear Search Algorithm.

    Algorithm:
    1. Iterate through the array from 0 to n-1
      i. If arr[i] is equal to target, return the index
    2. If target not found return -1
*/

// Solution:
function linearSearch(arr, target) {
  // Step 1: Iterate through the array from 0 to n-1
  for (let i = 0; i < arr.length; i++) {
    // Step 1 (i): If arr[i] is equal to target, return the index
    if (arr[i] === target) {
      return i;
    }
  }

  // Step 2: If target not found return -1
  return -1;
}

// Test Cases:
console.log(linearSearch([1, 2, 3, 4, 5], 3)); // Expected Output: 2
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // Expected Output: -1
console.log(linearSearch([1], 1)); // Expected Output: 0

/*
--- Notes ---
    -> Linear Search is also known as Sequential Search.
    -> It is a simple search algorithm that checks each element of the array one by one 
        until it finds the target element.
    -> It can be done on unsorted arrays.

--- Complexity Analysis ---
    Time Complexity: O(n)
    Space Complexity: O(1)
    
    where 'n' is the length of the array
*/
