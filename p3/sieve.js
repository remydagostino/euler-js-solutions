// I wrote an implementation of a sieve of Erathosthenes for this problem
// but it wasn't useful in the end. I still liked it though so I'm just 
// going to leave it here.

// Implementation of sieve of Eratosthenes
getPrimes = function(n) {
  var nums, cur, i, converted, primes;

  // Initialize numbers
  nums        = [];
  nums.length = n;

  // Current iteration (always start with 2);
  cur       = 2;
  converted = true;

  while (converted) {
    converted = false;

    // Mark off numbers
    for (i = 2 * cur; i <= n; i += cur) {
      if (nums[i - 1] !== true) {
        converted   = true;
        nums[i - 1] = true;
      }
    }

    // Find next number
    for (i = (cur + 1); i <= n; i++) {
      if (nums[i - 1] !== true) {
        cur = i;
        break;
      }
    }
  }

  primes = [];

  for (i = 2; i <= n; i++) {
    if (nums[i - 1] !== true) {
      primes.push(i);
    }
  }

  return primes;
};

