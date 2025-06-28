import styled from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import {
  DashboardHeader,
  CompanyInfoSection,
  ProjectsSection,
  StatisticsSection
} from '../components/dashboard';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  
  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

const DeveloperDashboard = () => (
  <>
    <GlobalStyle />
    <Container>
      <DashboardHeader />
      <CompanyInfoSection />
      <ProjectsSection />
      <StatisticsSection />
    </Container>
  </>
);

export default DeveloperDashboard; 