/* Нужно реализовать компонент ClickStreak, который отслеживает последовательные клики по одной и той же кнопке среди нескольких кнопок.

Требования:

На экране отображается 5 кнопок (например, с цифрами 1–5).
Пользователь кликает по кнопкам в любом порядке.
Компонент отображает:
текущую серию: сколько раз подряд кликнули по одной и той же кнопке (если кликнули по другой — серия сбрасывается на 1);
лучшую серию за всё время — максимальную длину такой последовательности и номер кнопки, на которой она была достигнута.

Доп уложнение * в случае быстрого решения задачи:
реализовать ту же логику но в режиме "комбо на время"
тоесть, серия "ударов" (кликов) по одной и той же кнопке прерывается не только при клике на другую, но и при длительной паузе (более чем 1сек)
*/


import { useRef, useState } from 'react';

type Streak = {
  button: number | null
  count: number
}

function ClickStreak() {
    // TODO: реализовать состояние и логику
    const [currentStreak, setCurrentStreak] = useState<Streak>({
        button: null,
        count: 0,
    })     
    const [best, setBest] = useState<Streak>({
        button: null,
        count: 0,
    }) 
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const countUp = (num: number) => {
        let newCount

        if (timerRef.current !== null) {
            clearTimeout(timerRef.current)
        }

        if (currentStreak.button === num) {
            newCount = currentStreak.count + 1
        } else {
            newCount = 1
        }

        const newStreak = {
            button: num,
            count: newCount,
        }

        setCurrentStreak(newStreak)

        if (newCount > best.count) {
            setBest(newStreak)
        }

        timerRef.current = setTimeout(() => {
            setCurrentStreak({
                button: null,
                count: 0,
            })
        }, 1000)
    }

    return (
        <div>
        {[1, 2, 3, 4, 5].map((num) => (
            <button key={num} onClick={() => {countUp(num)}}>
                {num}
            </button>
        ))}
        {/* TODO: вывести текущую и лучшую серию */}
        <div> Текущая серия: кнопка {currentStreak.button}, {currentStreak.count} раза</div>
        <div> Лучшая серия: кнопка {best.button}, {best.count} раза</div>
        </div>
    );
}