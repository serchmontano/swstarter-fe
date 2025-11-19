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
  return (
    <div className="bg-[#ededed] min-h-screen">
      <Header />
      <Container>
        <div className="flex gap-4 items-start">
          <SearchPanel
            searchType={searchType}
            searchValue={searchValue}
            isLoading={isDelayedLoading}
            onSearchTypeChange={onSearchTypeChange}
            onSearchValueChange={onSearchValueChange}
            onSubmit={onSubmit}
          />
          <ResultsPanel
            results={displayResults}
            isLoading={isDelayedLoading}
            onSeeDetails={onSeeDetails}
          />
        </div>
      </Container>
    </div>
  );
};
