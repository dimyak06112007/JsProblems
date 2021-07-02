"use strict";

var task1 = {
  //написать логику для подсчета суммы от 1 до n
  sumFromOneToN: function sumFromOneToN(n) {
    var sum = 0;

    for (var _i = 1; _i <= n; _i++) {
      sum += _i;
    }

    return sum;
  },
  //на входе массив объектов, среди которых могут быть числа
  //вернуть сумму всех чисел, что есть в массиве, если чисел нет - вернуть 0
  totalSum: function totalSum(array) {
    var sum = 0;
    var noNumbers = true;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        i = _step.value;

        if (typeof i === "number") {
          sum += i;
          noNumbers = false;
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

    if (noNumbers) {
      return 0;
    } else {
      return sum;
    }
  },
  //ф-ция должна возвращать true, если элемент elem присутствует в массиве, иначе false
  includes: function includes(array, elem) {
    var here = false;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = array[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        i = _step2.value;

        if (i === elem) {
          here = true;
        }
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

    return here;
  },
  //на входе 2 массива, вернуть массив, в котором будут элементы из этих 2х массивов
  concat: function concat(array1, array2) {
    var similar = [];
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = array1[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        i1 = _step3.value;
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = array2[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            i2 = _step4.value;

            if (i1 === i2) {
              similar.push(i1);
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

    return similar;
  },

  /*написать ф-цию объеденения 2х массивов в 1 таким образом, что сначала  идут первые элемент, потом вторые элементы и тд
  если массивы содержать разное кол-во элементов, то все элементы, после одинакового кол-ва просто дописать в конец результирующего массива
  combine([1, 2, 3], ['a', 'b', 'c', 'd'])
  [1, 'a', 2, 'b', 3, 'c', 'd']
   */
  combine: function combine(array1, array2) {
    var len1 = array1.length;
    var len2 = array2.length;
    var smaller;
    var bigger;
    var list = [];

    if (len1 > len2) {
      smaller = len2;
      bigger = len1;
    } else {
      smaller = len1;
      bigger = len2;
    }

    for (var number = 0; number < smaller; number++) {
      list.push(array1[number]);
      list.push(array2[number]);
    }

    if (len1 === bigger) {
      while (smaller < bigger) {
        list.push(array1[smaller]);
        smaller++;
      }
    }

    if (len2 === bigger) {
      console.log("in loop");

      while (smaller < bigger) {
        list.push(array2[smaller]);
        smaller++;
      }
    }

    return list;
  }
};
console.log(task1.sumFromOneToN(3));
console.log(task1.totalSum([1, "sf", true, 3]));
console.log(task1.includes([1, "sf", true, 3], "sft"));
console.log(task1.concat(["h", 'e', "l", "l", 'o'], ["h", 'e', 'y']));
console.log(task1.combine([1, 2, 3], ['a', 'b', 'c', 'd', 'e']));