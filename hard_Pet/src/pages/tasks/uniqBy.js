/*
Задача: реализовать функцию uniqBy.

Функция принимает:
1. массив объектов
2. ключ, по которому нужно определять уникальность

Нужно вернуть новый массив, в котором останется только
первый объект с каждым уникальным значением указанного поля.

Пример:

const users = [
  { id: 1, name: 'Alex' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Anna' },
  { id: 3, name: 'John' },
  { id: 2, name: 'Max' },
]

uniqBy(users, 'id')

Ожидаемый результат:

[
  { id: 1, name: 'Alex' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'John' },
]

Важно:
- если значение ключа уже встречалось, такой объект пропускаем;
- сохраняем именно первый встретившийся объект;
- не использовать lodash;
- решить через обычный цикл.
*/

function uniqBy(items, key) {
  const result = []
  const seen = new Set()

  for(const item of items) {
    const uniq = item[key]

    if(!(seen.has(uniq))) {
      seen.add(uniq)
      result.push(item)
    }
  }

  return result
}