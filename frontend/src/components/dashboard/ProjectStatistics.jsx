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

const SelectContainer = styled.div`
  margin-bottom: 30px;
`;

const Select = styled.select`
  background: #fff;
  border: none;
  border-radius: 25px;
  padding: 15px 20px;
  font-size: 16px;
  font-family: 'Acrom', Arial, sans-serif;
  color: #333;
  cursor: pointer;
  appearance: none;
  min-width: 200px;
  
  &:focus {
    outline: none;
  }
`;

const ChartFilters = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 30px;
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

const ChartSection = styled.div`
  display: flex;
  gap: 40px;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ChartWrapper = styled.div`
  flex: 1;
  border: 2px solid #4a9eff;
  border-radius: 8px;
  padding: 20px;
  background: #fff;
`;

const BarChart = styled.div`
  display: flex;
  align-items: end;
  gap: 40px;
  height: 200px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    background: #ddd;
  }
`;

const YAxisLabels = styled.div`
  position: absolute;
  left: -30px;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #666;
`;

const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: relative;
`;

const Bar = styled.div`
  background: ${props => props.color};
  width: 60px;
  height: ${props => props.height}%;
  border-radius: 4px 4px 0 0;
  display: flex;
  align-items: end;
  justify-content: center;
  padding-bottom: 5px;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const BarLabel = styled.div`
  font-size: 0.8rem;
  text-align: center;
  color: #666;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 600;
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

const ProjectStatistics = () => {
  const [selectedProject, setSelectedProject] = useState('Выберите ЖК');
  const [activeFilter, setActiveFilter] = useState('Проданы');

  return (
    <ChartContainer>
      <ChartTitle>Статистика отдельного ЖК</ChartTitle>
      
      <SelectContainer>
        <Select 
          value={selectedProject} 
          onChange={(e) => setSelectedProject(e.target.value)}
        >
          <option>Выберите ЖК</option>
          <option>ЖК "Жилой комплекс"</option>
          <option>ЖК "Лесные Террасы"</option>
          <option>ЖК "Вектор Жизни"</option>
          <option>ЖК "Атриум Сити"</option>
        </Select>
      </SelectContainer>

      <ChartFilters>
        {['Проданы', 'Просмотры', 'Добавили в избранное', 'Забронированы'].map(filter => (
          <FilterButton 
            key={filter} 
            active={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </FilterButton>
        ))}
      </ChartFilters>

      <ChartSection>
        <ChartWrapper>
          <YAxisLabels>
            <div>1000</div>
            <div>750</div>
            <div>500</div>
            <div>250</div>
            <div>0</div>
          </YAxisLabels>
          <BarChart>
            <BarContainer>
              <Bar height={70} color="#5a7c85" />
              <BarLabel>1</BarLabel>
            </BarContainer>
            <BarContainer>
              <Bar height={90} color="#7cb83d" />
              <BarLabel>2</BarLabel>
            </BarContainer>
            <BarContainer>
              <Bar height={75} color="#8b7355" />
              <BarLabel>3</BarLabel>
            </BarContainer>
            <BarContainer>
              <Bar height={15} color="#40a0a0" />
              <BarLabel>4</BarLabel>
            </BarContainer>
          </BarChart>
        </ChartWrapper>

        <Legend>
          <LegendItem>
            <LegendColor color="#7cb83d" />
            Студии
          </LegendItem>
          <LegendItem>
            <LegendColor color="#5a7c85" />
            1-к квартиры
          </LegendItem>
          <LegendItem>
            <LegendColor color="#8b7355" />
            2-к квартиры
          </LegendItem>
          <LegendItem>
            <LegendColor color="#40a0a0" />
            3-к квартиры
          </LegendItem>
          <LegendItem>
            <LegendColor color="#c0c0c0" />
            4-к квартиры
          </LegendItem>
        </Legend>
      </ChartSection>
    </ChartContainer>
  );
};

export default ProjectStatistics; 