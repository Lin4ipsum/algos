import './SpecHelper';
import isPrime from '../src/primes';

describe("isPrime", function() {
  it("should return false when num is 1", function() {
    expect(isPrime(1)).toEqual(false);
  });

  it("should return false when num is 0", function() {
    expect(isPrime(0)).toEqual(false);
  });

  it("should return false when num is negative", function() {
    expect(isPrime(-10)).toEqual(false);
  });

  it("should return false when num is even", function() {
    expect(isPrime(4)).toEqual(false);
  });

  it("should return true when num is 2", function() {
    expect(isPrime(2)).toEqual(true);
  });

  it("should return true when num is 3", function() {
    expect(isPrime(3)).toEqual(true);
  });

  it("should return true when num is 5", function() {
    expect(isPrime(5)).toEqual(true);
  });

  it("should return false when num is 9", function() {
    expect(isPrime(9)).toEqual(false);
  });

  it("should return false when num is 7", function() {
    expect(isPrime(7)).toEqual(true);
  });

  it("should return false when num is 43", function() {
    expect(isPrime(43)).toEqual(true);
  });
});