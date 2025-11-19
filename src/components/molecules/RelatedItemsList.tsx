import { Fragment } from "react";
import { Divider, Link, Typography } from "../atoms";

interface RelatedItem {
  id: number;
  name?: string;
  title?: string;
  resource_type: string;
}

interface RelatedItemsListProps {
  items: RelatedItem[];
  resourceType: 'films' | 'people';
  onItemClick: (id: number, type: string) => void;
}

export const RelatedItemsList = ({ items, resourceType, onItemClick }: RelatedItemsListProps) => {
  return (
    <div className="w-full">
      <Typography type="subtitle">
        {resourceType === 'films' ? 'Characters' : 'Movies'}
      </Typography>
      <Divider />
      <div className="flex flex-wrap gap-1">
        {items.map((item, index) => (
          <Fragment key={item.id}>
            <Link onClick={() => onItemClick(item.id, item.resource_type)}>
              {item?.name || item?.title}
            </Link>
            {index < items.length - 1 && <span>, </span>}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
