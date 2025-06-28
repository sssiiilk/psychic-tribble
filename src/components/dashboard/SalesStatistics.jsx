import React, { useState } from 'react';
import styled from 'styled-components';

const ChartContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  padding: 30px;
`;

const ChartTitle = styled.h3`
  font-size: 1.5rem;
  font-family: 'League Spartan', Arial, sans-serif;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: #333;
`;

const ChartFilters = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  border: 1px solid #ddd;
  background: ${props => props.active ? '#38646b' : '#fff'};
  color: ${props => props.active ? '#fff' : '#666'};
  border-radius: 20px;
  padding: 6px 12px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #38646b;
    color: #fff;
  }
`;

const PieChartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const PieChart = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: conic-gradient(
    #38646b 0deg 166deg,
    #9B1743 166deg 223deg,
    #7a7a7a 223deg 280deg,
    #b3b3b3 280deg 360deg
  );
  position: relative;
`;

const Legend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
`;

const LegendColor = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 2px;
  background: ${props => props.color};
`;

const SalesStatistics = () => {
  const [salesFilter, setSalesFilter] = useState('По микрорайону');

  return (
    <ChartContainer>
      <ChartTitle>Статистика продаж</ChartTitle>
      <ChartFilters>
        {['По микрорайону', 'По застройщик', 'По жилым комплексам'].map(filter => (
          <FilterButton 
            key={filter}
            active={salesFilter === filter}
            onClick={() => setSalesFilter(filter)}
          >
            {filter}
          </FilterButton>
        ))}
      </ChartFilters>
      <PieChartContainer>
        <PieChart />
        <Legend>
          <LegendItem>
            <LegendColor color="#38646b" />
            Студии
          </LegendItem>
          <LegendItem>
            <LegendColor color="#9B1743" />
            1-к квартиры
          </LegendItem>
          <LegendItem>
            <LegendColor color="#7a7a7a" />
            2-к квартиры
          </LegendItem>
          <LegendItem>
            <LegendColor color="#b3b3b3" />
            3-к квартиры
          </LegendItem>
          <LegendItem>
            <LegendColor color="#d4d4d4" />
            4-к квартиры
          </LegendItem>
        </Legend>
      </PieChartContainer>
    </ChartContainer>
  );
};

export default SalesStatistics; 