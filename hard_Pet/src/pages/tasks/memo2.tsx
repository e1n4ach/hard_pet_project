/*
Задача: оптимизировать тяжёлое вычисление через useMemo.

Есть компонент с двумя состояниями:
1. number
2. text

Есть функция expensiveCalculation(number),
которая условно считается "тяжёлой".

Проблема:
при каждом изменении text компонент ререндерится,
и expensiveCalculation(number) вызывается снова,
хотя number не изменился.

Нужно сделать так, чтобы expensiveCalculation
пересчитывалась только когда меняется number.

Условия:
- использовать useMemo;
- text не должен влиять на пересчёт;
- результат вычисления должен отображаться на странице.
*/

import { useMemo, useState } from 'react'

const expensiveCalculation = (num: number) => {
  console.log('calculate')

  let result = 0

  for (let i = 0; i < 10_000_000; i++) {
    result += num
  }

  return result
}

const Example = () => {
  const [number, setNumber] = useState(1)
  const [text, setText] = useState('')

  const memoizedResult = useMemo(() => expensiveCalculation(number), [number])

  return (
    <div>
      <input
        value={text}
        onChange={(event) => {
          setText(event.target.value)
        }}
      />

      <button onClick={() => setNumber((prev) => prev + 1)}>
        Increase number
      </button>

      <div>Result: {memoizedResult}</div>
    </div>
  )
}