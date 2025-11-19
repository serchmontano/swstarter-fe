import { Card } from '../atoms';
import { SearchTypeSelector, SearchForm } from '../molecules';

interface SearchPanelProps {
  searchType: 'people' | 'movies';
  searchValue: string;
  isLoading: boolean;
  onSearchTypeChange: (type: 'people' | 'movies') => void;
  onSearchValueChange: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const SearchPanel = ({
  searchType,
  searchValue,
  isLoading,
  onSearchTypeChange,
  onSearchValueChange,
  onSubmit
}: SearchPanelProps) => {
  return (
    <Card className="w-full h-full md:h-auto">
      <SearchTypeSelector 
        searchType={searchType}
        onSearchTypeChange={onSearchTypeChange}
      />
      <SearchForm
        searchValue={searchValue}
        searchType={searchType}
        isLoading={isLoading}
        onSearchValueChange={onSearchValueChange}
        onSubmit={onSubmit}
      />
    </Card>
  );
};
