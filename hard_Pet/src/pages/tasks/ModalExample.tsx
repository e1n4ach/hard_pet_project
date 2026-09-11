/*
Задача: реализовать компонент с модальным окном.

Нужно:

1. Сделать кнопку "Open modal".
2. По нажатию открыть модальное окно.
3. Внутри модального окна:
   - текст "Modal content"
   - кнопка "Close"
4. По кнопке Close модальное окно должно закрываться.
5. Когда modal закрыта, её DOM-разметки быть не должно.

Условия:
- использовать useState;
- использовать условный render;
- сторонние библиотеки не использовать.
*/

import { useState } from "react"

const ModalExample = () => {
    const [modal, setModal] = useState(false)

    const handleOpen = () => {
        setModal(true)
    }
    const handleClose = () => {
        setModal(false)
    }
    return (
        <div>
            <button onClick={handleOpen}>
                Open modal
            </button>

            {modal && (
            <div>
                Modal content

                <button onClick={handleClose}>
                    Close
                </button>
            </div>
            )}
        </div>
    )
} 