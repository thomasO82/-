import { useParams } from 'react-router-dom'
import books from '../../public/books.json'
import FavoriteButton from '../components/FavoriteButton'
import BookView from '../components/BookView'

export default function BookDetails() {
  const { id } = useParams()
  const book = books.find((book) => book.id === id)

  if (!book) return <p>Livre introuvable.</p>

  return (
    <BookView key={id} book={book}>
      <FavoriteButton book={book} />
    </BookView>
  )
}
