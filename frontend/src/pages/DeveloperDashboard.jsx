import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Container = styled.div`
  background: #ffffff;
  min-height: auto;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const CompanyBlock = styled.div`
  display: flex;
  gap: 60px;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const CompanyTitle = styled.h1`
  font-family: 'Acrom', sans-serif;
  font-size: 36px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 50px 0;
  text-align: center;
`;

const LeftSection = styled.div`
  flex: 0 0 300px;
  
  @media (max-width: 768px) {
    flex: none;
  }
`;

const RightSection = styled.div`
  flex: 1;
`;

const MenuCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 0;
  font-family: 'Acrom', sans-serif;
  font-size: 16px;
  color: #000000;
  cursor: pointer;
  transition: color 0.3s;
  
  &:hover {
    color: #4A90A4;
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }
`;

const MenuIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 20px;
    height: 20px;
  }
  
  &.home svg {
    stroke: #8B1538;
  }
  
  &.heart svg {
    stroke: #8B1538;
  }
  
  &.building svg {
    stroke: #8B1538;
  }
`;

const CompanyDescription = styled.p`
  font-family: 'Acrom', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #000000;
  margin: 0 0 30px 0;
`;

const AssociationBadge = styled.div`
  display: inline-flex;
  align-items: center;
  background: #27ae60;
  color: white;
  padding: 12px 20px;
  border-radius: 20px;
  font-family: 'Acrom', sans-serif;
  font-size: 14px;
  font-weight: 500;
  
  &::before {
    content: '✓';
    margin-right: 8px;
    font-weight: bold;
  }
`;

const ProjectsSection = styled.div`
  margin-top: 60px;
`;

const SectionTitle = styled.h2`
  font-family: 'Acrom', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 40px 0;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ProjectCard = styled.div`
  display: flex;
  gap: 20px;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const ProjectImage = styled.div`
  width: 282px;
  height: 330px;
  border-radius: 8px;
  background-image: url('${props => props.backgroundImage}');
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const ProjectInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjectHeader = styled.div`
  margin-bottom: 16px;
`;

const ProjectTitle = styled.h3`
  font-family: 'Acrom', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #000;
  margin: 0 0 8px 0;
`;

const ProjectLocation = styled.div`
  font-family: 'Acrom', sans-serif;
  font-size: 14px;
  color: #666666;
  margin-bottom: 12px;
`;

const ProjectStats = styled.div`
  margin-bottom: 16px;
`;

const StatItem = styled.div`
  font-family: 'Acrom', sans-serif;
  font-size: 14px;
  color: #000000;
  margin-bottom: 4px;
`;

const EditButton = styled.button`
  background: #fff;
  color: #5a7c85;
  border: 2px solid #5a7c85;
  border-radius: 20px;
  padding: 12px 24px;
  font-size: 14px;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 600;
  cursor: pointer;
  align-self: flex-start;
  transition: all 0.2s;
  
  &:hover {
    background: #5a7c85;
    color: #fff;
  }
`;

const StatisticsSection = styled.div`
  margin-top: 60px;
`;

const StatisticsContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const StatisticsTitle = styled.h2`
  font-family: 'Acrom', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 30px 0;
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
`;

const Tab = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
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

const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const PieChartContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const PieChart = styled.svg`
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
`;

const ChartLabel = styled.div`
  position: absolute;
  font-family: 'Acrom', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #8B1538;
  pointer-events: none;
`;

const Legend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LegendColor = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 2px;
  background-color: ${props => props.color};
`;

const LegendText = styled.span`
  font-family: 'Acrom', sans-serif;
  font-size: 14px;
  color: #000000;
`;

const DeveloperDashboard = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Content>
          <CompanyTitle>ООО "Фундамент Групп"</CompanyTitle>
          
          <CompanyBlock>
            <LeftSection>
              <MenuCard>
                <MenuItem>
                  <MenuIcon className="home">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="9,22 9,12 15,12 15,22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </MenuIcon>
                  Мои ЖК
                </MenuItem>
                
                <MenuItem>
                  <MenuIcon className="heart">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </MenuIcon>
                  Статистика продаж
                </MenuItem>
                
                <MenuItem>
                  <MenuIcon className="building">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M3 21h18M5 21V7l8-4v18M19 21V10l-6-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01M13 9v.01M13 12v.01M13 15v.01M13 18v.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </MenuIcon>
                  Статистика ЖК
                </MenuItem>
              </MenuCard>
            </LeftSection>
            
            <RightSection>
              <CompanyDescription>
                Компания «Фундамент Групп» — надежный застройщик с 15-летним опытом 
                проектирования и возведения жилых комплексов в Краснодаре и Подмосковье. Мы 
                специализируемся на создании современного комфортного жилья для семей, 
                молодежи и людей, ценящих качество жизни.
              </CompanyDescription>
              
              <AssociationBadge>
                Участник Ассоциации застройщиков
              </AssociationBadge>
            </RightSection>
          </CompanyBlock>
          
          <ProjectsSection>
            <SectionTitle>Жилые комплексы от ООО "Фундамент Групп"</SectionTitle>
            
            <ProjectsGrid>
              <ProjectCard>
                <ProjectImage backgroundImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=282&h=330&fit=crop&crop=center" />
                <ProjectInfo>
                  <ProjectHeader>
                    <ProjectTitle>ЖК "Жилой комплекс"</ProjectTitle>
                    <ProjectLocation>г. Краснодар</ProjectLocation>
                    <ProjectStats>
                      <StatItem>Всего: более 20 объектов</StatItem>
                      <StatItem>Сдано: 10 объектов</StatItem>
                    </ProjectStats>
                  </ProjectHeader>
                  <EditButton>Редактировать</EditButton>
                </ProjectInfo>
              </ProjectCard>
              
              <ProjectCard>
                <ProjectImage backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=282&h=330&fit=crop&crop=center" />
                <ProjectInfo>
                  <ProjectHeader>
                    <ProjectTitle>ЖК "Лесные Террасы"</ProjectTitle>
                    <ProjectLocation>г. Краснодар</ProjectLocation>
                    <ProjectStats>
                      <StatItem>Всего: более 20 объектов</StatItem>
                      <StatItem>Сдано: 10 объектов</StatItem>
                    </ProjectStats>
                  </ProjectHeader>
                  <EditButton>Редактировать</EditButton>
                </ProjectInfo>
              </ProjectCard>
              
              <ProjectCard>
                <ProjectImage backgroundImage="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=282&h=330&fit=crop&crop=center" />
                <ProjectInfo>
                  <ProjectHeader>
                    <ProjectTitle>ЖК "Вектор Жизни"</ProjectTitle>
                    <ProjectLocation>г. Краснодар</ProjectLocation>
                    <ProjectStats>
                      <StatItem>Всего: более 20 объектов</StatItem>
                      <StatItem>Сдано: 10 объектов</StatItem>
                    </ProjectStats>
                  </ProjectHeader>
                  <EditButton>Редактировать</EditButton>
                </ProjectInfo>
              </ProjectCard>
              
              <ProjectCard>
                <ProjectImage backgroundImage="https://images.unsplash.com/photo-1560440021-33f9b867899d?w=282&h=330&fit=crop&crop=center" />
                <ProjectInfo>
                  <ProjectHeader>
                    <ProjectTitle>ЖК "Атриум Сити"</ProjectTitle>
                    <ProjectLocation>г. Краснодар</ProjectLocation>
                    <ProjectStats>
                      <StatItem>Всего: более 20 объектов</StatItem>
                      <StatItem>Сдано: 10 объектов</StatItem>
                    </ProjectStats>
                  </ProjectHeader>
                  <EditButton>Редактировать</EditButton>
                </ProjectInfo>
              </ProjectCard>
            </ProjectsGrid>
          </ProjectsSection>
          
          <StatisticsSection>
            <StatisticsContainer>
              <StatisticsTitle>Статистика продаж</StatisticsTitle>
              
              <TabsContainer>
                <Tab className="active">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  По квартирам
                </Tab>
                
                <Tab>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M3 21h18M5 21V7l8-4v18M19 21V10l-6-4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01M13 9v.01M13 12v.01M13 15v.01M13 18v.01" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  По жилым комплексам
                </Tab>
                
                <Tab>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  По микрорайону
                </Tab>
              </TabsContainer>
              
              <ChartContainer>
                <PieChartContainer>
                  <PieChart viewBox="0 0 400 400">
                    {/* Студии - серый */}
                    <path
                      d="M 200,200 L 200,50 A 150,150 0 0,1 292.43,92.43 Z"
                      fill="#E0E0E0"
                    />
                    {/* 1-к квартиры - светло-серый */}
                    <path
                      d="M 200,200 L 292.43,92.43 A 150,150 0 0,1 350,200 Z"
                      fill="#D0D0D0"
                    />
                    {/* 2-к квартиры - голубой */}
                    <path
                      d="M 200,200 L 350,200 A 150,150 0 1,1 107.57,292.43 Z"
                      fill="#4A90A4"
                    />
                    {/* 3-к квартиры - бордовый */}
                    <path
                      d="M 200,200 L 107.57,292.43 A 150,150 0 0,1 107.57,107.57 Z"
                      fill="#8B1538"
                    />
                    {/* 4-к квартиры - темно-синий */}
                    <path
                      d="M 200,200 L 107.57,107.57 A 150,150 0 0,1 200,50 Z"
                      fill="#2C3E50"
                    />
                  </PieChart>
                  
                  <ChartLabel style={{ top: '20px', right: '60px' }}>473</ChartLabel>
                  <ChartLabel style={{ top: '80px', right: '20px' }}>187</ChartLabel>
                  <ChartLabel style={{ bottom: '60px', right: '20px' }}>569</ChartLabel>
                  <ChartLabel style={{ bottom: '20px', left: '60px' }}>775</ChartLabel>
                  <ChartLabel style={{ top: '60px', left: '20px' }}>194</ChartLabel>
                </PieChartContainer>
                
                <Legend>
                  <LegendItem>
                    <LegendColor color="#E0E0E0" />
                    <LegendText>Студии</LegendText>
                  </LegendItem>
                  <LegendItem>
                    <LegendColor color="#D0D0D0" />
                    <LegendText>1-к. квартиры</LegendText>
                  </LegendItem>
                  <LegendItem>
                    <LegendColor color="#4A90A4" />
                    <LegendText>2-к. квартиры</LegendText>
                  </LegendItem>
                  <LegendItem>
                    <LegendColor color="#8B1538" />
                    <LegendText>3-к. квартиры</LegendText>
                  </LegendItem>
                  <LegendItem>
                    <LegendColor color="#2C3E50" />
                    <LegendText>4-к. квартиры</LegendText>
                  </LegendItem>
                </Legend>
              </ChartContainer>
            </StatisticsContainer>
          </StatisticsSection>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default DeveloperDashboard; 