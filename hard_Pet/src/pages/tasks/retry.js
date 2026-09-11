/*
Задача: реализовать функцию retry.

Функция retry принимает:
1. функцию task, которая возвращает Promise
2. количество попыток attempts

Нужно вызвать task.
Если task выполнилась успешно — сразу вернуть результат.

Если task завершилась с ошибкой —
попробовать вызвать её ещё раз.

Всего можно сделать не больше attempts попыток.

Если все попытки завершились с ошибкой —
итоговый Promise должен reject'иться последней ошибкой.


Пример:

let count = 0

const task = () => {
  count += 1

  if (count < 3) {
    return Promise.reject('error')
  }

  return Promise.resolve('success')
}

retry(task, 3).then(console.log)

// expected:
// success


Ещё пример:

const alwaysFail = () => Promise.reject('fail')

retry(alwaysFail, 3)
  .catch(console.error)

// task будет вызвана 3 раза
// итоговая ошибка: 'fail'


Условия:
- task вызывается только по мере необходимости;
- если попытка успешна — остальные не выполняются;
- нельзя использовать Promise.all;
- можно использовать async/await.
*/

async function retry(task, attempts) {
    for (let i = 0; i < attempts; i++) {
        try {
            const result = await task()
            return result

        } catch (error) {
            if (i == attempts - 1) {
                throw(error)
            }
        }
    }
}