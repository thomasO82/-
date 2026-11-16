import ReadingDialog from './ReadingDialog'
import useToggle from '../hooks/useToggle'

export default function BookView({ book, onPlan, children }) {
  const [isOpen, toggle] = useToggle()

  return (
    <>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <div className="actions">
        <button type="button" onClick={toggle}>Planifier une lecture</button>
        {children}
      </div>
      {isOpen && <ReadingDialog book={book} onClose={toggle} onPlan={onPlan} />}
    </>
  )
}
