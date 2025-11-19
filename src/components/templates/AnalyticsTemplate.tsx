import { Container } from "../atoms";
import { Header } from "../molecules";
import { AnalyticsPanel } from "../organisms";
import type { Statistics } from "../../api/types";

interface AnalyticsTemplateProps {
  data: Statistics | null;
  isLoading: boolean;
}

export const AnalyticsTemplate = ({ 
  data, 
  isLoading 
}: AnalyticsTemplateProps) => {
  return (
    <div className="bg-[#ededed] h-screen flex flex-col">
      <Header />
      <Container className="px-4">
        <AnalyticsPanel 
          data={data} 
          isLoading={isLoading} 
        />
      </Container>
    </div>
  );
};
