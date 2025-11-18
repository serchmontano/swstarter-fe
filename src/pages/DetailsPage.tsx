import { Header } from '../components/molecules';
import { Container } from '../components/atoms';

export const DetailsPage = () => {
  return (
    <div className="bg-[#ededed] min-h-screen">
      <Header />
      <Container>
        <h1>Details Page</h1>
        <p>Search and view Star Wars characters and films</p>
      </Container>
    </div>
  )
}
