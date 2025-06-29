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
  padding: 40px 20px;
`;

const PropertyMain = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PropertyInfo = styled.div`
  flex: 1;
`;

const PropertyTitle = styled.h1`
  font-family: 'Acrom', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #000000;
  margin: 0 0 16px 0;
`;

const DeveloperBadge = styled.div`
  display: inline-flex;
  align-items: center;
  background: #4A90A4;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-family: 'Acrom', sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    margin-right: 8px;
  }
`;

const Price = styled.div`
  font-family: 'Acrom', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: #8B1538;
  margin-bottom: 20px;
`;

const CharacteristicsTable = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CharacteristicItem = styled.div`
  background: white;
  padding: 16px 12px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CharacteristicLabel = styled.div`
  font-family: 'Acrom', sans-serif;
  font-size: 14px;
  color: #666666;
  margin-bottom: 4px;
`;

const CharacteristicValue = styled.div`
  font-family: 'Acrom', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #000000;
`;

const Section = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
`;

const SectionTitle = styled.div`
  font-family: 'Acrom', sans-serif;
  font-size: 14px;
  color: #666666;
  margin-bottom: 8px;
`;

const SectionValue = styled.div`
  font-family: 'Acrom', sans-serif;
  font-size: 16px;
  color: #000000;
  line-height: 1.4;
`;

const AddressLink = styled.a`
  color: #4A90A4;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 20px;
`;

const PrimaryButton = styled.button`
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
  
  &:hover {
    background: #5a7c85;
    color: #fff;
  }
`;

const SecondaryButton = styled.button`
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
  
  &:hover {
    background: #5a7c85;
    color: #fff;
  }
`;

const FavoriteButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  
  svg {
    width: 28px;
    height: 28px;
    fill: none;
    stroke: #E91E63;
    stroke-width: 2;
  }
`;

const PlanSection = styled.div`
  flex: 0 0 400px;
  
  @media (max-width: 768px) {
    flex: none;
  }
`;

const MainPlan = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  background: white;
`;

const PlanImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const AdditionalPlans = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

const SmallPlan = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 8px;
  background: white;
  cursor: pointer;
  transition: border-color 0.3s;
  
  &:hover {
    border-color: #4A90A4;
  }
`;

const SmallPlanImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 2px;
`;

const MortgageCalculator = styled.div`
  background: #8B1538;
  width: 100%;
  padding: 40px 0;
  margin-top: 30px;
`;

const CalculatorContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const CalculatorTitle = styled.h2`
  font-family: 'Acrom', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: white;
  text-align: center;
  margin: 0 0 40px 0;
`;

const CalculatorGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const SliderBlock = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
`;

const SliderLabel = styled.div`
  font-family: 'Acrom', sans-serif;
  font-size: 14px;
  color: #666666;
  margin-bottom: 16px;
`;

const SliderValue = styled.div`
  font-family: 'Acrom', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  text-align: right;
  margin-bottom: 16px;
`;

const SliderContainer = styled.div`
  position: relative;
`;

const Slider = styled.input`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: #e0e0e0;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  
  &::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #4A90A4;
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #4A90A4;
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  &::-webkit-slider-track {
    width: 100%;
    height: 4px;
    background: #e0e0e0;
    border-radius: 2px;
  }
  
  &::-moz-range-track {
    width: 100%;
    height: 4px;
    background: #e0e0e0;
    border-radius: 2px;
    border: none;
  }
`;

const PaymentResult = styled.div`
  text-align: center;
`;

const PaymentLabel = styled.div`
  font-family: 'Acrom', sans-serif;
  font-size: 16px;
  color: white;
  margin-bottom: 8px;
`;

const PaymentAmount = styled.div`
  font-family: 'Acrom', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: white;
`;

const MapSection = styled.div`
  margin-top: 40px;
`;

const MapTitle = styled.h2`
  font-family: 'Acrom', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 30px 0;
  text-align: center;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666666;
  font-family: 'Acrom', sans-serif;
  font-size: 16px;
  
  &::before {
    content: 'Карта будет загружена здесь';
  }
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const PropertyDetailsPage = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Content>
          <PropertyMain>
            <PropertyInfo>
              <PropertyTitle>2-к. квартира</PropertyTitle>
              
              <DeveloperBadge>
                Застройщик ООО "Застройщик"
              </DeveloperBadge>
              
              <Price>10, 8 млн руб.</Price>
              
              <CharacteristicsTable>
                <CharacteristicItem>
                  <CharacteristicLabel>Площадь</CharacteristicLabel>
                  <CharacteristicValue>60 кв.м.</CharacteristicValue>
                </CharacteristicItem>
                <CharacteristicItem>
                  <CharacteristicLabel>Этаж</CharacteristicLabel>
                  <CharacteristicValue>5/9</CharacteristicValue>
                </CharacteristicItem>
                <CharacteristicItem>
                  <CharacteristicLabel>Цена за кв.м</CharacteristicLabel>
                  <CharacteristicValue>180 000 руб.</CharacteristicValue>
                </CharacteristicItem>
                <CharacteristicItem>
                  <CharacteristicLabel>Ремонт</CharacteristicLabel>
                  <CharacteristicValue>Евро</CharacteristicValue>
                </CharacteristicItem>
                <CharacteristicItem>
                  <CharacteristicLabel>Ремонт</CharacteristicLabel>
                  <CharacteristicValue>Евро</CharacteristicValue>
                </CharacteristicItem>
              </CharacteristicsTable>
              
              <Section>
                <SectionTitle>Адрес</SectionTitle>
                <SectionValue>
                  Краснодар, улица. Ленина, д. 10<br />
                  <AddressLink href="#">Посмотреть на карте</AddressLink>
                </SectionValue>
              </Section>
              
              <Section>
                <SectionTitle>Жилой комплекс</SectionTitle>
                <SectionValue>"Жилой комплекс"</SectionValue>
              </Section>
              
              <Section>
                <SectionTitle>Тип жилья</SectionTitle>
                <SectionValue>Новостройка</SectionValue>
              </Section>
              
              <ActionButtons>
                <PrimaryButton>Купить</PrimaryButton>
                <SecondaryButton>Забронировать</SecondaryButton>
                <FavoriteButton>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </FavoriteButton>
              </ActionButtons>
            </PropertyInfo>
            
            <PlanSection>
              <MainPlan>
                <PlanImage src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center" alt="План квартиры" />
              </MainPlan>
              
              <AdditionalPlans>
                <SmallPlan>
                  <SmallPlanImage src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop&crop=center" alt="План 1" />
                </SmallPlan>
                <SmallPlan>
                  <SmallPlanImage src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=100&h=100&fit=crop&crop=center" alt="План 2" />
                </SmallPlan>
                <SmallPlan>
                  <SmallPlanImage src="https://images.unsplash.com/photo-1560440021-33f9b867899d?w=100&h=100&fit=crop&crop=center" alt="План 3" />
                </SmallPlan>
              </AdditionalPlans>
            </PlanSection>
          </PropertyMain>
        </Content>
      </Container>
      
      <MortgageCalculator>
        <CalculatorContent>
          <CalculatorTitle>Ипотечный калькулятор</CalculatorTitle>
          
          <CalculatorGrid>
            <SliderBlock>
              <SliderLabel>Стоимость недвижимости</SliderLabel>
              <SliderValue>17 000 000 ₽</SliderValue>
              <SliderContainer>
                <Slider type="range" min="1000000" max="50000000" defaultValue="17000000" />
              </SliderContainer>
            </SliderBlock>
            
            <SliderBlock>
              <SliderLabel>Первоначальный взнос</SliderLabel>
              <SliderValue>17 000 000 ₽</SliderValue>
              <SliderContainer>
                <Slider type="range" min="1000000" max="20000000" defaultValue="17000000" />
              </SliderContainer>
            </SliderBlock>
            
            <SliderBlock>
              <SliderLabel>Срок кредита</SliderLabel>
              <SliderValue>10 лет</SliderValue>
              <SliderContainer>
                <Slider type="range" min="1" max="30" defaultValue="10" />
              </SliderContainer>
            </SliderBlock>
            
            <SliderBlock>
              <SliderLabel>Процентная ставка</SliderLabel>
              <SliderValue>9 %</SliderValue>
              <SliderContainer>
                <Slider type="range" min="1" max="20" defaultValue="9" />
              </SliderContainer>
            </SliderBlock>
          </CalculatorGrid>
          
          <PaymentResult>
            <PaymentLabel>Итоговый ежемесячный платеж</PaymentLabel>
            <PaymentAmount>17 000 000 ₽</PaymentAmount>
          </PaymentResult>
        </CalculatorContent>
      </MortgageCalculator>
      
      <Container>
        <Content>
          <MapSection>
            <MapTitle>Смотреть расположение на карте</MapTitle>
            <MapContainer>
              {/* Здесь будет интегрирована карта */}
            </MapContainer>
          </MapSection>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default PropertyDetailsPage; 