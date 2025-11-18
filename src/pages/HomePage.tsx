import { Header } from '../components/molecules';
import { Container, Card, Typography, Divider, Button, Input, Radio } from '../components/atoms';
import { useState } from 'react';

export const HomePage = () => {
  const [searchType, setSearchType] = useState('people');
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes disparar tu acción
    console.log('Form submitted', searchType, searchValue);
  };

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
                onChange={(e) => setSearchType(e.target.value)}
              />
              <Radio
                id="movies"
                name="searchType"
                value="movies"
                label="Movies"
                checked={searchType === 'movies'}
                onChange={(e) => setSearchType(e.target.value)}
              />
            </div>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <Input
                type="text"
                placeholder={`e.g. ${searchType === 'people' ? 'Chewbacca, Yoda, Boba Fett' : 'Star Wars, The Force Awakens'}`}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Button type='submit'>
                Search
              </Button>
            </form>
          </Card>
          <Card className="w-[60%] min-h-96 flex flex-col">
            <Typography type="title" variant="primary">Results</Typography>
            <Divider />
            <div className='flex-1 w-full flex items-center justify-center'>
              <Typography type="placeholder" className='text-center'>There are zero matches.<br />
                Use the form to search for People or Movies.</Typography>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  )
}
