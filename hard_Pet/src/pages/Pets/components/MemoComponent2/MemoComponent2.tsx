import { useRef, useEffect, useState } from 'react'

// TODO: реализовать хук
function usePrevious<T>(value: T): T | undefined {
    const ref = useRef<T | undefined>(undefined)
    useEffect(() => {
        ref.current = value
    })
    return ref.current
}

export function Counter() {
  const [count, setCount] = useState(0)
  const prevCount = usePrevious(count)

  return (
    <div>
      <p>Текущее: {count}</p>
      <p>Предыдущее: {prevCount}</p>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
      <button onClick={() => setCount(c => c - 1)}>-1</button>
    </div>
  )
}
