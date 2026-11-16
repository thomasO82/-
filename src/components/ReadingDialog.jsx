import { useEffect, useRef } from 'react'

export default function ReadingDialog({ book, onClose, onPlan }) {
  const dialog = useRef(null)

  useEffect(() => {
    dialog.current.showModal()
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    if (!onPlan) return

    onPlan(book, new FormData(event.currentTarget).get('date'))
    dialog.current.close()
  }

  return (
    <dialog ref={dialog} onClose={onClose} aria-labelledby="reading-dialog-title">
      <h2 id="reading-dialog-title">Planifier « {book.title} »</h2>
      <form onSubmit={handleSubmit}>
        <label>Date de lecture <input name="date" type="date" required /></label>
        <div className="actions">
          <button type="submit">Planifier</button>
          <button type="button" onClick={() => dialog.current.close()}>Fermer</button>
        </div>
      </form>
    </dialog>
  )
}
