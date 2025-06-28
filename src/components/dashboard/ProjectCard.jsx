import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  overflow: hidden;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 1.1rem;
`;

const ProjectContent = styled.div`
  padding: 24px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-family: 'League Spartan', Arial, sans-serif;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #333;
`;

const ProjectDeveloper = styled.div`
  color: #666;
  font-size: 1rem;
  margin-bottom: 4px;
`;

const ProjectLocation = styled.div`
  color: #666;
  font-size: 1rem;
  margin-bottom: 12px;
`;

const ProjectStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;
`;

const ProjectStat = styled.div`
  font-size: 0.95rem;
  color: #555;
`;

const ProjectButton = styled.button`
  background: #38646b;
  color: #fff;
  border: none;
  border-radius: 16px;
  padding: 12px 24px;
  font-size: 1rem;
  font-family: 'League Spartan', Arial, sans-serif;
  cursor: pointer;
  width: 100%;
  transition: background 0.2s;
  
  &:hover {
    background: #27474b;
  }
`;

const ProjectCard = ({ project }) => (
  <Card>
    <ProjectImage>
      <img src="" alt={project.title} style={{display: 'none'}} />
      Изображение недоступно
    </ProjectImage>
    <ProjectContent>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectDeveloper>{project.developer}</ProjectDeveloper>
      <ProjectLocation>{project.location}</ProjectLocation>
      <ProjectStats>
        <ProjectStat>Всего: {project.totalUnits}</ProjectStat>
        <ProjectStat>{project.availableUnits}</ProjectStat>
      </ProjectStats>
      <ProjectButton>Узнать</ProjectButton>
    </ProjectContent>
  </Card>
);

export default ProjectCard; 