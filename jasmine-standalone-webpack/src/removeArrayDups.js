function removeDups(array) {
  var ary = [];
  array.forEach(function(x) {
    ary.indexOf(x) === -1 ? ary.push(x) : "";
  });
  return ary;
}

export default removeDups;


function removeDuplicates(ary) {
  ary.filter(function(x, i, ary) {
    return i === ary.indexOf(x);
  });
}

var a = [3, 6, 13, 4, 21, 3, 6, 13, 13, 8, 4];