var task1 = {
    //написать логику для подсчета суммы от 1 до n
    sumFromOneToN: function (n) {
        let sum = 0
        for (let i = 1; i <= n; i++) {
            sum += i
        }
        return sum
    },

    //на входе массив объектов, среди которых могут быть числа
    //вернуть сумму всех чисел, что есть в массиве, если чисел нет - вернуть 0
    totalSum: function (array) {
        let sum = 0
        let noNumbers = true
        for (i of array) {
            if (typeof i === "number") {
                sum += i
                noNumbers = false
            }
        }
        if (noNumbers) {
            return 0
        }
        else {
            return sum
        }
    },

    //ф-ция должна возвращать true, если элемент elem присутствует в массиве, иначе false
    includes: function (array, elem) {
        let here = false
        for (i of array) {
            if (i === elem) {
                here = true
            }
        }
        return here
    },

    //на входе 2 массива, вернуть массив, в котором будут элементы из этих 2х массивов
    concat: function (array1, array2) {
        var similar = []
        for (i1 of array1) {
            for (i2 of array2) {
                if (i1 === i2) {
                    similar.push(i1)
                }
            }
        }
        return similar
    },
    /*написать ф-цию объеденения 2х массивов в 1 таким образом, что сначала  идут первые элемент, потом вторые элементы и тд
    если массивы содержать разное кол-во элементов, то все элементы, после одинакового кол-ва просто дописать в конец результирующего массива
    combine([1, 2, 3], ['a', 'b', 'c', 'd'])
    [1, 'a', 2, 'b', 3, 'c', 'd']
     */
    combine: function (array1, array2) {
        const len1= array1.length
        const len2 = array2.length
        var smaller ="hi"
        var bigger="hello"
        const list= []
        var two  = true
        if (len1>len2){
            smaller  =len2
            bigger  =len1
        }
        else{
            smaller  =len1
            bigger = len2
        }
        for (var number = 1; number<smaller; number++){
            while (two){
                if(number % 2 == 0){
                    list.push(array2[number-1])
                    two = false
                }
                else{
                    list.push(array1[number-1])
                    two = true
                }                
            }
        }
        if(len1===bigger){
            while (smaller<bigger){
                list.push( len1[smaller])
                smaller++
            }
        }
        if(len2 ===bigger){
            while (smaller<bigger){
                list.push( len2[smaller])
                smaller++
            }
        }
        return list
    }
};
console.log(task1.sumFromOneToN(3))
console.log(task1.totalSum([1, "sf", true, 3]))
console.log(task1.includes([1, "sf", true, 3], "sft"))
console.log(task1.concat(["h", 'e', "l", "l", 'o'], ["h", 'e', 'y']))
console.log(task1.combine([1, 2, 3], ['a', 'b', 'c', 'd']))



