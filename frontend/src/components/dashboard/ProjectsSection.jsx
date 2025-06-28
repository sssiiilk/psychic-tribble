import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-family: 'League Spartan', Arial, sans-serif;
  font-weight: 700;
  margin: 50px 0 30px 0;
  color: #333;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const projects = [
  {
    title: 'ЖК "Жилой комплекс"',
    developer: 'ООО "Застройщик"',
    location: 'г. Краснодар',
    totalUnits: 'более 50 объектов',
    availableUnits: 'Сдано 10 объектов'
  },
  {
    title: 'ЖК "Лесные Террасы"',
    developer: 'ООО "Застройщик"',
    location: 'г. Краснодар',
    totalUnits: 'более 50 объектов',
    availableUnits: 'Сдано 10 объектов'
  },
  {
    title: 'ЖК "Вектор Жизни"',
    developer: 'ООО "Застройщик"',
    location: 'г. Краснодар',
    totalUnits: 'более 20 объектов',
    availableUnits: 'Сдано 10 объектов'
  },
  {
    title: 'ЖК "Атриум Сити"',
    developer: 'ООО "Застройщик"',
    location: 'г. Краснодар',
    totalUnits: 'более 50 объектов',
    availableUnits: 'Сдано 10 объектов'
  }
];

const ProjectsSection = () => (
  <>
    <SectionTitle>Мой ЖК</SectionTitle>
    <ProjectsGrid>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </ProjectsGrid>
  </>
);

export default ProjectsSection; 