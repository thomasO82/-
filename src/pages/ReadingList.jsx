import { Link } from 'react-router-dom'
import { useReadingListStore } from '../stores/useReadingListStore'

export default function ReadingList() {
  const books = useReadingListStore((state) => state.books)
  const removeBook = useReadingListStore((state) => state.removeBook)

  return (
    <>
      <h1>Ma liste de lecture</h1>
      {books.length === 0 && <p>Ta liste est vide.</p>}
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/livres/${book.id}`}>{book.title}</Link>{' '}
            <button type="button" onClick={() => removeBook(book.id)}>Retirer</button>
          </li>
        ))}
      </ul>
    </>
  )
}
