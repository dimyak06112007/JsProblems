const task3 = {
    /*
    isPalindrome('a') => true;
    isPalindrome('abc') => false;
    isPalindrome('aabbaa') => true;
     */
    isPalindrome: function (str) {
        const lenOfStr= str.length
        for(let i =  0; i<lenOfStr; i++){
            if(str[i]===str[lenOfStr-i-1]){
                continue
            }else{
                return false
            }
        }
        return true
        // var reverse = ''
        // for (i of str) {
        //     reverse = i + reverse
        // }
        // if (reverse === str) {
        //     console.log(true)
        // }
        // else {
        //     console.log(false)
        // }
    },

    /*
    charCount('abc') => a: 1, b: 1, c: 1
    charCount('Hello') => H: 1, e: 1, l: 2, o: 1
     */
    charCount: function (str) {
        let outputStr = new Object()
        for(let letter of str){
            let didntRepeat = true
            for(let obj in outputStr){
                if(obj === letter){
                    console.log("match")             
                    didntRepeat = false
                    outputStr[obj]+=1
                }
            }
            if(didntRepeat){
                console.log(letter)
                outputStr[letter]= 1
            }
        }
        return outputStr
    },

    /*
    areAnagrams('anagram', 'nag a ram') => true;
    areAnagrams('Eleven plus two', 'Twelve plus one'); => true;
    areAnagrams('O, Draconian devil', 'Leonardo da Vinci') => true;
     */
    areAnagrams: function (str1, str2) {
        var string1 = str1.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase().replace(/\s/g, '')
        var string2 = str2.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase().replace(/\s/g, '')
        var arr1 = []
        var arr2 = []

        for (i of string1) {
            arr1.push(i)
        }
        for (i of string2) {
            arr2.push(i)
        }
        console.log(arr1)
        console.log("-----")
        console.log(arr2)
        for (var iterate =0;iterate < 4; iterate++) {
            console.log("new iteration ----------------------------------------------------------------------")
            for (letter of arr1) {
                console.log('letter of arr1 ' + letter)
                for (l2 of arr2) {
                    console.log('letter of arr2')
                    if (letter === l2) {
                        console.log('they are equal')
                        var ok = true
                        for (var i = 0; i < arr1.length; i++) {
                            if (ok === true) {
                                console.log('ok = true passed')
                                if (arr1[i] === letter) {
                                    arr1.splice(i, 1)
                                    ok = false
                                    console.log(arr1)
                                }
                            }
                        }
                        var ok = true
                        for (var i = 0; i < arr2.length; i++) {
                            if (ok === true) {
                                if (arr2[i] === letter) {
                                    arr2.splice(i, 1)
                                    ok = false
                                    console.log(arr2)
                                }
                            }
                        }

                    }
                }
            }
        }
        if (arr1.length === 0 && arr2.length === 0) {
            console.log(true)
        }
        else {
            console.log(false)
        }
    },
};
// console.log(task3.isPalindrome('aba'))
console.log(task3.charCount('hellooo'))
// task3.areAnagrams("hellooaba34oYhellooaba34oY", "hellaba34oYoohellooaba34oY")