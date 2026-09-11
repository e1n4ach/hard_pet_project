/*
Задача: реализовать компонент UserSearch.

Есть массив пользователей:*/

const users = [
  { id: 1, name: 'Alex' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Anna' },
  { id: 4, name: 'John' },
]

/*Нужно:

1. Сделать input.
2. Хранить введённое значение в state.
3. При вводе фильтровать пользователей по имени.
4. Фильтрация должна быть без учёта регистра.
5. На странице показывать только подходящих пользователей.
6. Если строка поиска пустая — показывать всех.

Пример:

в input введено:
"an"

Результат:
Anna


Условия:
- использовать useState;
- input должен быть controlled;
- использовать filter;
- исходный массив users не изменять.
*/

import { useState } from "react"

const UserSearch = () => {
    const [inp, setInp] = useState("")
    const filtredUsers = users.filter((user) => user.name.toLowerCase().includes(inp.toLowerCase()))

    return (
        <div>
            <input 
            value={inp} 
            onChange={(event) => {
                setInp(event.target.value)
            }}
            />
            
            <div>
                {filtredUsers.map((user) => (
                    <div key={user.id}>
                        {user.name}
                    </div>
                ))}
            </div>
        </div>
    )
}