import { useState, type ReactNode } from 'react'

interface AccordionProps {
  title: string
  children: ReactNode
}

export const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        {title}
      </button>

      {isOpen && (
        <div>
          {children}
        </div>
      )}
    </div>
  )
}
