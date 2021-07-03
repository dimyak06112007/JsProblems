"use strict";

var task4 = {
  httpGetRequest: function httpGetRequest(url, params, callback) {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

    var xhr = new XMLHttpRequest();
    var param = params.replace(/\s/g, '');
    var str = '';
    xhr.open("GET", url + '?' + param, true);

    function callbackk(str) {
      console.log(str);
    }

    xhr.onreadystatechange = function () {
      if (xhr.status === 200) {
        str = xhr.responseText;
        callbackk(str);
      }

      if (xhr.status === 404) {
        str = "not found resources";
        callbackk(str);
      }
    };

    xhr.handleError = function () {
      str = "error";
      callbackk(str);
    };

    xhr.send();
    /**
     * аргументы:
     * url - адрес сервера
     * params - объект, в котором хранятся параметры для запроса
     * этот объект должен быть преобразован в строку и добавлен к url после символа '?'
     * callback - ф-ция которая будет вызвана после того как запрос выполнен и данные удачно распарсились
     * callback должен вызываться так:
     * если случилась какая-то ошибка то callback(error), если ошибки не было то callback(null, data);
     * использовать XmlHttpRequest 
     * https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest
     *  
     */
  },
  objectToQuery: function objectToQuery(obj) {
    var output = '';
    var firsttime = true;

    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        var value = obj[key];

        if (firsttime) {
          output += "".concat(key, "=").concat(value);
          firsttime = false;
        } else {
          output += "&".concat(key, "=").concat(value);
        }
      }
    }

    console.log(output); //ф-ция на вход получает объект {key1: value1, key2: value2,.... } и возваращет строку в виде key1=value1&key2=value2....
  },
  queryToObject: function queryToObject(query) {
    var obj = new Object();
    var list = [];
    var pair_list = [];
    var name;
    var value;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = query.split("&")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        pair = _step.value;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = pair.split("=")[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            item = _step2.value;
            pair_list.push(item);
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

        list.push(pair_list);
        pair_list = [];
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

    for (var _i = 0, _list = list; _i < _list.length; _i++) {
      pair = _list[_i];
      name = pair[0];
      value = pair[1];
      obj[name] = value;
    }

    console.log(obj); //ф-ция на вход получает строку в виде key1=value1&key2=value2.... и возваращет объект {key1: value1, key2: value2,.... }
  }
}; // task4.httpGetRequest("https://reqres.in/api/users","page=2")
// task4.objectToQuery({"key1": "value1", "key2": "value2", "key3": "value3"})

task4.queryToObject('key1=value1&key2=value2&key3=value3');