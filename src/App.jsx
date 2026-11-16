import { Link, Route, Routes } from 'react-router-dom'
import Catalog from './pages/Catalog'
import BookDetails from './pages/BookDetails'
import ReadingList from './pages/ReadingList'

import { selectBookCount, useReadingListStore } from './stores/useReadingListStore'

export default function App() {
  const bookCount = useReadingListStore(selectBookCount)
  return (
    <>
      <nav aria-label="Navigation principale">
        <Link to="/">Catalogue</Link>
        <Link to="/liste">Ma liste ({bookCount})</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/livres/:id" element={<BookDetails />} />
          <Route path="/liste" element={<ReadingList />} />
        </Routes>
      </main>
    </>
  )
}
