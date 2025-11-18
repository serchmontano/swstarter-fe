import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { searchPeople, fetchPersonById, clearSearchResults } from '../../store/slices/peopleSlice'

export const usePeopleSearch = () => {
  const dispatch = useAppDispatch()
  const { searchResults, lastQuery, loading, error } = useAppSelector((state) => state.people)

  const search = (query: string, page: number = 1) => {
    dispatch(searchPeople({ query, page }))
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

export const usePerson = (id: number) => {
  const dispatch = useAppDispatch()
  const { selectedPerson, loading, error } = useAppSelector((state) => state.people)

  useEffect(() => {
    if (id) {
      dispatch(fetchPersonById(id))
    }
  }, [id, dispatch])

  return { data: selectedPerson, loading, error }
}
