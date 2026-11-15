import { Link } from 'react-router-dom'

export default function ReadingList() {
  // TODO Zustand : lire la liste depuis le store et brancher le bouton Retirer.
  const books = []

  return (
    <>
      <h1>Ma liste de lecture</h1>
      {books.length === 0 && <p>Ta liste est vide.</p>}
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/livres/${book.id}`}>{book.title}</Link>
            {' '}
            <button disabled aria-label={`Retirer ${book.title}`}>Retirer</button>
          </li>
        ))}
      </ul>
    </>
  )
}
