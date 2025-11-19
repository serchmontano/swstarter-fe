import { Radio, Typography } from '../atoms';

interface SearchTypeSelectorProps {
  searchType: 'people' | 'movies';
  onSearchTypeChange: (type: 'people' | 'movies') => void;
}

export const SearchTypeSelector = ({ searchType, onSearchTypeChange }: SearchTypeSelectorProps) => {
  return (
    <>
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
          onChange={(e) => onSearchTypeChange(e.target.value as 'people' | 'movies')}
        />
        <Radio
          id="movies"
          name="searchType"
          value="movies"
          label="Movies"
          checked={searchType === 'movies'}
          onChange={(e) => onSearchTypeChange(e.target.value as 'people' | 'movies')}
        />
      </div>
    </>
  );
};
