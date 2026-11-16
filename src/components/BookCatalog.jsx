import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function BookCatalog({ books }) {
  const [search, setSearch] = useState('')
  const title = search.trim().toLocaleLowerCase('fr')
  const visibleBooks = books.filter((book) => book.title.toLocaleLowerCase('fr').includes(title))

  return (
    <>
      <h1>Catalogue</h1>
      <label>
        Rechercher par titre{' '}
        <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} />
      </label>
      {visibleBooks.length === 0 && <p>Aucun livre trouvé.</p>}
      <ul>
        {visibleBooks.map((book) => (
          <li key={book.id}>
            <Link to={`/livres/${book.id}`}>{book.title}</Link>
            {' · '}{book.author}
          </li>
        ))}
      </ul>
    </>
  )
}
