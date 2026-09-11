/*
Задача: оптимизировать компонент так,
чтобы дочерний компонент не ререндерился без необходимости.

Есть Parent и Child.

Parent хранит два состояния:
1. count
2. text

Child получает:
- count
- функцию onIncrement

Проблема:
когда пользователь печатает в input и меняется text,
Child тоже ререндерится, хотя его данные не изменились.

Нужно сделать так, чтобы:
- Child ререндерился, когда меняется count;
- Child НЕ ререндерился, когда меняется только text;
- кнопка внутри Child продолжала увеличивать count.

Условия:
- использовать React.memo;
- использовать useCallback;
- понять, зачем useCallback здесь вообще нужен.
*/

import { memo, useCallback, useState } from 'react'

const Child = ({
  count,
  onIncrement,
}: {
  count: number
  onIncrement: () => void
}) => {
  console.log('Child render')

  return (
    <div>
      <div>Count: {count}</div>

      <button onClick={onIncrement}>
        Increment
      </button>
    </div>
  )
}

const MemoizedChild = memo(Child)

const Parent = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  const memoizedHandleIncrement = useCallback( () => {
    setCount((prev) => prev + 1)
  }, [])

  return (
    <div>
      <input
        value={text}
        onChange={(event) => {
          setText(event.target.value)
        }}
      />

      <MemoizedChild
        count={count}
        onIncrement={memoizedHandleIncrement}
      />
    </div>
  )
}