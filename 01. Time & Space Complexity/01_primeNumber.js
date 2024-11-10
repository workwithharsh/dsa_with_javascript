function primeNumber(number) {
  // Iteration 1
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false; // Constant ops - k
    }
  }
  return number > 1; // Constant ops - k
}

/* 
--- Time Complexity ---

  1st iteration: from i = 2 to n
  We can say that it goes from i = 0 to n

  Then Time Complexity = O(n) 

--- Space Complexity ---

  Constant space is occupied, Hence Space Complexity = O(1)
*/
