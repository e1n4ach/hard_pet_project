import { useEffect, useRef } from "react"

/*
Задача: реализовать кастомный хук useClickOutside.

Хук принимает:
1. ref на DOM-элемент
2. callback, который нужно вызвать,
   если пользователь кликнул вне этого элемента

Пример использования:
*/
const Modal = () => {
  const modalRef = useRef<HTMLDivElement>(null)

  useClickOutside(modalRef, () => {
    console.log('clicked outside')
  })

  return (
    <div ref={modalRef}>
      Modal content
    </div>
  )
}
/*
Поведение:

клик внутри modal
→ callback НЕ вызывается

клик вне modal
→ callback вызывается


Условия:
- использовать useEffect;
- использовать addEventListener;
- использовать removeEventListener;
- использовать ref;
- корректно очищать listener при unmount.
*/

function useClickOutside(
    ref,
    callback
) {
    useEffect(() => {
        const listner = (event) => {
            if (
                ref.current && 
                !ref.current.contains(event.target as Node)
            ) {
                callback()
            }
        }

        document.addEventListener('click', listner)

        return () => {
            document.removeEventListener('click', listner)
        }
    }, [ref, callback])
}