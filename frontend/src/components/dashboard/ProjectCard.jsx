import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  height: 200px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0,0,0,0.12);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const StyledProjectImage = styled.div`
  width: 200px;
  height: 200px;
  background-image: url('${props => props.backgroundImage}');
  background-size: cover;
  background-position: center;
  position: relative;
  flex-shrink: 0;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    height: 160px;
  }
`;

const ProjectContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ProjectInfo = styled.div`
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ProjectLocation = styled.div`
  color: #666;
  font-size: 1rem;
  margin-bottom: 16px;
  font-weight: 500;
`;

const ProjectStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 20px;
`;

const ProjectStat = styled.div`
  font-size: 0.95rem;
  color: #555;
  
  &:first-child {
    font-weight: 600;
  }
`;

const ProjectButton = styled.button`
  background: #fff;
  color: #5a7c85;
  border: 2px solid #5a7c85;
  border-radius: 20px;
  padding: 12px 24px;
  font-size: 14px;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  align-self: flex-start;
  
  &:hover {
    background: #5a7c85;
    color: #fff;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Разные изображения для разных проектов
const getProjectImage = (title) => {
  const images = {
    'ЖК "Жилой комплекс"': 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'ЖК "Лесные Террасы"': 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'ЖК "Вектор Жизни"': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'ЖК "Атриум Сити"': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  };
  return images[title] || images['ЖК "Жилой комплекс"'];
};

const ProjectCard = ({ project }) => (
  <Card>
    <StyledProjectImage backgroundImage={getProjectImage(project.title)} />
    <ProjectContent>
      <ProjectInfo>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectLocation>{project.location}</ProjectLocation>
        <ProjectStats>
          <ProjectStat>Всего: {project.totalUnits}</ProjectStat>
          <ProjectStat>Сдано: {project.availableUnits}</ProjectStat>
        </ProjectStats>
      </ProjectInfo>
      <ProjectButton>Редактировать</ProjectButton>
    </ProjectContent>
  </Card>
);

export default ProjectCard; 