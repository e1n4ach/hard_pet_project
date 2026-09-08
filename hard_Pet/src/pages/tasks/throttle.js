/*
Задача: реализовать функцию throttle.

Функция throttle принимает:
1. функцию fn
2. задержку delay в миллисекундах

Она должна вернуть новую функцию.

Новая функция может вызывать fn не чаще,
чем один раз за указанный интервал delay.

Пример:

const throttledLog = throttle((value) => {
  console.log(value)
}, 1000)

throttledLog('a') // вызовется сразу
throttledLog('b') // игнорируется
throttledLog('c') // игнорируется

// прошло 1000 мс

throttledLog('d') // снова вызовется
Ожидаемое поведение:

a
// через следующий разрешённый вызов
d

Условия:

использовать setTimeout;
не использовать lodash;
сохранить аргументы вызова;
решить через замыкание;
первый вызов должен срабатывать сразу.
*/

function throttle(fn, delay) {
  let isThrottled = false

  return (...args) => {
    if(isThrottled == true) {
      return
    }
    fn(...args)
    isThrottled = true
    setTimeout(()=> {
      isThrottled = false
    }, delay)
  }
}