import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { apiRequest, API_ENDPOINTS } from '../../../config/api';

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 700;
  margin: 50px 0 30px 0;
  color: #333;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #666;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #e74c3c;
`;

const ProjectsSection = ({ developerName }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await apiRequest(API_ENDPOINTS.COMPLEXES);
        
        if (response.success) {
          // Преобразуем данные комплексов в формат для проектов
          const transformedProjects = response.data.slice(0, 4).map((complex) => ({
            id: complex.id,
            title: complex.name,
            developer: complex.developer,
            location: complex.address,
            totalUnits: 'более 50 объектов',
            availableUnits: complex.status === 'сдан' ? 'Сдано 10 объектов' : 'В процессе строительства',
            status: complex.status,
            yearBuilt: complex.yearBuilt,
            price: complex.price
          }));
          
          setProjects(transformedProjects);
        } else {
          setError('Ошибка получения данных');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <>
        <SectionTitle>Жилые комплексы от ООО "{developerName || 'Фундамент Групп'}"</SectionTitle>
        <LoadingMessage>Загрузка проектов...</LoadingMessage>
      </>
    );
  }

  if (error) {
    return (
      <>
        <SectionTitle>Жилые комплексы от ООО "{developerName || 'Фундамент Групп'}"</SectionTitle>
        <ErrorMessage>Ошибка: {error}</ErrorMessage>
      </>
    );
  }

  return (
    <>
      <SectionTitle>Жилые комплексы от ООО "{developerName || 'Фундамент Групп'}"</SectionTitle>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsGrid>
    </>
  );
};

export default ProjectsSection; 