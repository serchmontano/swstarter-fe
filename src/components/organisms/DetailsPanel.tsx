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
      <Card className="w-full h-full md:h-auto flex flex-col">
        <Typography type="placeholder" className="mb-4">Fetching data...</Typography>
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 flex-1 overflow-y-auto">
          <div className="w-full">
            <Typography type="placeholder">Loading details...</Typography>
          </div>
          <div className="w-full">
            <Typography type="placeholder">Loading related items...</Typography>
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
      <Card className="w-full h-full md:h-auto flex flex-col">
        <Typography type="placeholder" className="mb-4">No data available</Typography>
        <Typography type="paragraph" className="flex-1">
          The requested resource could not be found or an error occurred.
        </Typography>
        <Button className="self-start mt-4" onClick={onBackToSearch}>
          Back to search
        </Button>
      </Card>
    );
  }

  return (
    <Card className="w-full h-full md:h-auto flex flex-col">
      <Typography type="title" variant="primary" className="mb-4">
        {(data as any)?.name || (data as any)?.title}
      </Typography>
      <div className="flex flex-col md:flex-row gap-4 md:gap-12 flex-1 overflow-y-auto">
        <DetailInfo data={data} resourceType={resourceType} />
        <RelatedItemsList 
          items={relatedData} 
          resourceType={resourceType}
          onItemClick={handleItemClick}
        />
      </div>
      <Button className="self-start mt-4" onClick={onBackToSearch}>
        Back to search
      </Button>
    </Card>
  );
};