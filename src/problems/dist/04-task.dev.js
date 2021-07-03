"use strict";

var task4 = {
  httpGetRequest: function httpGetRequest(url, params, callback) {
    var myRequest = new XMLHttpRequest();
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
  objectToQuery: function objectToQuery(obj) {//ф-ция на вход получает объект {key1: value1, key2: value2,.... } и возваращет строку в виде key1=value1&key2=value2....
  },
  queryToObject: function queryToObject(query) {//ф-ция на вход получает строку в виде key1=value1&key2=value2.... и возваращет объект {key1: value1, key2: value2,.... }
  }
};