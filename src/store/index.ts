import { configureStore } from '@reduxjs/toolkit'
import peopleReducer from './slices/peopleSlice'
import filmsReducer from './slices/filmsSlice'

export const store = configureStore({
  reducer: {
    people: peopleReducer,
    films: filmsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
