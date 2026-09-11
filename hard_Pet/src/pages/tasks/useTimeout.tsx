/*
Задача: реализовать кастомный хук useTimeout.

Хук принимает:
1. callback — функцию, которую нужно вызвать
2. delay — задержку в миллисекундах

После первого рендера хук должен вызвать callback
через указанное количество миллисекунд.

Пример:

const App = () => {
  useTimeout(() => {
    console.log('Hello')
  }, 1000)

  return <div>App</div>
}

Ожидаемое поведение:

через 1 секунду:
Hello


Важно:
- использовать setTimeout;
- использовать useEffect;
- корректно очищать timeout при размонтировании компонента;
- если delay изменился, старый timeout должен отмениться,
  а новый запуститься заново;
- callback может изменяться между рендерами;
- setTimeout не должен запускаться прямо во время render.
*/

import { useEffect, useRef } from "react";

function useTimeout(
    callback: () => void,
    delay: number
) {
    const callbackRef = useRef(callback)

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    useEffect(() => {
        const timer = setTimeout(() => {
            callbackRef.current()
        }, delay)

        return () => {
            clearTimeout(timer)
        }
    }, [delay])
}