import { useState } from 'react'

export default function useToggle(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue)
  const toggle = () => setIsOpen((open) => !open)
  return [isOpen, toggle]
}
