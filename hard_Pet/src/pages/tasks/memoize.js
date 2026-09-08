/*
Задача: реализовать функцию memoize.

Функция memoize принимает функцию fn
и возвращает новую функцию.

Новая функция должна кешировать результат вызова fn.

Если функция вызывается повторно с теми же аргументами,
fn второй раз вызываться не должна —
нужно вернуть сохранённый результат.

Пример:

const sum = (a, b) => {
  console.log('calculate')
  return a + b
}

const memoizedSum = memoize(sum)

memoizedSum(2, 3)
// console: calculate
// result: 5

memoizedSum(2, 3)
// console ничего не выводит
// result: 5

memoizedSum(4, 5)
// console: calculate
// result: 9

Условия:
- использовать замыкание;
- хранить кеш между вызовами;
- не использовать lodash;
- для начала можно считать, что аргументы —
  строки или числа.
*/

function memoize(fn) {
    const cache = new Map()
    return(...args) => {
        const key = JSON.stringify(args)
        if (cache.has(key)){
            return cache.get(key)
        }
        const result = fn(...args)
        cache.set(key, result)
        return result
    }
}