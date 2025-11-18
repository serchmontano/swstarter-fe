import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { searchFilms, fetchFilmById, clearSearchResults } from '../../store/slices/filmsSlice'

export const useFilmsSearch = () => {
  const dispatch = useAppDispatch()
  const { searchResults, lastQuery, loading, error } = useAppSelector((state) => state.films)

  const search = (query: string, page: number = 1) => {
    dispatch(searchFilms({ query, page }))
  }

  const clear = () => {
    dispatch(clearSearchResults())
  }

  return { 
    data: searchResults, 
    lastQuery,
    loading, 
    error, 
    search, 
    clear 
  }
}

export const useFilm = (id: number) => {
  const dispatch = useAppDispatch()
  const { selectedFilm, loading, error } = useAppSelector((state) => state.films)

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmById(id))
    }
  }, [id, dispatch])

  return { data: selectedFilm, loading, error }
}
