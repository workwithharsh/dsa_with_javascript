/* 
    Problem: Create a function that find the second largest and second smallest elements in the given array.

    Algorithm:
    1. Base case - for array length smaller than 2, return -1
    2. Initialize variables for smallest, second smallest, largest and second largest
    3. Find second smallest algorithm:
      i. If current element is smaller than small, update secondSmall with small and small with current element
      ii. If current element is smaller than secondSmall but not small, then update secondSmall with current
    4. Find second large algorithm:
      i. If current element is larger than large, update secondLarge with large and large with current element
      ii. If current element is larger than secondLarge but not large, then update secondLarge with current element
    5. Return second small and second large elements
*/

// Solution:
function findSecondSmallestAndLargestElements(arr) {
  // Base case
  if (arr.length < 2) return -1;

  // Variable initializations
  let small = Infinity,
    secondSmall = Infinity;

  let large = -Infinity,
    secondLarge = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    // For second smallest element
    if (arr[i] < small) {
      secondSmall = small;
      small = arr[i];
    }

    if (arr[i] < secondSmall && arr[i] !== small) {
      secondSmall = arr[i];
    }

    // For second largest element
    if (arr[i] > large) {
      secondLarge = large;
      large = arr[i];
    }

    if (arr[i] > secondLarge && arr[i] !== large) {
      secondLarge = arr[i];
    }
  }

  // Return second smallest and second largest elements
  return [secondSmall, secondLarge];
}

// Test Cases:
console.log(findSecondSmallestAndLargestElements([1, 3, 4, 2, 5])); // Output: [2, 4]
console.log(findSecondSmallestAndLargestElements([1, 6, 3, 2, 5, 4])); // Output: [2, 5]
console.log(findSecondSmallestAndLargestElements([1, 2, 3])); // Output: [2, 2]

/* 
--- Complexity Analysis ---
    Time Complexity: O(n) 
    Space Complexity: O(1)
    
    where 'n' is the length of the array
*/
