import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../api/hooks';
import { SearchTemplate } from '../components/templates';

export const HomePage = () => {
  const [searchType, setSearchType] = useState<'people' | 'movies'>('people');
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [displayResults, setDisplayResults] = useState<any[]>([]);
  const [isDelayedLoading, setIsDelayedLoading] = useState(false);
  const navigate = useNavigate();
  const { search, getLoading, getState, clear } = useSearch();

  const handleSearchTypeChange = (newType: 'people' | 'movies') => {
    clear('people');
    clear('movies');
    setSearchType(newType);
    setResults([]);
    setDisplayResults([]);
  };

  const handleSeeDetails = (id: number) => {
    const type = searchType === 'people' ? 'people' : 'films';
    navigate(`/details/${type}/${id}`);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue.trim()) {
      search(searchType, searchValue);
    }
  };

  const isLoading = getLoading(searchType);
  const currentState = getState(searchType);

  useEffect(() => {
    const peopleState = getState('people');
    const filmsState = getState('movies');

    if (peopleState.searchResults?.results && peopleState.searchResults.results.length > 0) {
      setSearchType('people');
      setSearchValue(peopleState.lastQuery);
      setResults(peopleState.searchResults.results);
      setDisplayResults(peopleState.searchResults.results);
    } else if (filmsState.searchResults?.results && filmsState.searchResults.results.length > 0) {
      setSearchType('movies');
      setSearchValue(filmsState.lastQuery);
      setResults(filmsState.searchResults.results);
      setDisplayResults(filmsState.searchResults.results);
    }
  }, []);

  useEffect(() => {
    if (currentState.searchResults?.results) {
      setResults(currentState.searchResults.results);
    } else {
      setResults([]);
    }
  }, [currentState.searchResults, searchType]);

  useEffect(() => {
    if (isLoading) {
      setIsDelayedLoading(true);
      setDisplayResults([]);
    } else if (!isLoading && results.length > 0) {
      const delayTimer = setTimeout(() => {
        setIsDelayedLoading(false);
        setDisplayResults(results);
      }, 2000);

      return () => clearTimeout(delayTimer);
    } else {
      const delayTimer = setTimeout(() => {
        setIsDelayedLoading(false);
        setDisplayResults([]);
      }, 2000);

      return () => clearTimeout(delayTimer);
    }
  }, [isLoading, results]);

  return (
    <SearchTemplate
      searchType={searchType}
      searchValue={searchValue}
      displayResults={displayResults}
      isDelayedLoading={isDelayedLoading}
      onSearchTypeChange={handleSearchTypeChange}
      onSearchValueChange={setSearchValue}
      onSubmit={handleSubmit}
      onSeeDetails={handleSeeDetails}
    />
  )
}
