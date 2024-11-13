/* 
    Problem: Create a function that sort given array using Selection Sort.

    1. Store the length of the array in a variable n.
    2. Outer loop: iterate from i = 0 to n - 1.
    3. Store the current index i in a variable minIndex.
    4. Inner loop: iterate from j = i + 1 to n.
    5. Check if arr[j] is less than arr[minIndex].
    6. If true, set minIndex = j.
    7. After the inner loop, if minIndex is not equal to i, swap arr[i] with arr[minIndex].
    8. Return the sorted array.
*/

// Solution:
function selectionSort(arr) {
  // Step 1: Store the length of the array in a variable n
  const n = arr.length;

  // Step 2: Outer loop: iterate from i = 0 to n - 1
  for (let i = 0; i < n - 1; i++) {
    // Step 3: Store the current index i in a variable minIndex
    let minIndex = i;

    // Step 4: Inner loop: iterate from j = i + 1 to n
    for (let j = i + 1; j < n; j++) {
      // Step 5: Check if arr[j] is less than arr[minIndex]
      if (arr[j] < arr[minIndex]) {
        // Step 6: If true, set minIndex = j
        minIndex = j;
      }
    }

    // Step 7: After the inner loop, if minIndex is not equal to i, swap arr[i] with arr[minIndex]
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  // Step 8: Return the sorted array
  return arr;
}

// Test Cases:
console.log(selectionSort([3, 5, 8, 2, 1]));
console.log(selectionSort([1]));
console.log(selectionSort([568, 121, 776, 234, 234, 432]));

/* 
--- Complexity Analysis ---
    Time Complexity: O(n^2)
    Space Complexity: O(1)
    
    where 'n' is the length of the array
*/
