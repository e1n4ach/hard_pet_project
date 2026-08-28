import { useRef, useState } from "react"

export function Test(props: any) {
    const [value, setValue] = useState('')
    const timeoutID = useRef(undefined);

    function change(e) {
        const newValue = e.target.value
        setValue(newValue)

        clearTimeout(timeoutID.current)

        timeoutID.current = setTimeout(() => {props.callBack(newValue)}, 300)
    }

    return <input type="text" value={value} onChange={change}/>
}