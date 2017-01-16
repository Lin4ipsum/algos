import './SpecHelper';
import palindrome from '../src/palindrome';

describe("palindrome", function() {
  it("should return true when palindrome", function() {
    var word = "kayak";
    expect(palindrome(word)).toEqual(true);
  });

  it("should return false when not palindrome", function() {
    var word = "kayaks";
    expect(palindrome(word)).toEqual(false);
  });

  it("should return false when not palindrome", function() {
    var word = "woof";
    expect(palindrome(word)).toEqual(false);
  });
});