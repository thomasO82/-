import { create } from 'zustand'
import { createReadingListSlice } from './readingListSlice.js'
import { createScheduleSlice } from './scheduleSlice.js'

export const useReadingListStore = create((set) => ({
  ...createReadingListSlice(set),
  ...createScheduleSlice(set),
}))

export const selectBooks = (state) => state.books
export const selectBookCount = (state) => state.books.length
export const selectIsBookSaved = (id) => (state) => state.books.some((book) => book.id === id)
export const selectAddBook = (state) => state.addBook
export const selectRemoveBook = (state) => state.removeBook
export const selectReadings = (state) => state.readings
