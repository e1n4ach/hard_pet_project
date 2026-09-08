/*
Задача: реализовать собственный аналог Array.prototype.map.

Функция customMap принимает:
1. массив items
2. callback-функцию

Нужно вернуть новый массив, где каждый элемент —
результат вызова callback для соответствующего элемента исходного массива.

Пример:

customMap([1, 2, 3], (item) => item * 2)

Ожидаемый результат:

[2, 4, 6]


Ещё пример:

const users = [
  { name: 'Alex', age: 20 },
  { name: 'Bob', age: 25 },
]

customMap(users, (user) => user.name)

Ожидаемый результат:

['Alex', 'Bob']


Дополнительно callback должен получать:
1. текущий элемент
2. индекс элемента
3. исходный массив

То есть должно работать:

customMap(['a', 'b'], (item, index, array) => {
  return `${index}: ${item}`
})

Результат:

['0: a', '1: b']


Условия:
- не использовать .map();
- исходный массив не изменять;
- решить через обычный цикл.
*/

function customMap(items, callback) {
    const result = []

    for (let i = 0; i < items.length; i++) {
       result.push(callback(items[i], i, items))
    }

    return result
}