import { useParams } from 'react-router-dom'
import books from '../../public/books.json'

export default function BookDetails() {
  const { id } = useParams()
  const book = books.find((book) => book.id === id)

  if (!book) return <p>Livre introuvable.</p>

  // TODO Zustand : brancher le bouton sur l'action du store et afficher
  // « Retirer de ma liste » si ce livre figure déjà dans la liste.
  return (
    <>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <button disabled>Ajouter à ma liste</button>
    </>
  )
}
