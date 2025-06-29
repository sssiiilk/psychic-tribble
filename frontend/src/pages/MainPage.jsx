import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import Header from '../components/Header';
import HeroBlock from '../components/HeroBlock';
import PopularOffers from '../components/PopularOffers';
import Footer from '../components/Footer';

const AboutServiceSection = styled.section`
  background: #5a7c85;
  padding: 80px 0;
  margin: 0;
`;

const AboutServiceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const AboutServiceTitle = styled.h2`
  font-family: 'Acrom', Arial, sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 40px 0;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const AboutServiceText = styled.p`
  font-family: 'Acrom', Arial, sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #ffffff;
  line-height: 1.6;
  margin: 0 0 30px 0;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const MainPage = () => (
  <>
    <GlobalStyle />
    <Header />
    <HeroBlock />
    <PopularOffers />
    <AboutServiceSection>
      <AboutServiceContainer>
        <AboutServiceTitle>О сервисе</AboutServiceTitle>
        <AboutServiceText>
          ClickHouse- это твой помощник в выборе недвижимости! На основе искусственного интеллекта и твоих предпочтений мы предложили наилучшую недвижимость для тебя и твоей семьи, проанализировав спрос, популярность, цену, местоположение, инфраструктуру и множество других показателей
        </AboutServiceText>
        <AboutServiceText>
          CLICKHOUSE по твоему желанию может отразить динамику цены и спроса по определенному ЖК и проанализировать тенденцию роста интересующей тебя недвижимости на ближайшие 3 года (аналитика может не совпадать с будущей стоимостью)
        </AboutServiceText>
      </AboutServiceContainer>
    </AboutServiceSection>
    <Footer />
  </>
);

export default MainPage;
