/* 
    Problem: Create a function that sort given array using Bubble Sort.

    Algorithm:
    1. Store the length of the array in a variable n
    2. Initiate swapped with true
    3. Outer loop: iterate through the array until swapped is true
    4. Set swapped with false
    5. Inner loop: iterate through the array
    6. If arr[i] is greater than arr[i + 1], swap them
    7. Set swapped to true
    8. Reduce array length n by 1
    9. Return the sorted array
*/

// Solution:
function bubbleSort(arr) {
  // Step 1: Store the length of the array in a variable n
  let n = arr.length;

  // Step 2: Initiate swapped with true
  let swapped;

  // Step 3: Outer loop: iterate through the array until swapped is true
  do {
    // Step 4: Set swapped with false
    swapped = false;

    // Step 5: Inner loop: iterate through the array
    for (let i = 0; i < n - 1; i++) {
      // Step 6: If arr[i] is greater than arr[i + 1], swap them
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

        // Step 7: Set swapped to true
        swapped = true;
      }
    }

    // Step 8: Reduce array length n by 1
    n--;
  } while (swapped);

  // Step 9: Return the sorted array
  return arr;
}

// Test Cases:
console.log(bubbleSort([3, 5, 8, 2, 1]));
console.log(bubbleSort([1]));
console.log(bubbleSort([568, 121, 776, 234, 234, 432]));

/* 
--- Complexity Analysis ---
    Time Complexity: O(n^2)
    Space Complexity: O(1)
    
    where 'n' is the length of the array
*/
