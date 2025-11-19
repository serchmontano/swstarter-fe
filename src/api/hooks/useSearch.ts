import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { searchPeople, clearSearchResults as clearPeopleResults } from '../../store/slices/peopleSlice'
import { searchFilms, clearSearchResults as clearFilmsResults } from '../../store/slices/filmsSlice'

type SearchType = 'people' | 'movies'

export const useSearch = () => {
  const dispatch = useAppDispatch()
  const peopleState = useAppSelector((state) => state.people)
  const filmsState = useAppSelector((state) => state.films)

  const search = (type: SearchType, query: string, page: number = 1) => {
    if (type === 'people') {
      dispatch(searchPeople({ query, page }))
    } else {
      dispatch(searchFilms({ query, page }))
    }
  }

  const clear = (type: SearchType) => {
    if (type === 'people') {
      dispatch(clearPeopleResults())
    } else {
      dispatch(clearFilmsResults())
    }
  }

  const getState = (type: SearchType) => {
    return type === 'people' ? peopleState : filmsState
  }

  const getLoading = (type: SearchType) => {
    return type === 'people' ? peopleState.loading : filmsState.loading
  }

  return {
    search,
    clear,
    getState,
    getLoading,
  }
}
