import { Header } from '../components/molecules';
import { Container, Card, Typography, Divider, Button, Input, Radio } from '../components/atoms';
import { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../api/hooks';

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
    <div className="bg-[#ededed] min-h-screen">
      <Header />
      <Container>
        <div className="flex gap-4 items-start">
          <Card className="w-[40%]">
            <Typography type="paragraph">
              What are you searching for?
            </Typography>
            <div className="mt-4 flex flex-wrap gap-4 items-center">
              <Radio
                id="people"
                name="searchType"
                value="people"
                label="People"
                checked={searchType === 'people'}
                onChange={(e) => handleSearchTypeChange(e.target.value as 'people' | 'movies')}
              />
              <Radio
                id="movies"
                name="searchType"
                value="movies"
                label="Movies"
                checked={searchType === 'movies'}
                onChange={(e) => handleSearchTypeChange(e.target.value as 'people' | 'movies')}
              />
            </div>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <Input
                type="text"
                placeholder={`e.g. ${searchType === 'people' ? 'Chewbacca, Yoda, Boba Fett' : 'Star Wars, The Force Awakens'}`}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Button type='submit' loading={isDelayedLoading} className='w-full'>
                Search
              </Button>
            </form>
          </Card>
          <Card className="w-[60%] min-h-96 flex flex-col">
            <Typography type="title" variant="primary">Results</Typography>
            <Divider />
            {displayResults.length > 0 ? (
              <div className='flex-1 w-full flex flex-col mt-4 gap-2'>
                {displayResults.map((result: any) => (
                  <Fragment key={result.id}>
                    <div className="flex items-center justify-between">
                      <Typography type="subtitle" variant="primary">{result.name || result.title}</Typography>
                      <Button onClick={() => handleSeeDetails(result.id)}>See Details</Button>
                    </div>
                    <Divider />
                  </Fragment>
                ))}
              </div>
            ) : (
              <div className='flex-1 w-full flex items-center justify-center'>
                <Typography type="placeholder" className='text-center'>
                  {isDelayedLoading ? 'Searching...' : <>There are zero matches.
                    <br />
                    Use the form to search for People or Movies.</>}
                </Typography>
              </div>
            )}
          </Card>
        </div>
      </Container>
    </div>
  )
}
