import styled from 'styled-components';

const CompanyHeader = styled.h1`
  font-size: 2.5rem;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 700;
  margin: 0 0 40px 0;
  color: #333;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const CompanyInfo = styled.div`
  background: transparent;
  padding: 0;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const InfoSection = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 60px;
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 200px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 1.1rem;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  transition: color 0.2s;
  
  &:hover {
    color: #9B1743;
  }
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9B1743;
  font-size: 20px;
`;

const InfoText = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  max-width: 500px;
  margin-bottom: 30px;
`;

const AssociationBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #e8f5e8;
  color: #2d5a2d;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: 500;
  align-self: flex-start;
  
  &:before {
    content: "✓";
    font-weight: bold;
    color: #4caf50;
    font-size: 1.1rem;
  }
`;

const CompanyInfoSection = ({ developerName }) => (
  <>
    <CompanyHeader>ООО "{developerName || 'Фундамент Групп'}"</CompanyHeader>
    <CompanyInfo>
      <InfoSection>
        <InfoLeft>
          <InfoItem>
            <Icon>🏠</Icon>
            Мои ЖК
          </InfoItem>
          <InfoItem>
            <Icon>👍</Icon>
            Статистика продаж
          </InfoItem>
          <InfoItem>
            <Icon>📊</Icon>
            Статистика ЖК
          </InfoItem>
        </InfoLeft>
        <div>
          <InfoText>
            Компания «{developerName || 'Фундамент Групп'}» — надежный застройщик с 15-летним опытом 
            проектирования и возведения жилых комплексов в Краснодаре и Подмосковье. Мы 
            специализируемся на создании современного комфортного жилья для семей, 
            молодежи и людей, ценящих качество жизни.
          </InfoText>
          <AssociationBadge>
            Участник Ассоциации застройщиков
          </AssociationBadge>
        </div>
      </InfoSection>
    </CompanyInfo>
  </>
);

export default CompanyInfoSection; 