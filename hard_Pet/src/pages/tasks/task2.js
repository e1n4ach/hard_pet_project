/* 
Дана строка. Нужно написать функцию longestRun(str), которая находит 
самую длинную последовательность подряд идущих одинаковых символов 
и возвращает объект с этим символом и его длиной.
*/


function longestRun(str) {
    let result = {
        char: '',
        count: 0
    }

    let currentRow = 1
    let currentChar = ''

    if (str.length == 0) {
        return null
    }
    for(let i = 0; i < str.length; i++) {
        if(str[i] == str[i+1]) {
            currentRow += 1
            currentChar = str[i]
        } else if((currentRow!= 1) && (str[i] != str[i+1])) {
            if(currentRow > result.count) {
                result.char = currentChar
                result.count = currentRow
            }
            currentRow = 1
            currentChar = ''
        }

        if((str[i] != str[i+1]) && (result.count == 0)) {
            result.char = str[0]
            result.count = 1
        }
    }

    return result
}



console.log(longestRun("aaabbbccccd"))
console.log(longestRun("abcd"))
console.log(longestRun("11122333"))
console.log(longestRun(""))
console.log(longestRun("aaaaaa"))