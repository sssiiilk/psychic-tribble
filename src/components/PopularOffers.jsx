import styled from 'styled-components';
import OffersCarousel from './OffersCarousel';

const Wrapper = styled.section`
  width: 80vw;
  max-width: 1200px;
  margin: 40px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    width: 98vw;
    margin: 16px auto 0 auto;
  }
`;

const Title = styled.h2`
  font-size: 48px;
  font-family: 'League Spartan', Arial, sans-serif;
  font-weight: 700;
  margin-bottom: 32px;
  margin-top: 0;
  align-self: flex-start;

  @media (max-width: 600px) {
    font-size: 28px;
    margin-bottom: 16px;
    align-self: center;
    text-align: center;
  }
`;

const SearchRow = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
  margin-bottom: 32px;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 16px;
    align-items: stretch;
  }
`;

const Select = styled.select`
  flex: 1;
  min-width: 220px;
  padding: 16px 24px;
  border: 2px solid #eee;
  border-radius: 24px;
  font-size: 18px;
  font-family: 'League Spartan', Arial, sans-serif;
  background: #fff;
  appearance: none;
  outline: none;
  margin-right: 0;

  @media (max-width: 600px) {
    min-width: 0;
    width: 100%;
    font-size: 16px;
    padding: 12px 16px;
  }
`;

const SearchButton = styled.button`
  background: #9B1743;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 0 48px;
  font-size: 18px;
  font-family: 'League Spartan', Arial, sans-serif;
  cursor: pointer;
  transition: background 0.2s;
  margin-left: 0;
  min-width: 180px;
  height: 56px;
  &:hover {
    background: #7a1234;
  }

  @media (max-width: 600px) {
    min-width: 0;
    width: 100%;
    font-size: 16px;
    height: 44px;
    padding: 0 0;
  }
`;

const MapImg = styled.img`
  width: 100%;
  border-radius: 32px;
  margin-top: 0;
  object-fit: cover;

  @media (max-width: 600px) {
    border-radius: 16px;
    height: 390px;
    max-height: 400px;
    object-fit: cover;
  }
`;

const PopularOffers = () => (
  <Wrapper>
    <Title>Посмотрите популярные предложения</Title>
    <SearchRow>
      <Select defaultValue="">
        <option value="" disabled>Выберите регион</option>
        <option>Ростовская область</option>
        <option>Краснодарский край</option>
        <option>Ставропольский край</option>
        <option>Астраханская область</option>
        <option>Волгоградская область</option>
        
      </Select>
      <Select defaultValue="">
        <option value="" disabled>Выберите город</option>
        <option>Ростов-на-Дону</option>
      </Select>
      <Select defaultValue="">
        <option value="" disabled>Выберите район</option>
        <option>Центральный</option>
        <option>Ленинский</option>
      </Select>
      <SearchButton>Искать</SearchButton>
    </SearchRow>
    <MapImg src="https://i.imgur.com/1n6bQpA.png" alt="Карта города" />
    <OffersCarousel />
  </Wrapper>
);

export default PopularOffers; 