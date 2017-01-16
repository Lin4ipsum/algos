import './SpecHelper';
import binarySearch from '../src/binarySearch';

describe("binarySearch", function() {
  beforeEach(function() {
    var binarySearch;
  });

  it("should return -1 when targetValue not in array", function() {
    var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    expect(binarySearch(primes, 4)).toEqual(-1);
  });

  it("should return the index when targetValue in array", function() {
    var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    expect(binarySearch(primes, 3)).toEqual("3 found at 1.");
  });

  it("should return the index when targetValue in array", function() {
    var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    expect(binarySearch(primes, 47)).toEqual("47 found at 14.");
  });
});