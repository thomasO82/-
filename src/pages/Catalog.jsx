import { useState } from 'react'
import { Link } from 'react-router-dom'
import books from '../../public/books.json'

export default function Catalog() {
  const [search, setSearch] = useState('')
  const results = books

  return (
    <>
      <h1>Catalogue</h1>
      
      {results.length === 0 && <p>Aucun livre trouvé.</p>}
      <ul>
        {results.map((book) => (
          <li key={book.id}>
            <Link to={`/livres/${book.id}`}>{book.title}</Link> · {book.author}
          </li>
        ))}
      </ul>
    </>
  )
}
