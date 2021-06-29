const task2 = {
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
    printInFrame: function(srcString, ch) {
        // var words = srcString.split(" ").filter(w=> w !== '')
        var maxLength = ""
        for (word of srcString.split(" ")){
            maxLength = word.length
        }
        var words = srcString.split(" ")
        for (var i = 0; i < words.length-1; i++){
            while(words[i].length !== maxLength){
                words[i]+=" "
            }
            words[i]=ch+" "+words[i]
            words[i]+=ch
        }
        console.log(words)
        // for (word1 of srcString.split(" ")){
        //     console.log(word1)
        // }
    },

    /*
    reverseString('abc') => 'cba';
     */
    reverseString(str) {

    },
    /*
    reverseNumber(2) => 2
    reverseNumber(12345) => 54321
    reverseNumber(543210) => 12345
    reverseNumber(1020) => 201
    reverseNumber(-345) => -543
     */
    reverseNumber: function(n) {

    },
    /*
    capitalize('this string will be capitalized') => 'This String Will Be Capitalized'
     */
    capitalizeWords: function(str) {

    },
    /*
    chunk([1, 2, 3, 4, 5], 3) => [[1, 2, 3], [4, 5]]
     */
    chunk: function(arr, chunkSize) {

    }
};
task2.printInFrame('This string will be printed in frame', '*')