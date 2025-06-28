import styled from 'styled-components';
import SalesStatistics from './SalesStatistics';
import ProjectStatistics from './ProjectStatistics';

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 50px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const StatisticsSection = () => (
  <StatsSection>
    <SalesStatistics />
    <ProjectStatistics />
  </StatsSection>
);

export default StatisticsSection; 