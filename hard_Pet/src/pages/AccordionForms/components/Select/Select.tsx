import type { SelectHTMLAttributes, ReactNode } from 'react'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  children: ReactNode
}

export const Select = ({ children, ...props }: SelectProps) => {
  return (
    <select {...props}>
      {children}
    </select>
  )
}

