"use strict";

var task3 = {
  /*
  isPalindrome('a') => true;
  isPalindrome('abc') => false;
  isPalindrome('aabbaa') => true;
   */
  isPalindrome: function isPalindrome(str) {
    var reverse = '';
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        i = _step.value;
        reverse = i + reverse;
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

    if (reverse === str) {
      console.log(true);
    } else {
      console.log(false);
    }
  },

  /*
  charCount('abc') => a: 1, b: 1, c: 1
  charCount('Hello') => H: 1, e: 1, l: 2, o: 1
   */
  charCount: function charCount(str) {
    var outputStr = '';
    var list_of_numbers_that_alredy_were = [];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = str[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        i = _step2.value;
        var was_not_the_same_letter = true;
        var repeat = 0;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = str[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            r = _step3.value;

            if (i === r) {
              repeat += 1;
            }
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

        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = list_of_numbers_that_alredy_were[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            w = _step4.value;

            if (i === w) {
              was_not_the_same_letter = false;
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

        if (was_not_the_same_letter) {
          outputStr += "".concat(i, ": ").concat(repeat, ", ");
        }

        list_of_numbers_that_alredy_were.push(i);
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

    console.log(outputStr);
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
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = string1[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        i = _step5.value;
        arr1.push(i);
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

    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
      for (var _iterator6 = string2[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        i = _step6.value;
        arr2.push(i);
      }
    } catch (err) {
      _didIteratorError6 = true;
      _iteratorError6 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
          _iterator6["return"]();
        }
      } finally {
        if (_didIteratorError6) {
          throw _iteratorError6;
        }
      }
    }

    console.log(arr1);
    console.log("-----");
    console.log(arr2);

    for (var iterate = 0; iterate < 4; iterate++) {
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = arr1[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          letter = _step7.value;
          console.log('letter of arr1 ' + letter);
          var _iteratorNormalCompletion8 = true;
          var _didIteratorError8 = false;
          var _iteratorError8 = undefined;

          try {
            for (var _iterator8 = arr2[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
              l2 = _step8.value;
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
            _didIteratorError8 = true;
            _iteratorError8 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
                _iterator8["return"]();
              }
            } finally {
              if (_didIteratorError8) {
                throw _iteratorError8;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
            _iterator7["return"]();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
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
};
task3.isPalindrome('aba34');
task3.charCount('hellooo');
task3.areAnagrams("Yak, went hllo", "Yak. tenw hllo");