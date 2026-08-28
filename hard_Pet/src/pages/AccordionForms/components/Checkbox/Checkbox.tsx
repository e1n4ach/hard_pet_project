import type { InputHTMLAttributes } from 'react'

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

export const Checkbox = ({ label, ...props }: CheckboxProps) => {
  return (
    <label>
      <input
        type="checkbox"
        {...props}
      />
      {label}
    </label>
  )
}
