"use strict";

var task3 = {
  /*
  isPalindrome('a') => true;
  isPalindrome('abc') => false;
  isPalindrome('aabbaa') => true;
   */
  isPalindrome: function isPalindrome(str) {
    var lenOfStr = str.length;

    for (var i = 0; i < lenOfStr; i++) {
      if (str[i] === str[lenOfStr - i - 1]) {
        continue;
      } else {
        return false;
      }
    }

    return true; // var reverse = ''
    // for (i of str) {
    //     reverse = i + reverse
    // }
    // if (reverse === str) {
    //     console.log(true)
    // }
    // else {
    //     console.log(false)
    // }
  },

  /*
  charCount('abc') => a: 1, b: 1, c: 1
  charCount('Hello') => H: 1, e: 1, l: 2, o: 1
   */
  charCount: function charCount(str) {
    var outputStr = new Object();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _letter = _step.value;
        var didntRepeat = true;

        for (var obj in outputStr) {
          if (obj === _letter) {
            console.log("match");
            didntRepeat = false;
            outputStr[obj] += 1;
          }
        }

        if (didntRepeat) {
          console.log(_letter);
          outputStr[_letter] = 1;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return outputStr;
  },

  /*
  areAnagrams('anagram', 'nag a ram') => true;
  areAnagrams('Eleven plus two', 'Twelve plus one'); => true;
  areAnagrams('O, Draconian devil', 'Leonardo da Vinci') => true;
   */
  areAnagrams: function areAnagrams(str1, str2) {
    var string1 = str1.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase().replace(/\s/g, '');
    var string2 = str2.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase().replace(/\s/g, '');
    var arr1 = [];
    var arr2 = [];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = string1[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        i = _step2.value;
        arr1.push(i);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = string2[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        i = _step3.value;
        arr2.push(i);
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
          _iterator3["return"]();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    console.log(arr1);
    console.log("-----");
    console.log(arr2);

    for (var iterate = 0; iterate < 4; iterate++) {
      console.log("new iteration ----------------------------------------------------------------------");
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = arr1[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          letter = _step4.value;
          console.log('letter of arr1 ' + letter);
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = arr2[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              l2 = _step5.value;
              console.log('letter of arr2');

              if (letter === l2) {
                console.log('they are equal');
                var ok = true;

                for (var i = 0; i < arr1.length; i++) {
                  if (ok === true) {
                    console.log('ok = true passed');

                    if (arr1[i] === letter) {
                      arr1.splice(i, 1);
                      ok = false;
                      console.log(arr1);
                    }
                  }
                }

                var ok = true;

                for (var i = 0; i < arr2.length; i++) {
                  if (ok === true) {
                    if (arr2[i] === letter) {
                      arr2.splice(i, 1);
                      ok = false;
                      console.log(arr2);
                    }
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                _iterator5["return"]();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }

    if (arr1.length === 0 && arr2.length === 0) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}; // console.log(task3.isPalindrome('aba'))

console.log(task3.charCount('hellooo')); // task3.areAnagrams("hellooaba34oYhellooaba34oY", "hellaba34oYoohellooaba34oY")