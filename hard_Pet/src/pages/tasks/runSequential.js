/*
Задача: реализовать последовательный запуск асинхронных задач.

Функция runSequential принимает массив функций.
Каждая функция при вызове возвращает Promise.

Нужно запускать задачи строго по очереди:
- следующая задача начинается только после завершения предыдущей;
- результаты нужно вернуть массивом в том же порядке;
- если какая-то задача завершается с ошибкой —
  итоговый Promise должен reject'иться с этой ошибкой,
  а следующие задачи запускаться не должны.

Пример:

const tasks = [
  () => new Promise(resolve =>
    setTimeout(() => resolve('first'), 300)
  ),

  () => new Promise(resolve =>
    setTimeout(() => resolve('second'), 100)
  ),

  () => new Promise(resolve =>
    setTimeout(() => resolve('third'), 200)
  ),
]

runSequential(tasks).then(console.log)

Ожидаем:

через ~300 мс завершилась first
↓
только после этого запустилась second
↓
через ~100 мс завершилась second
↓
только после этого запустилась third
↓
через ~200 мс:

['first', 'second', 'third']


Важно:
- задачи передаются именно как ФУНКЦИИ,
  возвращающие Promise;
- нельзя использовать Promise.all;
- задачи нельзя запускать заранее;
- пустой массив должен вернуть Promise с [].
*/

async function runSequential(tasks) {
    const results = []

    for (const task of tasks) {
        const result = await task()
        results.push(result)
    }

    return results
}