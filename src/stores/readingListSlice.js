export const createReadingListSlice = (set) => ({
  books: [],
  addBook: (book) => set((state) => {
   
    return { books: [...state.books, book] }
  }),
  removeBook: (id) => set((state) => ({
    books: state.books.filter((book) => book.id !== id),
  })),
})
