import { Header } from '../components/molecules';
import { Container } from '../components/atoms';

export const AnalyticsPage = () => {
  return (
    <div className="bg-[#ededed] min-h-screen">
      <Header />
      <Container>
        <h1>Analytics Dashboard</h1>
        <p>View statistics and analytics</p>
      </Container>
    </div>
  )
}
