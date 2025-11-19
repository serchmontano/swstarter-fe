import { Fragment } from 'react';
import { Button, Divider, Typography } from '../atoms';

interface ResultItemProps {
  id: number;
  name?: string;
  title?: string;
  onSeeDetails: (id: number) => void;
}

export const ResultItem = ({ id, name, title, onSeeDetails }: ResultItemProps) => {
  return (
    <Fragment key={id}>
      <div className="flex items-center justify-between">
        <Typography type="subtitle" variant="primary">{name || title}</Typography>
        <Button onClick={() => onSeeDetails(id)}>See Details</Button>
      </div>
      <Divider />
    </Fragment>
  );
};
