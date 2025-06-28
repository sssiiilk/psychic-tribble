import styled from 'styled-components';

const CompanyHeader = styled.h1`
  font-size: 2.5rem;
  font-family: 'League Spartan', Arial, sans-serif;
  font-weight: 700;
  margin: 0 0 30px 0;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CompanyInfo = styled.div`
  background: #f8f9fa;
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const InfoSection = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 30px;
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InfoTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #666;
`;

const InfoText = styled.div`
  font-size: 1.4rem;
  line-height: 1.6;
  color: #333;
  max-width: 500px;
`;

const AssociationBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #e6f3e6;
  color: #38646b;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  align-self: flex-start;
  
  &:before {
    content: "✓";
    font-weight: bold;
  }
`;

const CompanyInfoSection = () => (
  <>
    <CompanyHeader>ООО "Фундамент Групп"</CompanyHeader>
    <CompanyInfo>
      <InfoSection>
        <InfoLeft>
          <InfoTitle>ЖК застройщика "Фундамент Групп"</InfoTitle>
          <InfoTitle>Статистика продаж</InfoTitle>
          <InfoTitle>Статистика ЖК</InfoTitle>
        </InfoLeft>
        <InfoText>
          Компания «Фундамент Групп» — надежный застройщик с 15-летним опытом 
          проектирования и возведения жилых комплексов в Краснодаре и Подмосковье. Мы 
          специализируемся на создании современного комфортного жилья для семей, 
          молодежи и людей, ценящих качество жизни.
        </InfoText>
        <AssociationBadge>
          Участник Ассоциации застройщиков
        </AssociationBadge>
      </InfoSection>
    </CompanyInfo>
  </>
);

export default CompanyInfoSection; 