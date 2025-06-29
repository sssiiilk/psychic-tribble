import styled from 'styled-components';
import { useMemo } from 'react';
import OfferCard from './OfferCard';
import kvImage from '../assets/kv.png';

const CarouselWrapper = styled.div`
  width: 80vw;
  max-width: 1200px;
  margin: 40px auto 0 auto;
  overflow-x: auto;
  padding-bottom: 16px;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 600px) {
    width: 98vw;
    margin: 16px auto 0 auto;
  }
`;

const CardsRow = styled.div`
  display: flex;
  gap: 32px;
  min-width: 320px;

  @media (max-width: 600px) {
    gap: 16px;
  }
`;

const NoResultsMessage = styled.div`
  text-align: center;
  font-family: 'Acrom', Arial, sans-serif;
  font-size: 18px;
  color: #666;
  padding: 40px 20px;
`;

// Расширенные данные предложений с полной информацией для фильтрации
const allOffers = [
  {
    id: 1,
    img: kvImage,
    title: '2-к. квартира',
    price: '15.000.000 Р',
    group: 'GROUP',
    desc: 'ЖК "Новостройки"',
    city: 'г. Краснодар',
    region: 'krasnodar',
    cityCode: 'krasnodar',
    popular: true,
    yearBuilt: 2025,
    pricePerSqm: 120000,
    features: ['Парковка', 'Детская площадка']
  },
  {
    id: 2,
    img: kvImage,
    title: '1-к. квартира',
    price: '8.500.000 Р',
    group: 'GROUP',
    desc: 'ЖК "Лесные Террасы"',
    city: 'г. Краснодар',
    region: 'krasnodar',
    cityCode: 'krasnodar',
    popular: false,
    yearBuilt: 2026,
    pricePerSqm: 110000,
    features: ['Фитнес-центр', 'Консьерж']
  },
  {
    id: 3,
    img: kvImage,
    title: '3-к. квартира',
    price: '22.000.000 Р',
    group: 'GROUP',
    desc: 'ЖК "Морской Бриз"',
    city: 'г. Сочи',
    region: 'krasnodar',
    cityCode: 'sochi',
    popular: true,
    yearBuilt: 2025,
    pricePerSqm: 150000,
    features: ['Бассейн', 'Спа-центр']
  },
  {
    id: 4,
    img: kvImage,
    title: '2-к. квартира',
    price: '18.000.000 Р',
    group: 'GROUP',
    desc: 'ЖК "Центральный"',
    city: 'г. Ростов-на-Дону',
    region: 'rostov',
    cityCode: 'rostov',
    popular: false,
    yearBuilt: 2026,
    pricePerSqm: 130000,
    features: ['Подземная парковка', 'Охрана']
  },
  {
    id: 5,
    img: kvImage,
    title: '4-к. квартира',
    price: '35.000.000 Р',
    group: 'GROUP',
    desc: 'ЖК "Премиум Класс"',
    city: 'г. Москва',
    region: 'moscow',
    cityCode: 'moscow',
    popular: true,
    yearBuilt: 2027,
    pricePerSqm: 200000,
    features: ['Консьерж', 'Панорамные окна']
  },
  {
    id: 6,
    img: kvImage,
    title: '1-к. квартира',
    price: '12.000.000 Р',
    group: 'GROUP',
    desc: 'ЖК "Северная Столица"',
    city: 'г. Санкт-Петербург',
    region: 'spb',
    cityCode: 'spb',
    popular: false,
    yearBuilt: 2025,
    pricePerSqm: 140000,
    features: ['Историческое здание', 'Высокие потолки']
  },
  {
    id: 7,
    img: kvImage,
    title: '2-к. квартира',
    price: '13.500.000 Р',
    group: 'GROUP',
    desc: 'ЖК "Южный Берег"',
    city: 'г. Ставрополь',
    region: 'stavropol',
    cityCode: 'stavropol',
    popular: false,
    yearBuilt: 2026,
    pricePerSqm: 115000,
    features: ['Зеленая зона', 'Детский сад']
  },
  {
    id: 8,
    img: kvImage,
    title: '3-к. квартира',
    price: '16.800.000 Р',
    group: 'GROUP',
    desc: 'ЖК "Астраханский"',
    city: 'г. Астрахань',
    region: 'astrakhan',
    cityCode: 'astrakhan',
    popular: false,
    yearBuilt: 2025,
    pricePerSqm: 105000,
    features: ['Близко к морю', 'Тихий район']
  }
];

const OffersCarousel = ({ selectedRegion, selectedCity }) => {
  // Фильтрация предложений на основе выбранных фильтров
  const filteredOffers = useMemo(() => {
    return allOffers.filter(offer => {
      // Фильтр по региону
      if (selectedRegion && offer.region !== selectedRegion) {
        return false;
      }
      
      // Фильтр по городу
      if (selectedCity && offer.cityCode !== selectedCity) {
        return false;
      }
      
      return true;
    });
  }, [selectedRegion, selectedCity]);

  // Если нет подходящих предложений
  if (filteredOffers.length === 0) {
    return (
      <CarouselWrapper>
        <NoResultsMessage>
          {selectedRegion || selectedCity 
            ? 'По выбранным критериям предложения не найдены' 
            : 'Предложения загружаются...'}
        </NoResultsMessage>
      </CarouselWrapper>
    );
  }

  return (
    <CarouselWrapper>
      <CardsRow>
        {filteredOffers.map((offer) => (
          <OfferCard key={offer.id} {...offer} />
        ))}
      </CardsRow>
    </CarouselWrapper>
  );
};

export default OffersCarousel; 