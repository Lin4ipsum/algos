import './SpecHelper';
import removeDups from '../src/removeArrayDups';

describe("removeDups", function() {
  it("should remove dups", function() {
    var dupArray = [1, 2, 4, 5, 5, 5, 6, 7, 8, 9, 9];
    expect(removeDups(dupArray)).toEqual([1, 2, 4, 5, 6, 7, 8, 9]);
  });

  it("should remove dups", function() {
    var dupArray = [10, 3, 4, 1, 1, 19, 45, 2, 3, 4];
    expect(removeDups(dupArray)).toEqual([10, 3, 4, 1, 19, 45, 2]);
  });

  it("should return array if no dups", function() {
    var array = [4, 1, 6, 99, 32];
    expect(removeDups(array)).toEqual(array);
  });
});