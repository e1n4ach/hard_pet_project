/*
Задача: реализовать функцию once.

Функция once принимает другую функцию fn
и возвращает новую функцию.

Новая функция должна вызвать fn только при первом вызове.
Все последующие вызовы должны игнорироваться.

Пример:

const logOnce = once((value) => {
  console.log(value)
})

logOnce('hello')
logOnce('world')
logOnce('test')

Ожидаемый вывод:

hello

Условия:
- не использовать библиотеки;
- сохранить аргументы первого вызова;
- решить через замыкание.
*/

function once(fn) {
    let called = false

    return function (...args) {
        if(!called) {
            called = true
            fn(...args)
        }
    }
}