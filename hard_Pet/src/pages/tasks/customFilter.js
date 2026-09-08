/*
Задача: реализовать собственный аналог Array.prototype.filter.

Функция customFilter принимает:
1. массив items
2. callback-функцию

Нужно вернуть новый массив только с теми элементами,
для которых callback вернул true.

Пример:

customFilter([1, 2, 3, 4, 5], (item) => item % 2 === 0)

Ожидаемый результат:

[2, 4]


Ещё пример:

const users = [
  { name: 'Alex', age: 17 },
  { name: 'Bob', age: 25 },
  { name: 'Anna', age: 20 },
]

customFilter(users, (user) => user.age >= 18)

Ожидаемый результат:

[
  { name: 'Bob', age: 25 },
  { name: 'Anna', age: 20 },
]


Дополнительно callback должен получать:
1. текущий элемент
2. индекс
3. исходный массив

Условия:
- не использовать .filter();
- исходный массив не изменять;
- решить через обычный цикл.
*/

function customFilter(items, callback) {
    const result = []
    for(let i = 0; i < items.length; i++){
        const rez = callback(items[i], i, items)
        if (rez) {
            result.push(items[i])
        }
    }
    return result
}