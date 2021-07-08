function MyTry(word){
    let outputStr = new Object()
    for(let letter of word){
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
}
console.log(MyTry("hiihe"))
