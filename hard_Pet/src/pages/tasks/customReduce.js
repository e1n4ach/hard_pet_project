/*
Задача: реализовать собственный аналог Array.prototype.reduce.

Функция customReduce принимает:
1. массив items
2. callback-функцию
3. initialValue — начальное значение аккумулятора

Callback получает:
1. accumulator — накопленное значение
2. currentValue — текущий элемент
3. index — индекс
4. array — исходный массив

Нужно пройти по массиву и вернуть итоговое накопленное значение.

Пример 1:

customReduce(
  [1, 2, 3, 4],
  (acc, item) => acc + item,
  0
)

Ожидаемый результат:

10


Пример 2:

customReduce(
  ['a', 'b', 'c'],
  (acc, item) => acc + item,
  ''
)

Ожидаемый результат:

'abc'


Пример 3:

customReduce(
  [1, 2, 3],
  (acc, item) => {
    acc.push(item * 2)
    return acc
  },
  []
)

Ожидаемый результат:

[2, 4, 6]


Условия:
- не использовать .reduce();
- решить через обычный цикл;
- initialValue всегда передаётся;
- исходный массив не изменять.
*/

function customReduce(items, callback, initialValue) {
    let acum = initialValue
    for(let i = 0; i < items.length; i++) {
        acum = callback(acum, items[i], i, items)
    }
    return acum
}