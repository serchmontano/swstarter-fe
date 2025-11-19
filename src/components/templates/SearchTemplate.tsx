import { Container } from '../atoms';
import { Header } from '../molecules';
import { SearchPanel, ResultsPanel } from '../organisms';

interface SearchTemplateProps {
  searchType: 'people' | 'movies';
  searchValue: string;
  displayResults: any[];
  isDelayedLoading: boolean;
  onSearchTypeChange: (type: 'people' | 'movies') => void;
  onSearchValueChange: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onSeeDetails: (id: number) => void;
}

export const SearchTemplate = ({
  searchType,
  searchValue,
  displayResults,
  isDelayedLoading,
  onSearchTypeChange,
  onSearchValueChange,
  onSubmit,
  onSeeDetails
}: SearchTemplateProps) => {
  const hasResults = displayResults && displayResults.length > 0;

  return (
    <div className="bg-white md:bg-[#ededed] h-screen flex flex-col">
      <Header />
      <Container className='py-0 md:py-4'>
        <div className="flex flex-col md:flex-row gap-4 md:items-start h-full md:h-auto">
          <div className={hasResults ? 'w-full md:w-[40%]' : 'w-full md:w-[40%] h-full md:h-auto'}>
            <SearchPanel
              searchType={searchType}
              searchValue={searchValue}
              isLoading={isDelayedLoading}
              onSearchTypeChange={onSearchTypeChange}
              onSearchValueChange={onSearchValueChange}
              onSubmit={onSubmit}
            />
          </div>
          <div className={hasResults ? 'w-full md:w-[60%]' : 'hidden md:block md:w-[60%]'}>
            <ResultsPanel
              results={displayResults}
              isLoading={isDelayedLoading}
              onSeeDetails={onSeeDetails}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
