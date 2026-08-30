import type {
  ReactNode,
  SelectHTMLAttributes,
} from 'react'
import styled from 'styled-components'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string
  children: ReactNode
}

export const Select = ({
  label,
  children,
  ...props
}: SelectProps) => {
  return (
    <SelectLabel>
      {label}

      <StyledSelect {...props}>
        {children}
      </StyledSelect>
    </SelectLabel>
  )
}

const SelectLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const StyledSelect = styled.select`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`