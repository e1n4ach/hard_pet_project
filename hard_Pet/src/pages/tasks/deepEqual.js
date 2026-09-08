/*
Задача: реализовать функцию deepEqual.

Функция принимает два значения и должна определить,
равны ли они по содержимому.

Нужно поддержать:
- примитивы
- массивы
- обычные объекты
- вложенные массивы и объекты

Примеры:

deepEqual(1, 1)
// true

deepEqual(1, '1')
// false

deepEqual(
  { name: 'Alex', age: 20 },
  { name: 'Alex', age: 20 }
)
// true

deepEqual(
  { name: 'Alex', age: 20 },
  { name: 'Alex', age: 21 }
)
// false

deepEqual(
  [1, 2, { a: 3 }],
  [1, 2, { a: 3 }]
)
// true

deepEqual(
  [1, 2],
  [1, 2, 3]
)
// false


Условия:
- не использовать JSON.stringify для всего решения;
- сравнение должно быть рекурсивным;
- порядок ключей в объектах не должен влиять на результат;
- можно пока не учитывать Date, Map, Set, Function и циклические ссылки.
*/

function deepEqual(a, b) {
    if (a === b) {
        return true
    }

    if (typeof a !== typeof b) {
        return false
    }

    if (a === null || b === null) {
        return false
    }

    if (typeof a !== 'object') {
        return false
    }

    if (Array.isArray(a) !== Array.isArray(b)) {
        return false
    }

    if (Array.isArray(a)) {
        if (a.length !== b.length) {
        return false
        }

        for (let i = 0; i < a.length; i++) {
        if (!deepEqual(a[i], b[i])) {
            return false
        }
        }

        return true
    }

    const keysA = Object.keys(a)
    const keysB = Object.keys(b)

    if (keysA.length !== keysB.length) {
        return false
    }

    for (const key of keysA) {
        if (!(key in b)) {
            return false
        }

        if (!deepEqual(a[key], b[key])) {
            return false
        }
    }

    return true
}