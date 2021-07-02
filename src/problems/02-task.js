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
    printInFrame: function (srcString, ch) {
        var srcStringMy = srcString
        var maxLength = 0
        var output = []
        var temproraryWords = ''
        var line = ''
        var star = ch
        for (word of srcStringMy.split(" ")) {
            if (word.length > maxLength) {
                maxLength = word.length
            }
        }
        var words = srcStringMy.split(" ")
        for (i in words) {
            temproraryWords = words[i]
            while (temproraryWords.length !== maxLength + 1) {
                // console.log(" temproraryWords is in while loop is"+ temproraryWords)
                temproraryWords += " "
            }
            temproraryWords = ch + " " + temproraryWords
            temproraryWords += ch
            output.push(temproraryWords)
        }
        for (var i = 0; i < maxLength + 4; i++) {
            line += star
        }
        console.log(line)
        for (w of output) {
            console.log(w)
        }
        console.log(line)
    },

    /*
    reverseString('abc') => 'cba';
     */
    reverseString(str) {
        var output  =''
        for (i of str){
            output= i+output
        }
        console.log(output)
    },
    /*
    reverseNumber(2) => 2
    reverseNumber(12345) => 54321
    reverseNumber(543210) => 12345
    reverseNumber(1020) => 201
    reverseNumber(-345) => -543
     */
    reverseNumber: function (n) {
        var output  =''
        var end_output = ''
        var list = []
        var list_minus = ["-"]
        for (i of n.toString()){
            output= i+output
        }
        for (i of output){
            list.push(i)
        }
        var length = output.length
        if (list[0]==="0"){
            list.splice(0,1)
            length=length-1
        }
        if( list[length-1]==="-"){
            list.splice(length-1,length)
            for ( i of list){
                list_minus.push(i)
            }

            list.splice(0,list.length)
            for(i of list_minus){
                list.push(i)
            }
        }
        for( i of list){
            end_output+=i
        }
        console.log(Number(end_output))
    },
    /*
    capitalize('this string will be capitalized') => 'This String Will Be Capitalized'
     */
    capitalizeWords: function (str) {
        var MyStr=''
        for (word of str.split(" ")){
            var lower = word.toLowerCase()
            MyStr += word.charAt(0).toUpperCase() + lower.slice(1) + " "
        }
        console.log(MyStr)

    },
    /*
    chunk([1, 2, 3, 4, 5], 3) => [[1, 2, 3], [4, 5]]
     */
    chunk: function (arr, chunkSize) {
        var number = 0
        output = []
        chunk_list=[]
        for ( i of arr){
            if(number !== chunkSize){
                chunk_list.push(i)
                number++
            }
            else{
                output.push(chunk_list)
                chunk_list=[]
                number=1
                chunk_list.push(i)
            }
        }
        if(chunk_list.length !== 0){
            output.push(chunk_list)
        }
        console.log(output)
    }
};
task2.printInFrame('Dima is the best', '!')
task2.reverseString("hello")
task2.reverseNumber(-340)
task2.capitalizeWords("Hello friends! My name is someone.")
task2.chunk([1,2,3,4,5,6,7,8],5)

