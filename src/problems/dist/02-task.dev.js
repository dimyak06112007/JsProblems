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
    // var words = srcString.split(" ").filter(w=> w !== '')
    var maxLength = "";
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = srcString.split(" ")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        word = _step.value;
        maxLength = word.length;
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

    var words = srcString.split(" ");

    for (var i = 0; i < words.length - 1; i++) {
      while (words[i].length !== maxLength) {
        words[i] += " ";
      }

      words[i] = ch + " " + words[i];
      words[i] += ch;
    }

    console.log(words); // for (word1 of srcString.split(" ")){
    //     console.log(word1)
    // }
  },

  /*
  reverseString('abc') => 'cba';
   */
  reverseString: function reverseString(str) {},

  /*
  reverseNumber(2) => 2
  reverseNumber(12345) => 54321
  reverseNumber(543210) => 12345
  reverseNumber(1020) => 201
  reverseNumber(-345) => -543
   */
  reverseNumber: function reverseNumber(n) {},

  /*
  capitalize('this string will be capitalized') => 'This String Will Be Capitalized'
   */
  capitalizeWords: function capitalizeWords(str) {},

  /*
  chunk([1, 2, 3, 4, 5], 3) => [[1, 2, 3], [4, 5]]
   */
  chunk: function chunk(arr, chunkSize) {}
};
task2.printInFrame('This string will be printed in frame', '*');