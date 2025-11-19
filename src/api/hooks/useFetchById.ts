import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchFilmById, clearSelectedFilm } from '../../store/slices/filmsSlice'
import { fetchPersonById, clearSelectedPerson } from '../../store/slices/peopleSlice'

type ResourceType = 'people' | 'films'

export const useFetchById = () => {
  const dispatch = useAppDispatch()
  const peopleState = useAppSelector((state) => state.people)
  const filmsState = useAppSelector((state) => state.films)

  const fetchById = useCallback((type: ResourceType, id: number) => {
    if (type === 'people') {
      dispatch(fetchPersonById(id))
    } else {
      dispatch(fetchFilmById(id))
    }
  }, [dispatch])

  const clear = useCallback((type: ResourceType) => {
    if (type === 'people') {
      dispatch(clearSelectedPerson())
    } else {
      dispatch(clearSelectedFilm())
    }
  }, [dispatch])

  const getSelected = useCallback((type: ResourceType) => {
    return type === 'people' ? peopleState.selectedPerson : filmsState.selectedFilm
  }, [peopleState.selectedPerson, filmsState.selectedFilm])

  const getLoading = useCallback((type: ResourceType) => {
    return type === 'people' ? peopleState.loading : filmsState.loading
  }, [peopleState.loading, filmsState.loading])

  const getError = useCallback((type: ResourceType) => {
    return type === 'people' ? peopleState.error : filmsState.error
  }, [peopleState.error, filmsState.error])

  return {
    fetchById,
    clear,
    getSelected,
    getLoading,
    getError,
  }
}
