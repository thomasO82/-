import axios from 'axios'

export async function getBooks(signal) {
  const { data } = await axios.get('/books.json', { signal })
  return data
}

export async function getBook(id, signal) {
  const books = await getBooks(signal)
  return books.find((book) => book.id === id) ?? null
}
