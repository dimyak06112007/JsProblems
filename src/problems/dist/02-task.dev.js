"use strict";

var task2 = {
  /*на входе строка @srcString, в которой слова разделены пробелами, и ch - символ, из которого будем "рисовать" рамку
  вывести строку на консоль, так что-бы каждое слово было в новой строке а весь вывод был в текстовой псевдорамке
  например
  printInFrame('This string will be printed in frame', '*');
  ***********
  * This    *
  * string  *
  * will    *
  * be      *
  * printed *
  * in      *
  * frame   *
  * *********
   */
  printInFrame: function printInFrame(srcString, ch) {
    var srcStringMy = srcString;
    var maxLength = 0;
    var output = [];
    var temproraryWords = '';
    var line = '';
    var star = ch;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = srcStringMy.split(" ")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        word = _step.value;

        if (word.length > maxLength) {
          maxLength = word.length;
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

    var words = srcStringMy.split(" ");

    for (i in words) {
      temproraryWords = words[i];

      while (temproraryWords.length !== maxLength + 1) {
        // console.log(" temproraryWords is in while loop is"+ temproraryWords)
        temproraryWords += " ";
      }

      temproraryWords = ch + " " + temproraryWords;
      temproraryWords += ch;
      output.push(temproraryWords);
    }

    for (var i = 0; i < maxLength + 4; i++) {
      line += star;
    }

    console.log(line);

    for (var _i = 0, _output = output; _i < _output.length; _i++) {
      w = _output[_i];
      console.log(w);
    }

    console.log(line);
  },

  /*
  reverseString('abc') => 'cba';
   */
  reverseString: function reverseString(str) {
    var output = '';
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = str[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        i = _step2.value;
        output = i + output;
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

    console.log(output);
  },

  /*
  reverseNumber(2) => 2
  reverseNumber(12345) => 54321
  reverseNumber(543210) => 12345
  reverseNumber(1020) => 201
  reverseNumber(-345) => -543
   */
  reverseNumber: function reverseNumber(n) {
    var output = '';
    var end_output = '';
    var list = [];
    var list_minus = ["-"];
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = n.toString()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        i = _step3.value;
        output = i + output;
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
      for (var _iterator4 = output[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        i = _step4.value;
        list.push(i);
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

    var length = output.length;

    if (list[0] === "0") {
      list.splice(0, 1);
      length = length - 1;
    }

    if (list[length - 1] === "-") {
      list.splice(length - 1, length);
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = list[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          i = _step5.value;
          list_minus.push(i);
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

      list.splice(0, list.length);
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = list_minus[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          i = _step6.value;
          list.push(i);
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
    }

    for (var _i2 = 0, _list = list; _i2 < _list.length; _i2++) {
      i = _list[_i2];
      end_output += i;
    }

    console.log(Number(end_output));
  },

  /*
  capitalize('this string will be capitalized') => 'This String Will Be Capitalized'
   */
  capitalizeWords: function capitalizeWords(str) {
    var MyStr = '';
    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
      for (var _iterator7 = str.split(" ")[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
        word = _step7.value;
        var lower = word.toLowerCase();
        MyStr += word.charAt(0).toUpperCase() + lower.slice(1) + " ";
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

    console.log(MyStr);
  },

  /*
  chunk([1, 2, 3, 4, 5], 3) => [[1, 2, 3], [4, 5]]
   */
  chunk: function chunk(arr, chunkSize) {
    var number = 0;
    output = [];
    chunk_list = [];
    var _iteratorNormalCompletion8 = true;
    var _didIteratorError8 = false;
    var _iteratorError8 = undefined;

    try {
      for (var _iterator8 = arr[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
        i = _step8.value;

        if (number !== chunkSize) {
          chunk_list.push(i);
          number++;
        } else {
          output.push(chunk_list);
          chunk_list = [];
          number = 1;
          chunk_list.push(i);
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

    if (chunk_list.length !== 0) {
      output.push(chunk_list);
    }

    console.log(output);
  }
};
task2.printInFrame('Dima is the best', '!');
task2.reverseString("hello");
task2.reverseNumber(-340);
task2.capitalizeWords("Hello friends! My name is someone.");
task2.chunk([1, 2, 3, 4, 5, 6, 7, 8], 5);