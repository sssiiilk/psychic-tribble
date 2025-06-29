import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #2c3e50;
  color: white;
  padding: 40px 0 20px 0;
  margin-top: 60px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h3`
  font-family: 'Acrom', sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 20px 0;
  color: white;
`;

const FooterText = styled.p`
  font-family: 'Acrom', sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #bdc3c7;
  margin: 0 0 10px 0;
`;

const FooterLink = styled.a`
  font-family: 'Acrom', sans-serif;
  font-size: 14px;
  color: #bdc3c7;
  text-decoration: none;
  display: block;
  margin-bottom: 8px;
  transition: color 0.3s;
  
  &:hover {
    color: #4A90A4;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #34495e;
  padding-top: 20px;
  text-align: center;
`;

const CopyrightText = styled.p`
  font-family: 'Acrom', sans-serif;
  font-size: 14px;
  color: #bdc3c7;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <FooterTitle>CLICKHOUSE</FooterTitle>
            <FooterText>
              Ваш надежный партнер в поиске недвижимости. 
              Мы помогаем найти идеальное жилье для вас и вашей семьи.
            </FooterText>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Контакты</FooterTitle>
            <FooterText>г. Краснодар, ул. Красная, 123</FooterText>
            <FooterText>Телефон: +7 (861) 123-45-67</FooterText>
            <FooterText>Email: info@clickhouse.ru</FooterText>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Разделы</FooterTitle>
            <FooterLink href="/">Главная</FooterLink>
            <FooterLink href="/search">Поиск недвижимости</FooterLink>
            <FooterLink href="/auth">Войти</FooterLink>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Информация</FooterTitle>
            <FooterLink href="#">О компании</FooterLink>
            <FooterLink href="#">Услуги</FooterLink>
            <FooterLink href="#">Политика конфиденциальности</FooterLink>
          </FooterSection>
        </FooterGrid>
        
        <FooterBottom>
          <CopyrightText>
            © 2024 CLICKHOUSE. Все права защищены.
          </CopyrightText>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 