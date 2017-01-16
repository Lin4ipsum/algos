/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(4);
	__webpack_require__(6);
	module.exports = __webpack_require__(8);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	__webpack_require__(2);

	var binarySearch = _interopRequire(__webpack_require__(3));

	describe("binarySearch", function () {
	  beforeEach(function () {
	    var binarySearch;
	  });

	  it("should return -1 when targetValue not in array", function () {
	    var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
	    expect(binarySearch(primes, 4)).toEqual(-1);
	  });

	  it("should return the index when targetValue in array", function () {
	    var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
	    expect(binarySearch(primes, 3)).toEqual("3 found at 1.");
	  });

	  it("should return the index when targetValue in array", function () {
	    var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
	    expect(binarySearch(primes, 47)).toEqual("47 found at 14.");
	  });
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	beforeEach(function () {
	  jasmine.addMatchers({
	    toBePlaying: function toBePlaying() {
	      return {
	        compare: function compare(actual, expected) {
	          var player = actual;

	          return {
	            pass: player.currentlyPlayingSong === expected && player.isPlaying
	          };
	        }
	      };
	    }
	  });
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	function binarySearch(array, targetValue) {
	  var min = 0;
	  var max = array.length - 1;
	  var guess;

	  while (max >= min) {
	    guess = Math.floor((min + max) / 2);
	    if (array[guess] === targetValue) {
	      return targetValue + " found at " + guess + ".";
	    } else if (array[guess] < targetValue) {
	      min = guess + 1;
	    } else {
	      max = guess - 1;
	    }
	  }
	  return -1;
	}

	module.exports = binarySearch;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	__webpack_require__(2);

	var isPrime = _interopRequire(__webpack_require__(5));

	describe("isPrime", function () {
	  it("should return false when num is 1", function () {
	    expect(isPrime(1)).toEqual(false);
	  });

	  it("should return false when num is 0", function () {
	    expect(isPrime(0)).toEqual(false);
	  });

	  it("should return false when num is negative", function () {
	    expect(isPrime(-10)).toEqual(false);
	  });

	  it("should return false when num is even", function () {
	    expect(isPrime(4)).toEqual(false);
	  });

	  it("should return true when num is 2", function () {
	    expect(isPrime(2)).toEqual(true);
	  });

	  it("should return true when num is 3", function () {
	    expect(isPrime(3)).toEqual(true);
	  });

	  it("should return true when num is 5", function () {
	    expect(isPrime(5)).toEqual(true);
	  });

	  it("should return false when num is 9", function () {
	    expect(isPrime(9)).toEqual(false);
	  });

	  it("should return false when num is 7", function () {
	    expect(isPrime(7)).toEqual(true);
	  });

	  it("should return false when num is 43", function () {
	    expect(isPrime(43)).toEqual(true);
	  });
	});

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	function isPrime(num) {
	  while (num > 1) {
	    if (num === 2) {
	      return true;
	    } else {
	      var divisor = 2;
	      while (num > divisor) {
	        if (num % divisor === 0) {
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

	module.exports = isPrime;

	//#number great than 1 - only divisors are 1 and itself

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	__webpack_require__(2);

	var removeDups = _interopRequire(__webpack_require__(7));

	describe("removeDups", function () {
	  it("should remove dups", function () {
	    var dupArray = [1, 2, 4, 5, 5, 5, 6, 7, 8, 9, 9];
	    expect(removeDups(dupArray)).toEqual([1, 2, 4, 5, 6, 7, 8, 9]);
	  });

	  it("should remove dups", function () {
	    var dupArray = [10, 3, 4, 1, 1, 19, 45, 2, 3, 4];
	    expect(removeDups(dupArray)).toEqual([10, 3, 4, 1, 19, 45, 2]);
	  });

	  it("should return array if no dups", function () {
	    var array = [4, 1, 6, 99, 32];
	    expect(removeDups(array)).toEqual(array);
	  });
	});

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	function removeDups(array) {
	  var ary = [];
	  array.forEach(function (x) {
	    ary.indexOf(x) === -1 ? ary.push(x) : "";
	  });
	  return ary;
	}

	module.exports = removeDups;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	__webpack_require__(2);

	var palindrome = _interopRequire(__webpack_require__(9));

	describe("palindrome", function () {
	  it("should return true when palindrome", function () {
	    var word = "kayak";
	    expect(palindrome(word)).toEqual(true);
	  });

	  it("should return false when not palindrome", function () {
	    var word = "kayaks";
	    expect(palindrome(word)).toEqual(false);
	  });
	});

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	function palindrome(word) {
	  var reversedWord = word.split("").reverse();
	  var ary = [];
	  word.split("").forEach(function (x, i) {
	    x === reversedWord[i] ? "" : ary.push(false);
	  });
	  return ary.length === 0 ? true : false;
	}

	module.exports = palindrome;

/***/ }
/******/ ]);