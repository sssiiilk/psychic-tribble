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
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 700;
  margin: 0 0 30px 0;
  color: #333;
`;

const ChartFilters = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? '#5a7c85' : '#f5f5f5'};
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  font-family: 'Acrom', Arial, sans-serif;
  color: ${props => props.active ? '#fff' : '#666'};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #5a7c85;
    color: #fff;
  }
`;

const PieChartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const PieChartWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PieChart = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: conic-gradient(
    #638b96 0deg 90deg,
    #c288a6 90deg 180deg,
    #5a7c6b 180deg 220deg,
    #9B1743 220deg 310deg,
    #2f5f6f 310deg 360deg
  );
  position: relative;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
`;

const ChartValue = styled.div`
  position: absolute;
  font-size: 0.8rem;
  font-weight: 600;
  color: #333;
  pointer-events: none;
  
  &.value-184 {
    top: 15%;
    left: 75%;
  }
  
  &.value-473 {
    top: 45%;
    right: -15%;
  }
  
  &.value-167 {
    bottom: 25%;
    right: 15%;
  }
  
  &.value-364 {
    bottom: 10%;
    left: 15%;
  }
  
  &.value-775 {
    top: 25%;
    left: -15%;
  }
`;

const Legend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 150px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.95rem;
  font-family: 'Acrom', Arial, sans-serif;
  color: #333;
`;

const LegendColor = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 3px;
  background: ${props => props.color};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const SalesStatistics = () => {
  const [salesFilter, setSalesFilter] = useState('По квартирам');

  return (
    <ChartContainer>
      <ChartTitle>Статистика продаж</ChartTitle>
      <ChartFilters>
        {['По квартирам', 'По жилым комплексам', 'По микрорайону'].map(filter => (
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
        <PieChartWrapper>
          <PieChart />
          <ChartValue className="value-184">184</ChartValue>
          <ChartValue className="value-473">473</ChartValue>
          <ChartValue className="value-167">167</ChartValue>
          <ChartValue className="value-364">364</ChartValue>
          <ChartValue className="value-775">775</ChartValue>
        </PieChartWrapper>
        <Legend>
          <LegendItem>
            <LegendColor color="#e0e0e0" />
            Студии
          </LegendItem>
          <LegendItem>
            <LegendColor color="#c0c0c0" />
            1-к квартиры
          </LegendItem>
          <LegendItem>
            <LegendColor color="#a0a0a0" />
            2-к квартиры
          </LegendItem>
          <LegendItem>
            <LegendColor color="#808080" />
            3-к квартиры  
          </LegendItem>
          <LegendItem>
            <LegendColor color="#606060" />
            4-к квартиры
          </LegendItem>
        </Legend>
      </PieChartContainer>
    </ChartContainer>
  );
};

export default SalesStatistics; 