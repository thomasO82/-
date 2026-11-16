import { useParams } from 'react-router-dom'
import books from '../../public/books.json'
import useToggle from '../hooks/useToggle'
import ReadingDialog from '../components/ReadingDialog'
import {
  selectAddBook, selectIsBookSaved, selectRemoveBook, useReadingListStore,
} from '../stores/useReadingListStore'

export default function BookDetails() {
  const { id } = useParams()
  const [isOpen, toggle] = useToggle()
  const book = books.find((book) => book.id === id)
  const isSaved = useReadingListStore(selectIsBookSaved(id))
  const addBook = useReadingListStore(selectAddBook)
  const removeBook = useReadingListStore(selectRemoveBook)

  if (!book) return <p>Livre introuvable.</p>

  return (
    <>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <div className="actions">
        <button type="button" onClick={toggle}>Planifier une lecture</button>
        {isSaved
          ? <button type="button" onClick={() => removeBook(id)}>Retirer de ma liste</button>
          : <button type="button" onClick={() => addBook(book)}>Ajouter à ma liste</button>}
      </div>
      {isOpen && <ReadingDialog book={book} onClose={toggle} />}
    </>
  )
}
