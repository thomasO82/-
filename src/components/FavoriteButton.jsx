import {
  selectAddBook, selectIsBookSaved, selectRemoveBook, useReadingListStore,
} from '../stores/useReadingListStore'

export default function FavoriteButton({ book }) {
  const isSaved = useReadingListStore(selectIsBookSaved(book.id))
  const addBook = useReadingListStore(selectAddBook)
  const removeBook = useReadingListStore(selectRemoveBook)

  function handleClick() {
    if (isSaved) removeBook(book.id)
    else addBook(book)
  }

  return (
    <button type="button" onClick={handleClick}>
      {isSaved ? 'Retirer de ma liste' : 'Ajouter à ma liste'}
    </button>
  )
}
