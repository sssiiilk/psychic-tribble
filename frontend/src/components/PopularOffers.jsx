import styled from 'styled-components';
import { useState, useEffect } from 'react';
import OffersCarousel from './OffersCarousel';
import LeafletMap from './LeafletMap';

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
  font-family: 'Acrom', Arial, sans-serif;
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
  background: #fff;
  border: none;
  border-radius: 25px;
  padding: 15px 20px;
  font-size: 16px;
  font-family: 'Acrom', Arial, sans-serif;
  color: #333;
  cursor: pointer;
  appearance: none;
  outline: none;
  margin-right: 0;

  @media (max-width: 600px) {
    min-width: 0;
    width: 100%;
    font-size: 16px;
    padding: 15px 20px;
  }
`;

const SearchButton = styled.button`
  background: #9B1743;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 0 48px;
  font-size: 18px;
  font-family: 'Acrom', Arial, sans-serif;
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

const MapSection = styled.div`
  width: 100%;
  margin: 32px 0;

  @media (max-width: 600px) {
    margin: 16px 0;
  }
`;

const MapTitle = styled.h3`
  font-size: 24px;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 600;
  color: #333;
  margin: 0 0 16px 0;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 20px;
    margin: 0 0 12px 0;
  }
`;

const MapDescription = styled.p`
  font-size: 16px;
  font-family: 'Acrom', Arial, sans-serif;
  color: #666;
  text-align: center;
  margin: 0 0 24px 0;
  line-height: 1.5;

  @media (max-width: 600px) {
    font-size: 14px;
    margin: 0 0 16px 0;
  }
`;

const PopularOffers = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  // Очищаем выбранный город при смене региона
  useEffect(() => {
    setSelectedCity('');
  }, [selectedRegion]);

  // Данные городов для каждого региона
  const cityOptions = {
    'krasnodar': [
      { value: 'krasnodar', label: 'Краснодар' },
      { value: 'sochi', label: 'Сочи' },
      { value: 'novorossiysk', label: 'Новороссийск' }
    ],
    'moscow': [
      { value: 'moscow', label: 'Москва' },
      { value: 'podolsk', label: 'Подольск' },
      { value: 'khimki', label: 'Химки' }
    ],
    'spb': [
      { value: 'spb', label: 'Санкт-Петербург' },
      { value: 'pushkin', label: 'Пушкин' },
      { value: 'kolpino', label: 'Колпино' }
    ],
    'rostov': [
      { value: 'rostov', label: 'Ростов-на-Дону' },
      { value: 'taganrog', label: 'Таганрог' }
    ],
    'stavropol': [
      { value: 'stavropol', label: 'Ставрополь' },
      { value: 'pyatigorsk', label: 'Пятигорск' }
    ],
    'astrakhan': [
      { value: 'astrakhan', label: 'Астрахань' }
    ],
    'volgograd': [
      { value: 'volgograd', label: 'Волгоград' }
    ]
  };

  const handleSearch = () => {
    // Можно добавить дополнительную логику поиска
    console.log('Поиск по региону:', selectedRegion, 'и городу:', selectedCity);
  };

  return (
    <Wrapper>
      <Title>Посмотрите популярные предложения</Title>
      <SearchRow>
        <Select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
          <option value="" disabled>Выберите регион</option>
          <option value="rostov">Ростовская область</option>
          <option value="krasnodar">Краснодарский край</option>
          <option value="stavropol">Ставропольский край</option>
          <option value="astrakhan">Астраханская область</option>
          <option value="volgograd">Волгоградская область</option>
          <option value="moscow">Московская область</option>
          <option value="spb">Ленинградская область</option>
        </Select>
        <Select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="" disabled>Выберите город</option>
          {selectedRegion && cityOptions[selectedRegion] && 
            cityOptions[selectedRegion].map(city => (
              <option key={city.value} value={city.value}>{city.label}</option>
            ))
          }
        </Select>
        <SearchButton onClick={handleSearch}>Искать</SearchButton>
      </SearchRow>
      <MapSection>
        <MapTitle>Карта жилых комплексов Краснодара</MapTitle>
        <MapDescription>
          Нажмите на маркер для получения подробной информации о ЖК. 
          Зеленые маркеры — сданные объекты, синие — строящиеся, серые — планируемые.
        </MapDescription>
        <LeafletMap />
      </MapSection>
      <OffersCarousel selectedRegion={selectedRegion} selectedCity={selectedCity} />
    </Wrapper>
  );
};

export default PopularOffers; 