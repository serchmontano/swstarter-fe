import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { peopleService } from '../../api/services'
import type { Person, PaginatedResponse, SingleResponse } from '../../api/types'

interface PeopleState {
  searchResults: PaginatedResponse<Person> | null
  selectedPerson: SingleResponse<Person> | null
  lastQuery: string
  loading: boolean
  error: string | null
}

const initialState: PeopleState = {
  searchResults: null,
  selectedPerson: null,
  lastQuery: '',
  loading: false,
  error: null,
}

export const searchPeople = createAsyncThunk(
  'people/search',
  async ({ query, page = 1 }: { query: string; page?: number }) => {
    const response = await peopleService.search(query, page)
    return { response, query }
  }
)

export const fetchPersonById = createAsyncThunk(
  'people/fetchById',
  async (id: number) => {
    return await peopleService.getById(id)
  }
)

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    clearSearchResults: (state) => {
      state.searchResults = null
      state.lastQuery = ''
      state.error = null
    },
    clearSelectedPerson: (state) => {
      state.selectedPerson = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchPeople.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(searchPeople.fulfilled, (state, action) => {
        state.loading = false
        state.searchResults = action.payload.response
        state.lastQuery = action.payload.query
      })
      .addCase(searchPeople.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to search people'
      })

    builder
      .addCase(fetchPersonById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPersonById.fulfilled, (state, action) => {
        state.loading = false
        state.selectedPerson = action.payload
      })
      .addCase(fetchPersonById.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch person'
      })
  },
})

export const { clearSearchResults, clearSelectedPerson } = peopleSlice.actions
export default peopleSlice.reducer
