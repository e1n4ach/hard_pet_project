/*
Задача: реализовать собственный аналог Promise.all.

Функция promiseAll принимает массив промисов.

Нужно вернуть новый Promise, который:

1. Дожидается выполнения всех входных промисов.
2. Если все выполнились успешно —
   resolve'ится массивом результатов.
3. Результаты должны быть в том же порядке,
   что и исходные промисы,
   даже если они завершились в другом порядке.
4. Если хотя бы один Promise завершился с ошибкой —
   итоговый Promise должен сразу вызвать reject
   с этой ошибкой.

Пример:

const p1 = new Promise(resolve =>
  setTimeout(() => resolve('first'), 300)
)

const p2 = new Promise(resolve =>
  setTimeout(() => resolve('second'), 100)
)

const p3 = new Promise(resolve =>
  setTimeout(() => resolve('third'), 200)
)

promiseAll([p1, p2, p3]).then(console.log)

Ожидаемый результат:

['first', 'second', 'third']

Несмотря на то, что p2 завершился раньше p1.


Пример с ошибкой:

const p1 = Promise.resolve(1)
const p2 = Promise.reject('error')
const p3 = Promise.resolve(3)

promiseAll([p1, p2, p3])
  .then(console.log)
  .catch(console.error)

Ожидаемый результат:

error


Условия:
- нельзя использовать Promise.all;
- использовать new Promise;
- использовать then / catch;
- пустой массив должен вернуть Promise,
  который resolve'ится в [].
*/


function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = []
        let completed = 0

        if (promises.length === 0) {
            resolve([])
            return
        }

        for (let i = 0; i < promises.length; i++) {
            promises[i]
            .then((value) => {
                results[i] = value
                completed += 1

                if (completed === promises.length) {
                    resolve(results)
                }
            })
            .catch((error) => {
                reject(error)
            })
        }
    })
}