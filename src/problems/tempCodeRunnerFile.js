const task0 = {
    //вернуть сумму 3х чисел
    sum(a, b, c) {
        let sum = 0;
        sum = a + b + c;
        return sum;
    },
    //вернуть сумму чисел, но надо учесть что аргументы могут быть не только числами, использовать оператор typeof в связке с if-else
    safeSum(a, b, c) {
        let sum = 0;
        if (typeof a === 'number') {

            sum = sum + a
        }
        if (typeof b === 'number') {
            sum = sum + b
        }
        if (typeof c === 'number') {
            sum = sum + c
        }
        return sum
    },
    // вернуть максимальное число
    max(a, b, c) {
        let m = a;
        //ваш код тут
        return m;
    },
    //вернуть минимальное число
    min(a, b, c) {
        let m = a;
        //ваш код тут
        return m;
    },
};
console.log(task0.safeSum('s',2,3))