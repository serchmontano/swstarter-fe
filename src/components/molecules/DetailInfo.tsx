import { Fragment } from "react";
import { Divider, Typography } from "../atoms";
import type { Film, Person } from "../../api/types";

interface DetailInfoProps {
  data: Film | Person;
  resourceType: 'films' | 'people';
}

export const DetailInfo = ({ data, resourceType }: DetailInfoProps) => {
  return (
    <div className="w-full">
      <Typography type="subtitle">
        {resourceType === 'films' ? 'Opening Crawl' : 'Details'}
      </Typography>
      <Divider />
      {resourceType === 'films' ? (
        <Typography type="paragraph" className="whitespace-pre-line">
          {(data as Film)?.opening_crawl}
        </Typography>
      ) : (
        <Fragment>
          <Typography type="paragraph">Gender: {(data as Person)?.gender}</Typography>
          <Typography type="paragraph">Eye Color: {(data as Person)?.eye_color}</Typography>
          <Typography type="paragraph">Hair Color: {(data as Person)?.hair_color}</Typography>
          <Typography type="paragraph">Height: {(data as Person)?.height}</Typography>
          <Typography type="paragraph">Mass: {(data as Person)?.mass}</Typography>
        </Fragment>
      )}
    </div>
  );
};
