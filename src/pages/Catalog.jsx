import { Link } from 'react-router-dom'
import books from '../../public/books.json'

export default function Catalog() {
  return (
    <>
      <h1>Catalogue</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/livres/${book.id}`}>{book.title}</Link>
            {' · '}{book.author}
          </li>
        ))}
      </ul>
    </>
  )
}
