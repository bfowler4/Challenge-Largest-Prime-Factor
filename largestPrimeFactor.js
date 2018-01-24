exports.largestPrimeFactor = function(n){
  var primeNumber = 0;
  let nSquare = Math.ceil(Math.sqrt(n));
  for (let i = nSquare; i >= 0; i --) {
    if (n % i === 0) {
      if (isPrime(i)) {
        return i;
      }
    }
  }

  return primeNumber;
};

function isPrime(num) {
  let numSquare = Math.ceil(Math.sqrt(num));
  for (let i = 2; i < numSquare; i ++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}