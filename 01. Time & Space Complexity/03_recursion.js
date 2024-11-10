// Finding complexities in recursion functions is slightly diffrent from other functions

function factorial(num) {
  if (num === 0) {
    return 1; // Constant ops - k
  }

  return num * factorial(num - 1); // Constant ops - k
}

/* 
--- Time Complexity -> 2 methods ---

  1. Recurrence Relation (Mathematical method)
  2. TC = Total number of recursive calls * Work done in each recursive call

  Since 1st Method is a Mathematical approach, It is not very pracical in many cases
  So, we will use 2nd Method

  METHOD 2:

  Lets find out the total number of recursive calls by making a recursion tree -->

  if we put num = 4
  factorial(4) = 4 * factorial(3)
  factorial(3) = 3 * factorial(2)
  factorial(2) = 2 * factorial(1)
  factorial(1) = 1 * factorial(0)
  factorial(0) = 1
  Total number of recursive calls = 5

  So we can say that for (num = n), it will be (n + 1) recursive calls.

  And we can see in every recursive call only constant operations (k) will be done

  Hence Time complexity = (n + 1) * k
  Ignore constants, and we get Time complexity = O(n) 

--- Space Complexity ---

The space complexity is determined by the call stack. 
Each recursive call adds a new frame to the stack until the base case is reached. 
With num calls, the maximum depth of the recursion is num.

Hence Space Complexity = O(n)
*/
