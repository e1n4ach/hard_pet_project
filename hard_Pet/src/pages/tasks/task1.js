/*
Дана строка, состоящая из круглых (), квадратных [] и фигурных {} скобок, а также произвольных других символов (буквы, цифры, пробелы), которые нужно игнорировать.

Нужно написать функцию checkBrackets(str), которая:

Проверяет, что все скобки в строке правильно сбалансированы (каждой открывающей соответствует закрывающая того же типа, и порядок вложенности не нарушен).
Если строка сбалансирована — возвращает максимальную глубину вложенности скобок (число).
Если не сбалансирована — возвращает -1.

([{}]) -> true
(]) - false
ac([]) -> true

asd}hbv
((((
(]
(
*/

function checkBrackets(str) {
    if(str.length == 0) {
        return -1
    }

    let result = 0
    const dictOpen = {
        '(' : ')',
        '[' : ']',
        '{' : '}',
    }

    const dictClose = {
        ')' : '(',
        ']' : '[',
        '}' : '{',
    }

    const openedArray = []

    for(let i = 0; i < str.length; i++) {
        if (dictOpen[str[i]]) {
            openedArray.push(str[i])
        }
        /*(Object.values(dictOpen).include(str[i])) */
        if(dictClose[str[i]]) {         
            if(openedArray[openedArray.length - 1] == dictClose[str[i]]) {
                result += 1
                openedArray.pop()
            } else {
                return -1
            }
        }
    }

    if(openedArray.length != 0) {
        return -1
    }

    return result
}

console.log(checkBrackets('([{}])'))
console.log(checkBrackets('(])'))
console.log(checkBrackets('ac([])'))
console.log(checkBrackets('asd}hbv'))
console.log(checkBrackets('(]'))

console.log(checkBrackets('absdasbdasdasb([{}])'))
console.log(checkBrackets('abc'))
