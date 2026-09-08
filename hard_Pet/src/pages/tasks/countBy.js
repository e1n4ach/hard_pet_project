/*
Задача: реализовать функцию countBy.

Функция принимает:
1. массив объектов
2. ключ, по которому нужно сгруппировать элементы

Нужно вернуть объект, где:
- ключи — значения указанного поля
- значения — количество элементов в каждой группе

Пример:

const users = [
  { name: 'Alex', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Anna', role: 'admin' },
  { name: 'John', role: 'user' },
  { name: 'Max', role: 'user' },
]

countBy(users, 'role')

Ожидаемый результат:

{
  admin: 2,
  user: 3
}

Ограничения:
- не использовать lodash
- не использовать Object.groupBy
- решить через обычный цикл
*/

function countBy(items, key) {
    const result = {}
    for (const item of items) {
        const pair = item[key]

        if(pair in result) {
            result[pair] += 1
        } else {
            result[pair] = 1
        }
    }

    return result
}