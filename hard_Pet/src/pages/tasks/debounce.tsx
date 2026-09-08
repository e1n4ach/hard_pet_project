import { useRef } from 'react'

const Search = () => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleChange = (value: string) => {
    if (timerRef.current) {
        clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(()=> {
        console.log('search:', value)
    },500)
  }

  return (
    <input
      onChange={(event) => {
        handleChange(event.target.value)
      }}
    />
  )
}