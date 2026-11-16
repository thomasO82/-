import books from '../../public/books.json'
import BookCatalog from '../components/BookCatalog'

export default function Catalog() {
  return <BookCatalog books={books} />
}
