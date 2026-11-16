import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createReadingListSlice } from './readingListSlice.js'
import { createScheduleSlice } from './scheduleSlice.js'

export const useReadingListStore = create(
  devtools(
    (set) => ({
      ...createReadingListSlice(set),
      ...createScheduleSlice(set),
    }),
    { name: 'Mini-bibliothèque', enabled: true },
  ),
)

export const selectBooks = (state) => state.books
export const selectBookCount = (state) => state.books.length
export const selectIsBookSaved = (id) => (state) =>
  state.books.some((book) => book.id === id)
export const selectAddBook = (state) => state.addBook
export const selectRemoveBook = (state) => state.removeBook
