import { useState } from 'react'
import { Link } from 'react-router-dom'
import books from '../../public/books.json'

export default function Catalog() {
  const [search, setSearch] = useState('')
  const query = search.trim().toLowerCase()
  const results = books.filter((book) => book.title.toLowerCase().includes(query))

  return (
    <>
      <h1>Catalogue</h1>
      <label>
        Rechercher par titre{' '}
        <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} />
      </label>
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
