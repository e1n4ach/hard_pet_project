import type { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

export const Checkbox = ({
  label,
  ...props
}: CheckboxProps) => {
  return (
    <CheckboxLabel>
      <StyledCheckbox
        type="checkbox"
        {...props}
      />

      {label}
    </CheckboxLabel>
  )
}

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`

const StyledCheckbox = styled.input`
  cursor: pointer;
`