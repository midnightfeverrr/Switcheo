/**
 * Provide 3 unique implementations of the following function in JavaScript.
 * Input: n - any integer
 * Assuming this input will always produce a result lesser than Number.MAX_SAFE_INTEGER.
 * Output: return - summation to n, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.
 */

// Using Recursion
var sum_to_n_a = function(n) {
  // your code here
  if (n < 0) {
    return "n cannot be a negative number";
  } else if (n === 0) {
    return 0;
  } else {
    return n + sum_to_n_a(n-1);
  }
};

// Using For Loop
var sum_to_n_b = function(n) {
  // your code here
  if (n < 0) {
    return "n cannot be a negative number";
  }
  var sum = 0;
  for (var i = n; i >= 0; i--) {
    sum += i;
  }
  return sum;
};

// Using Arithmetic Progression Forumula
var sum_to_n_c = function(n) {
  // your code here
  if (n < 0) {
    return "n cannot be a negative number";
  }
  var sum = (n * (n + 1)) / 2;
  return sum;
};

// TEST CASES
// Test case 1
// Expected: 10
const n = 4
console.log(sum_to_n_a(n));
console.log(sum_to_n_b(n));
console.log(sum_to_n_c(n));

// Test case 2
// Expected: 5050
const o = 100
console.log(sum_to_n_a(o));
console.log(sum_to_n_b(o));
console.log(sum_to_n_c(o));

// Test case 3
// Expected: "n cannot be a negative number"
const p = -10
console.log(sum_to_n_a(p));
console.log(sum_to_n_b(p));
console.log(sum_to_n_c(p));