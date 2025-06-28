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

const BarChart = styled.div`
  display: flex;
  align-items: end;
  gap: 20px;
  height: 200px;
  margin: 20px 0;
`;

const Bar = styled.div`
  background: ${props => props.color};
  width: 60px;
  height: ${props => props.height}%;
  border-radius: 4px 4px 0 0;
  position: relative;
  display: flex;
  align-items: end;
  justify-content: center;
  padding-bottom: 5px;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
`;

const BarLabel = styled.div`
  margin-top: 8px;
  font-size: 0.8rem;
  text-align: center;
  color: #666;
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

const ProjectStatistics = () => {
  const [projectFilter, setProjectFilter] = useState('По застройщик');

  return (
    <ChartContainer>
      <ChartTitle>Статистика отдельного ЖК</ChartTitle>
      <ChartFilters>
        <select value={projectFilter} onChange={(e) => setProjectFilter(e.target.value)} style={{
          border: '1px solid #ddd',
          borderRadius: '20px',
          padding: '6px 12px',
          fontSize: '0.9rem',
          marginRight: '10px'
        }}>
          <option>Выберите ЖК</option>
          <option>ЖК "Жилой комплекс"</option>
          <option>ЖК "Лесные Террасы"</option>
        </select>
        <select style={{
          border: '1px solid #ddd',
          borderRadius: '20px',
          padding: '6px 12px',
          fontSize: '0.9rem'
        }}>
          <option>Выберите период</option>
          <option>За месяц</option>
          <option>За квартал</option>
          <option>За год</option>
        </select>
      </ChartFilters>
      <ChartFilters>
        {['Посещения', 'Просмотры', 'Добавили в избранное', 'Забронированы'].map(filter => (
          <FilterButton key={filter} active={filter === 'Посещения'}>
            {filter}
          </FilterButton>
        ))}
      </ChartFilters>
      <BarChart>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Bar height={70} color="#38646b">600</Bar>
          <BarLabel>1</BarLabel>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Bar height={90} color="#7cb83d">800</Bar>
          <BarLabel>2</BarLabel>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Bar height={60} color="#9B1743">450</Bar>
          <BarLabel>3</BarLabel>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Bar height={5} color="#38a0a5">50</Bar>
          <BarLabel>4</BarLabel>
        </div>
      </BarChart>
      <Legend>
        <LegendItem>
          <LegendColor color="#7cb83d" />
          Студии
        </LegendItem>
        <LegendItem>
          <LegendColor color="#38646b" />
          1-к квартиры
        </LegendItem>
        <LegendItem>
          <LegendColor color="#9B1743" />
          2-к квартиры
        </LegendItem>
        <LegendItem>
          <LegendColor color="#38a0a5" />
          3-к квартиры
        </LegendItem>
        <LegendItem>
          <LegendColor color="#d4d4d4" />
          4-к квартиры
        </LegendItem>
      </Legend>
    </ChartContainer>
  );
};

export default ProjectStatistics; 