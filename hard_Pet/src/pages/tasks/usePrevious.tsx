/*
Задача: реализовать кастомный хук usePrevious.

Хук принимает текущее значение и должен возвращать
значение с ПРЕДЫДУЩЕГО рендера.

Пример:

const Counter = () => {
  const [count, setCount] = useState(0)

  const previousCount = usePrevious(count)

  return (
    <>
      <div>Current: {count}</div>
      <div>Previous: {previousCount}</div>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  )
}

Поведение:

первый render:
Current: 0
Previous: undefined

нажали кнопку:

Current: 1
Previous: 0

ещё раз:

Current: 2
Previous: 1


Условия:
- реализовать именно кастомный hook;
- использовать React hooks;
- значение должно сохраняться между рендерами;
- useState для хранения предыдущего значения использовать не нужно.
*/

import { useEffect, useRef } from 'react'

function usePrevious<T>(value: T): T | undefined {
  const previous = useRef<T | undefined>(undefined)

  useEffect(() => {
    previous.current = value
  }, [value])

  return previous.current
}