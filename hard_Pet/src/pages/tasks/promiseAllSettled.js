/*
Задача: реализовать собственный аналог Promise.allSettled.

Функция promiseAllSettled принимает массив промисов.

Нужно вернуть новый Promise, который:

1. Дожидается завершения ВСЕХ входных промисов.
2. Не падает, если какой-то Promise завершился с ошибкой.
3. Для каждого входного Promise возвращает объект результата.
4. Порядок результатов должен совпадать с порядком исходных промисов.

Если Promise выполнился успешно:

{
  status: 'fulfilled',
  value: <результат>
}

Если Promise завершился с ошибкой:

{
  status: 'rejected',
  reason: <ошибка>
}


Пример:

const p1 = Promise.resolve(1)
const p2 = Promise.reject('error')
const p3 = Promise.resolve(3)

promiseAllSettled([p1, p2, p3])
  .then(console.log)

Ожидаемый результат:

[
  {
    status: 'fulfilled',
    value: 1
  },
  {
    status: 'rejected',
    reason: 'error'
  },
  {
    status: 'fulfilled',
    value: 3
  }
]


Важно:
- даже если p2 упал, нужно дождаться p1 и p3;
- итоговый Promise НЕ должен reject'иться из-за ошибки одного из входных Promise;
- нельзя использовать Promise.allSettled;
- использовать new Promise;
- пустой массив должен resolve'иться в [];
*/

function promiseAllSettled(promises) {
    return new Promise((resolve) => {
        let results = []
        let complited = 0
        if (promises.length == 0) {
            resolve([])
            return
        }

        for (let i = 0; i < promises.length; i++){
            promises[i]
                .then((value) => {
                    results[i] = {
                        status: 'fulfilled',
                        value: value
                    }
                    complited += 1
                    if(complited == promises.length){
                        resolve(results)
                    }
                })
                .catch((error) => {
                    complited += 1
                    results[i] = {
                        status: 'rejected',
                        reason: error
                    }
                    if(complited == promises.length){
                        resolve(results)
                    }
                })
        }
    })
}