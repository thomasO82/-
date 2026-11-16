import { create } from 'zustand'
import { createReadingListSlice } from './readingListSlice.js'
import { createScheduleSlice } from './scheduleSlice.js'

export const useReadingListStore = create((set) => ({
  ...createReadingListSlice(set),
  ...createScheduleSlice(set),
}))
