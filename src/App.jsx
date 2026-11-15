import { Link, Route, Routes } from 'react-router-dom'
import Catalog from './pages/Catalog'
import BookDetails from './pages/BookDetails'
import ReadingList from './pages/ReadingList'

export default function App() {
  // TODO Zustand : afficher le nombre de livres dans la liste.

  return (
    <>
      <nav aria-label="Navigation principale">
        <Link to="/">Catalogue</Link>
        <Link to="/liste">Ma liste</Link>
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
