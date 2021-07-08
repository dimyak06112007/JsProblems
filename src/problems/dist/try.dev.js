"use strict";

function MyTry(word) {
  var outputStr = new Object();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = word[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var letter = _step.value;
      var didntRepeat = true;

      for (var obj in outputStr) {
        if (obj === letter) {
          console.log("match");
          didntRepeat = false;
          outputStr[obj] += 1;
        }
      }

      if (didntRepeat) {
        console.log(letter);
        outputStr[letter] = 1;
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
}

console.log(MyTry("hiihe"));