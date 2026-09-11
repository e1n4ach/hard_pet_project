/*
Задача: реализовать компонент UsersList.

Есть функция fetchUsers(), которая возвращает Promise
с массивом пользователей.

Нужно:

1. При первом появлении компонента вызвать fetchUsers().
2. Пока запрос выполняется — показать:
   "Loading..."

3. Если запрос завершился ошибкой — показать:
   "Something went wrong"

4. Если запрос успешный —
   вывести имена пользователей списком.

5. Запрос должен выполняться только при первом mount компонента.


Пример данных:

[
  { id: 1, name: 'Alex' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Anna' }
]

Ожидаемый UI после загрузки:

Alex
Bob
Anna


Нужно использовать:
- useState
- useEffect
- async / await или then/catch

Нельзя:
- сторонние библиотеки для запросов
*/

import { useEffect, useState } from "react"


type User = {
  id: number
  name: string
}

const fetchUsers = (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Anna' },
      ])
    }, 1000)
  })
}


const UsersList = () => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetchUsers()
            .then((data) => {
                setUsers(data)
            })
            .catch(()=> {
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if(loading) {
        return (<div> Loading... </div>)
    }
    if(error) {
        return (<div> Something went wrong </div>)
    }
    return(
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    {user.name}
                </div>
            ))}
        </div>
    )
}