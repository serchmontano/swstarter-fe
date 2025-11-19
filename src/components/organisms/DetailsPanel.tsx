import { useNavigate } from "react-router-dom";
import { Button, Card, Typography } from "../atoms";
import { DetailInfo, RelatedItemsList } from "../molecules";
import type { Film, Person } from "../../api/types";

interface DetailsPanelProps {
  data: Film | Person | null;
  relatedData: any[];
  isLoading: boolean;
  onBackToSearch: () => void;
  resourceType: 'films' | 'people';
}

export const DetailsPanel = ({ 
  data, 
  relatedData, 
  isLoading, 
  onBackToSearch, 
  resourceType 
}: DetailsPanelProps) => {
  const navigate = useNavigate();
  
  const handleItemClick = (id: number, type: string) => {
    navigate(`/details/${type}/${id}`);
  };

  if (isLoading) {
    return (
      <Card className="w-full min-h-96 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <Typography type="placeholder">Fetching data...</Typography>
          <div className="flex flex-row gap-12">
            <div className="w-full">
              <Typography type="placeholder">Loading details...</Typography>
            </div>
            <div className="w-full">
              <Typography type="placeholder">Loading related items...</Typography>
            </div>
          </div>
        </div>
        <Button className="self-start mt-4" onClick={onBackToSearch}>
          Back to search
        </Button>
      </Card>
    );
  }

  if (!data) {
    return (
      <Card className="w-full min-h-96 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <Typography type="placeholder">No data available</Typography>
          <Typography type="paragraph">
            The requested resource could not be found or an error occurred.
          </Typography>
        </div>
        <Button className="self-start mt-4" onClick={onBackToSearch}>
          Back to search
        </Button>
      </Card>
    );
  }

  return (
    <Card className="w-full min-h-96 flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <Typography type="title" variant="primary">
          {(data as any)?.name || (data as any)?.title}
        </Typography>
        <div className="flex flex-row gap-12">
          <DetailInfo data={data} resourceType={resourceType} />
          <RelatedItemsList 
            items={relatedData} 
            resourceType={resourceType}
            onItemClick={handleItemClick}
          />
        </div>
      </div>
      <Button className="self-start mt-4" onClick={onBackToSearch}>
        Back to search
      </Button>
    </Card>
  );
};