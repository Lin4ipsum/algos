function palindrome(word) {
  var reversedWord = word.split("").reverse();
  var ary = [];
  word.split("").forEach(function(x, i) {
    x === reversedWord[i] ? "" : ary.push(false);
  });
  return ary.length === 0 ? true : false;
}

export default palindrome;


function palindrome(word) {
  var reversedWord = word.split("").reverse();
  var ary = [];
  word.split("").forEach(function(x, i) {
    x === reversedWord[i] ? "" : ary.push(false);
  });
  return ary.length === 0 ? true : false;
}


function palindrome(word) {
  var reverse = word.split("").reverse().join("");
  return word === reverse;
}
