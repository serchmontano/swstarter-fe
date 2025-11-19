import { Button, Input } from '../atoms';

interface SearchFormProps {
  searchValue: string;
  searchType: 'people' | 'movies';
  isLoading: boolean;
  onSearchValueChange: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const SearchForm = ({
  searchValue,
  searchType,
  isLoading,
  onSearchValueChange,
  onSubmit
}: SearchFormProps) => {
  return (
    <form onSubmit={onSubmit} className="mt-4 space-y-4">
      <Input
        type="text"
        placeholder={`e.g. ${searchType === 'people' ? 'Chewbacca, Yoda, Boba Fett' : 'Star Wars, The Force Awakens'}`}
        value={searchValue}
        onChange={(e) => onSearchValueChange(e.target.value)}
      />
      <Button type='submit' loading={isLoading} className='w-full'>
        Search
      </Button>
    </form>
  );
};
