import { useState, type ReactNode } from 'react'
import styled from 'styled-components'

type AccordionProps = {
  title: string
  children: ReactNode
}

export const Accordion = ({
  title,
  children,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  const handleToggle = () => {
    if (!isOpen) {
      setShouldRender(true)
      setIsOpen(true)

      return
    }

    setIsOpen(false)
  }

  const handleTransitionEnd = () => {
    if (!isOpen) {
      setShouldRender(false)
    }
  }

  return (
    <AccordionWrapper>
      <AccordionButton
        type="button"
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        {title}

        <Arrow $isOpen={isOpen}>
          ▼
        </Arrow>
      </AccordionButton>

      <AccordionContent
        $isOpen={isOpen}
        onTransitionEnd={handleTransitionEnd}
      >
        <AccordionContentInner>
          {shouldRender && children}
        </AccordionContentInner>
      </AccordionContent>
    </AccordionWrapper>
  )
}

const AccordionWrapper = styled.div`
  width: 100%;
`

const AccordionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 12px 16px;

  cursor: pointer;
`

const Arrow = styled.span<{ $isOpen: boolean }>`
  display: inline-block;

  transform: rotate(
    ${({ $isOpen }) => ($isOpen ? '180deg' : '0deg')}
  );

  transition: transform 300ms ease;
`

const AccordionContent = styled.div<{ $isOpen: boolean }>`
  display: grid;

  grid-template-rows: ${({ $isOpen }) =>
    $isOpen ? '1fr' : '0fr'};

  transition: grid-template-rows 300ms ease;
`

const AccordionContentInner = styled.div`
  overflow: hidden;
`