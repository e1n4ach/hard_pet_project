import {memo} from 'react'

interface IProps {
    onClick: () => void
}

export const MemoComponent1 = memo(({onClick}: IProps) => {
    console.log('render')
    

    return <h1 onClick={onClick}> Сколько питомцев??? </h1>
})