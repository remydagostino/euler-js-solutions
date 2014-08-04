var isPrime, getLargestPrimeFactor;

isPrime = function(n) {
  var i;

  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

// Using Prime Factorization
// http://www.mathsisfun.com/prime-factorization.html
getLargestPrimeFactor = function(n) {
  var prime = 2;

  while (prime < n) {
    if (n % prime === 0) {
      if (isPrime(n / prime)) {
        return n / prime;
      }
      else {
        return getLargestPrimeFactor(n / prime);
      }
    }
    else {
      do {
        prime += 1;
      } while (!isPrime(prime));
    }
  }

  return prime;
};

console.log('got: ' + getLargestPrimeFactor(600851475143));
// > 6857


