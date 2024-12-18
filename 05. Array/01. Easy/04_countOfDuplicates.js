/* 
    Problem: Create a function that give the count of unique elements in the given sorted array.

    Algorithm:
    1. If length of the array is less than 2, return the length of the array
    2. Initiate two variables with i=0 and j=1 index
    3. If element at i is not equal to element at j, increment i and update element at i with element at j
    4. Update length of the array, with i+1
    5. Return the length of the array
*/

// Solution:
function countOfDuplicates(arr) {
  // Step 1: If length of the array is less than 2, return the length of the array
  if (arr.length < 2) return arr.length;

  // Step 2: Initiate two variables with i=0 and j=1 index
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    // Step 3: If element at i is not equal to element at j, increment i and update element at i with element at j
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  // Step 4: Update length of the array, with i+1
  arr.length = i + 1;

  // Step 5: Return the length of the array
  return arr.length;
}

// Test Cases:
console.log(countOfDuplicates([1, 2, 2, 3, 3, 4, 4, 4, 5])); // Expected Output: 5
console.log(countOfDuplicates([])); // Expected Output: 0
console.log(countOfDuplicates([0, 0, 1, 1])); // Expected Output: 2

/* 
--- Complexity Analysis ---
    Time Complexity: O(n) 
    Space Complexity: O(1)
    
    where 'n' is the length of the array
*/
