/*
Задача: реализовать функцию indexBy.

Функция принимает:
1. массив объектов
2. ключ, значение которого нужно использовать как ключ результирующего объекта

Нужно вернуть объект, где:
- ключи — значения указанного поля
- значения — сами объекты

Пример:

const users = [
  { id: 1, name: 'Alex' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Anna' },
]

indexBy(users, 'id')

Ожидаемый результат:

{
  1: { id: 1, name: 'Alex' },
  2: { id: 2, name: 'Bob' },
  3: { id: 3, name: 'Anna' }
}

Ограничения:
- не использовать lodash
- решить через обычный цикл
*/

function indexBy(items, key) {
    const result = {}
    for (const item of items) {
        const group = item[key]
        result[group] = item
    }
    return result
}