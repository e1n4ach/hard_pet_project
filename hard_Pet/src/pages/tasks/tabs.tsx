/*
Задача: реализовать компонент Tabs.

Есть массив вкладок:

const tabs = [
  {
    id: 'profile',
    title: 'Profile',
    content: 'Profile content',
  },
  {
    id: 'settings',
    title: 'Settings',
    content: 'Settings content',
  },
  {
    id: 'security',
    title: 'Security',
    content: 'Security content',
  },
]

Нужно сделать компонент Tabs, который:

1. Показывает кнопки всех вкладок.
2. По умолчанию активна первая вкладка.
3. При клике на кнопку активная вкладка меняется.
4. На странице отображается content только активной вкладки.
5. Активную вкладку нужно хранить в React state.

Ожидаемое поведение:

[Profile] [Settings] [Security]

Profile content

Нажали Settings:

[Profile] [Settings] [Security]

Settings content


Условия:
- использовать useState;
- не создавать отдельный state для каждой вкладки;
- вкладки должны строиться через map;
- не использовать сторонние библиотеки.
*/


import { useState } from 'react'

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id)

    const activeTabData = tabs.find((tab) => {
        return tab.id === activeTab
    })

    return (
        <div>
        {tabs.map((tab) => {
            return (
                <button
                    key={tab.id}
                    onClick={() => {
                        setActiveTab(tab.id)
                    }}
                >
                    {tab.title}
                </button>
            )
        })}

        <div>
            {activeTabData?.content}
        </div>
        </div>
    )
}