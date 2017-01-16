//tell whether a number is prime

function isPrime(num) {
  while(num > 1) {
    if(num === 2) { 
      return true;
    }
    else {
      var divisor = 2;
      while(num > divisor) {
        if(num % divisor === 0) {
          return false;
        } else {
          divisor++;
        }
      }
      return true;
    }
  }
  return false;
}

export default isPrime;
