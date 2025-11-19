import { Card, Typography, Divider } from '../atoms';
import { ResultItem } from '../molecules';

interface ResultsPanelProps {
  results: any[];
  isLoading: boolean;
  onSeeDetails: (id: number) => void;
}

export const ResultsPanel = ({ results, isLoading, onSeeDetails }: ResultsPanelProps) => {
  return (
    <Card className="w-full h-full md:h-auto md:min-h-96 flex flex-col">
      <Typography type="title" variant="primary">Results</Typography>
      <Divider />
      {results.length > 0 ? (
        <div className='flex-1 w-full flex flex-col mt-4 gap-2 overflow-y-auto'>
          {results.map((result: any) => (
            <ResultItem
              key={result.id}
              id={result.id}
              name={result.name}
              title={result.title}
              onSeeDetails={onSeeDetails}
            />
          ))}
        </div>
      ) : (
        <div className='flex-1 w-full flex items-center justify-center'>
          <Typography type="placeholder" className='text-center'>
            {isLoading ? 'Searching...' : <>There are zero matches.
              <br />
              Use the form to search for People or Movies.</>}
          </Typography>
        </div>
      )}
    </Card>
  );
};
