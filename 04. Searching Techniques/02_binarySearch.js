/* 
    Problem: Create a function that searches for an element in an sorted array using Binary Search Algorithm.

    Algorithm:
    1. Declare start with 0 and end with array length - 1
    2. While start is less than or equal to end:
        i. Calculate mid = (start + end) / 2
        ii. If arr[mid] is equal to target, return mid
        iii. If arr[mid] is less than target, update start with mid + 1
        iv. If arr[mid] is greater than target, update end with mid - 1
    3. If target not found return -1
*/

// Solution:
function binarySearch(arr, target) {
  // Step 1: Declare start with 0 and end with array length - 1
  let start = 0;
  let end = arr.length - 1;

  // Step 2: While start is less than or equal to end:
  while (start <= end) {
    // Step 2 (i): Calculate mid = (start + end) / 2
    let mid = Math.floor((start + end) / 2);

    // Step 2 (ii): If arr[mid] is equal to target, return mid
    if (arr[mid] === target) {
      return mid;
    }

    // Step 2 (iii): If arr[mid] is less than target, update start with mid + 1
    if (arr[mid] < target) {
      start = mid + 1;
    }

    // Step 2 (iv): If arr[mid] is greater than target, update end with mid - 1
    if (arr[mid] > target) {
      end = mid - 1;
    }
  }

  // Step 3: If target not found return -1
  return -1;
}

// Test Cases:
console.log(binarySearch([1, 2, 3, 7, 9, 11, 13, 21], 11)); // Expected Output: 5
console.log(binarySearch([1, 2, 3, 7, 9, 11, 13, 21], 12)); // Expected Output: -1
console.log(binarySearch([1], 1)); // Expected Output: 0

/*
--- Notes ---
    -> Binary Search is also known as Divide and Conquer Search.
    -> It is only useful when the array is sorted.
    -> This algorithm works by repeatedly dividing the search interval in half.

--- Complexity Analysis ---
    Time Complexity: O(log n)
    Space Complexity: O(1)
    
    where 'n' is the length of the array
*/
