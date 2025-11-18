import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { filmsService } from '../../api/services'
import type { Film, PaginatedResponse, SingleResponse } from '../../api/types'

interface FilmsState {
  searchResults: PaginatedResponse<Film> | null
  selectedFilm: SingleResponse<Film> | null
  lastQuery: string
  loading: boolean
  error: string | null
}

const initialState: FilmsState = {
  searchResults: null,
  selectedFilm: null,
  lastQuery: '',
  loading: false,
  error: null,
}

export const searchFilms = createAsyncThunk(
  'films/search',
  async ({ query, page = 1 }: { query: string; page?: number }) => {
    const response = await filmsService.search(query, page)
    return { response, query }
  }
)

export const fetchFilmById = createAsyncThunk(
  'films/fetchById',
  async (id: number) => {
    return await filmsService.getById(id)
  }
)

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    clearSearchResults: (state) => {
      state.searchResults = null
      state.lastQuery = ''
      state.error = null
    },
    clearSelectedFilm: (state) => {
      state.selectedFilm = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchFilms.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(searchFilms.fulfilled, (state, action) => {
        state.loading = false
        state.searchResults = action.payload.response
        state.lastQuery = action.payload.query
      })
      .addCase(searchFilms.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to search films'
      })

    builder
      .addCase(fetchFilmById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchFilmById.fulfilled, (state, action) => {
        state.loading = false
        state.selectedFilm = action.payload
      })
      .addCase(fetchFilmById.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch film'
      })
  },
})

export const { clearSearchResults, clearSelectedFilm } = filmsSlice.actions
export default filmsSlice.reducer
