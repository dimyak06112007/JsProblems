const task4 = {
    httpGetRequest(url, params, callback) {
        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        var xhr = new XMLHttpRequest();
        var param = params.replace(/\s/g, '');
        var str = ''
        xhr.open("GET", url + '?' + param, true)
        function callbackk(str) {
            console.log(str)
        }
        xhr.onreadystatechange = function () {
            if (xhr.status === 200) {
                str = xhr.responseText
                callbackk(str)
            }
            if (xhr.status === 404) {
                str = "not found resources"
                callbackk(str)
            }
        }
        xhr.handleError = function () {
            str = "error"
            callbackk(str)
        }


        xhr.send()

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

    objectToQuery(obj) {
        var output = ''
        var firsttime = true
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                var value = obj[key];
                if (firsttime) {
                    output += `${key}=${value}`
                    firsttime = false
                } else {
                    output += `&${key}=${value}`
                }
            }
        }
        console.log(output)
        //ф-ция на вход получает объект {key1: value1, key2: value2,.... } и возваращет строку в виде key1=value1&key2=value2....
    },

    queryToObject(query) {
        var obj = new Object()
        var list = []
        var pair_list = []
        var name
        var value
        for (pair of query.split("&")) {
            for (item of pair.split("=")) {
                pair_list.push(item)
            }
            list.push(pair_list)
            pair_list = []
        }
        for(pair of list){
            name = pair[0]
            value = pair[1]
            obj[name] = value
        }
        console.log(obj)
        //ф-ция на вход получает строку в виде key1=value1&key2=value2.... и возваращет объект {key1: value1, key2: value2,.... }
    },
};
// task4.httpGetRequest("https://reqres.in/api/users","page=2")
// task4.objectToQuery({"key1": "value1", "key2": "value2", "key3": "value3"})
task4.queryToObject('key1=value1&key2=value2&key3=value3')