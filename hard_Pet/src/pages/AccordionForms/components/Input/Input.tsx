import type { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <InputLabel>
      {label}
      <StyledInput {...props} />
    </InputLabel>
  )
}

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`