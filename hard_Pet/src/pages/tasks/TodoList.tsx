/*
Задача: реализовать Todo List.

Нужно сделать компонент TodoList.

Функциональность:

1. Есть input для ввода текста новой задачи.
2. Есть кнопка "Add".
3. При нажатии "Add":
   - новая задача добавляется в список;
   - input очищается.

4. Каждая задача должна содержать:
   {
     id: number,
     text: string
   }

5. Рядом с каждой задачей есть кнопка "Delete".
6. По нажатию "Delete" задача удаляется.
7. Пустую строку добавлять нельзя.

Пример:

Ввели:
"Learn React"

Нажали Add

Получаем:

Learn React   [Delete]

Потом добавили:
"Learn TypeScript"

Получаем:

Learn React        [Delete]
Learn TypeScript   [Delete]

Нажали Delete у первой задачи:

Learn TypeScript   [Delete]


Условия:
- использовать useState;
- input должен быть controlled;
- задачи хранить в массиве state;
- использовать map для отображения;
- использовать filter для удаления;
- исходный массив напрямую не мутировать.
*/

import { useState } from "react"

type Todo = {
  id: number
  text: string
}



const TodoList = () => {
    const [inp, setInp] = useState('')
    const [tasks, setTasks] = useState<Todo[]>([])

    const handleAdd = () => {
        if (inp.length === 0) {
            return
        }

        const newTask = {
            id: Date.now(),
            text: inp,
        }

        setTasks((prev) => [
            ...prev,
            newTask,
        ])

        setInp('')
    }

    const handleDelete = (id: number) => {
        setTasks((prev) =>
            prev.filter((task) => task.id !== id)
        )
    }

    return(
        <div>
            <input 
            value={inp}
            onChange={(event) => (setInp(event.target.value))}/>

            <button onClick={handleAdd}>Add</button>

            

            {tasks.map((task) => (
                <div key={task.id}>
                    {task.text}
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}