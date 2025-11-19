import { Container } from "../atoms";
import { Header } from "../molecules";
import { DetailsPanel } from "../organisms";
import type { Film, Person } from "../../api/types";

interface DetailsTemplateProps {
  data: Film | Person | null;
  relatedData: any[];
  isLoading: boolean;
  onBackToSearch: () => void;
  resourceType: 'films' | 'people';
}

export const DetailsTemplate = ({ 
  data, 
  relatedData, 
  isLoading, 
  onBackToSearch, 
  resourceType 
}: DetailsTemplateProps) => {
  return (
    <div className="bg-[#ededed] min-h-screen">
      <Header />
      <Container>
        <DetailsPanel 
          data={data} 
          relatedData={relatedData} 
          isLoading={isLoading} 
          onBackToSearch={onBackToSearch} 
          resourceType={resourceType} 
        />
      </Container>
    </div>
  );
};