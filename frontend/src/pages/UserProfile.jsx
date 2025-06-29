import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Container = styled.div`
  background: #ffffff;
  min-height: 100vh;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const UserSection = styled.div`
  margin-bottom: 60px;
`;

const UserHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
`;

const UserName = styled.h1`
  font-size: 2.5rem;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 700;
  color: #333;
  margin: 0;
`;

const PassportBadge = styled.div`
  background: #4ade80;
  color: #065f46;
  font-size: 14px;
  font-family: 'Acrom', Arial, sans-serif;
  border-radius: 20px;
  padding: 8px 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
  
  &::before {
    content: '✓';
    font-weight: bold;
  }
`;

const UserInfoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const InfoBlock = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 1px solid #e0e0e0;
`;

const InfoTitle = styled.h3`
  font-size: 18px;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 600;
  margin: 0 0 25px 0;
  color: #333;
`;

const ContactItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  
  &:last-of-type {
    margin-bottom: 25px;
  }
`;

const ContactLabel = styled.div`
  font-size: 16px;
  font-family: 'Acrom', Arial, sans-serif;
  color: #333;
`;

const ContactValue = styled.div`
  font-size: 16px;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 600;
  color: #5a7c85;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #666;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  transition: background 0.2s;
  color: white;
  
  &:hover {
    background: #5a7c85;
  }
  
  &:nth-child(1) {
    background: #0088cc;
  }
  
  &:nth-child(2) {
    background: #4c75a3;
  }
  
  &:nth-child(3) {
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  }
  
  &:nth-child(4) {
    background: #666;
  }
`;

const PreferencesText = styled.div`
  font-size: 16px;
  font-family: 'Acrom', Arial, sans-serif;
  color: #333;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const EditButton = styled.button`
  background: #5a7c85;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: #4a6b75;
  }
`;

const FavoritesSection = styled.div`
  margin-bottom: 40px;
`;

const FavoritesTitle = styled.h2`
  font-size: 2rem;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 700;
  color: #333;
  margin: 0 0 30px 0;
`;

const FiltersRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Select = styled.select`
  background: #fff;
  border: none;
  border-radius: 25px;
  padding: 15px 20px;
  font-size: 16px;
  font-family: 'Acrom', Arial, sans-serif;
  color: #333;
  cursor: pointer;
  appearance: none;
  min-width: 200px;
  
  &:focus {
    outline: none;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  flex: 1;
`;

const SearchInput = styled.input`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px 40px 10px 12px;
  font-size: 14px;
  font-family: 'Acrom', Arial, sans-serif;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: #5a7c85;
  }
  
  &::placeholder {
    color: #999;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: 16px;
`;

const FavoritesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FavoriteCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  position: relative;
`;

const BookedBadge = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  background: #4ade80;
  color: #065f46;
  font-size: 12px;
  font-family: 'Acrom', Arial, sans-serif;
  border-radius: 16px;
  padding: 6px 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
  z-index: 2;
  
  &::before {
    content: '✓';
    font-weight: bold;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 700;
  color: #333;
  margin: 0 0 8px 0;
`;

const CardPrice = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #333;
  font-family: 'Acrom', Arial, sans-serif;
  margin-bottom: 8px;
`;

const CardDeveloper = styled.div`
  color: #5a7c85;
  font-size: 14px;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 600;
  margin-bottom: 4px;
`;

const CardComplex = styled.div`
  color: #666;
  font-size: 14px;
  font-family: 'Acrom', Arial, sans-serif;
  margin-bottom: 4px;
`;

const CardLocation = styled.div`
  color: #666;
  font-size: 14px;
  font-family: 'Acrom', Arial, sans-serif;
  margin-bottom: 20px;
`;

const CardActions = styled.div`
  display: flex;
  gap: 12px;
`;

const ActionButton = styled.button`
  background: #5a7c85;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 14px;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  flex: 1;
  
  &:hover {
    background: #4a6b75;
  }
`;

const UserProfile = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedComplex, setSelectedComplex] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const favoriteProperties = [
    {
      id: 1,
      title: '2-к. квартира',
      price: '15.000.000 ₽',
      developer: 'GROUP',
      complex: 'ЖК "Новостройки"',
      location: 'г. Краснодар',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
      isBooked: true
    },
    {
      id: 2,
      title: '1-к. квартира',
      price: '7.000.000 ₽',
      developer: 'ЗАСТРОЙЩИК',
      complex: 'ЖК "Лесные террасы"',
      location: 'г. Краснодар',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop&crop=center',
      isBooked: true
    }
  ];

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Content>
          <UserSection>
            <UserHeader>
              <UserName>Имя пользователя</UserName>
              <PassportBadge>Паспорт подтвержден</PassportBadge>
            </UserHeader>

            <UserInfoRow>
              <InfoBlock>
                <InfoTitle>Контактные данные</InfoTitle>
                <ContactItem>
                  <ContactLabel>Контактный номер</ContactLabel>
                  <ContactValue>8999 999 99 99</ContactValue>
                </ContactItem>
                <ContactItem>
                  <ContactLabel>Электронная почта</ContactLabel>
                  <ContactValue>ppp@gmail.com</ContactValue>
                </ContactItem>
                <SocialIcons>
                  <SocialIcon title="Telegram">📱</SocialIcon>
                  <SocialIcon title="VK">VK</SocialIcon>
                  <SocialIcon title="Instagram">📷</SocialIcon>
                  <SocialIcon title="Other">@</SocialIcon>
                </SocialIcons>
              </InfoBlock>

              <InfoBlock>
                <InfoTitle>Мои предпочтения</InfoTitle>
                <PreferencesText>
                  Спальный район, два детских сада рядом, круглосуточные аптеки рядом с домом
                </PreferencesText>
                <EditButton>
                  ✏️
                </EditButton>
              </InfoBlock>
            </UserInfoRow>
          </UserSection>

          <FavoritesSection>
            <FavoritesTitle>Избранное</FavoritesTitle>
            
            <FiltersRow>
              <Select 
                value={selectedCity} 
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="">Выберите город</option>
                <option value="krasnodar">Краснодар</option>
                <option value="moscow">Москва</option>
                <option value="spb">Санкт-Петербург</option>
              </Select>
              
              <Select 
                value={selectedComplex} 
                onChange={(e) => setSelectedComplex(e.target.value)}
              >
                <option value="">Выберите ЖК</option>
                <option value="novostroyki">ЖК "Новостройки"</option>
                <option value="forest">ЖК "Лесные террасы"</option>
                <option value="vector">ЖК "Вектор Жизни"</option>
              </Select>
              
              <SearchContainer>
                <SearchInput 
                  type="text"
                  placeholder="Поиск..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <SearchIcon>🔍</SearchIcon>
              </SearchContainer>
            </FiltersRow>

            <FavoritesGrid>
              {favoriteProperties.map(property => (
                <FavoriteCard key={property.id}>
                  {property.isBooked && <BookedBadge>Вы забронировали</BookedBadge>}
                  <CardImage src={property.image} alt={property.title} />
                  <CardContent>
                    <CardTitle>{property.title}</CardTitle>
                    <CardPrice>{property.price}</CardPrice>
                    <CardDeveloper>{property.developer}</CardDeveloper>
                    <CardComplex>{property.complex}</CardComplex>
                    <CardLocation>{property.location}</CardLocation>
                    <CardActions>
                      <ActionButton>Сравнить</ActionButton>
                      <ActionButton>Удалить</ActionButton>
                    </CardActions>
                  </CardContent>
                </FavoriteCard>
              ))}
            </FavoritesGrid>
          </FavoritesSection>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default UserProfile; 