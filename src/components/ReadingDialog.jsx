import { useEffect, useRef } from 'react'

export default function ReadingDialog({ book, onClose }) {
  const dialog = useRef(null)

  useEffect(() => {
    dialog.current.showModal()
  }, [])

  return (
    <dialog ref={dialog} onClose={onClose} aria-labelledby="reading-title">
      <h2 id="reading-title">Planifier « {book.title} »</h2>
      <button type="button" onClick={() => dialog.current.close()}>Fermer</button>
    </dialog>
  )
}
