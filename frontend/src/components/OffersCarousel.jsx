import styled from 'styled-components';
import { useState, useEffect, useMemo } from 'react';
import OfferCard from './OfferCard';
import kvImage from '../assets/kv.png';
import { apiRequest, API_ENDPOINTS } from '../../config/api';

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

const OffersCarousel = ({ selectedRegion, selectedCity }) => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        setLoading(true);
        const response = await apiRequest(API_ENDPOINTS.COMPLEXES);
        
        if (response.success) {
          // Преобразуем данные комплексов в формат для карточек
          const transformedOffers = response.data.slice(0, 8).map((complex, index) => ({
            id: complex.id,
            img: kvImage, // Используем локальное изображение
            title: `${Math.floor(Math.random() * 3) + 1}-к. квартира`, // Случайное количество комнат
            price: complex.price,
            group: complex.developer,
            desc: complex.name,
            city: complex.address,
            region: 'krasnodar', // По умолчанию Краснодарский край
            cityCode: 'krasnodar',
            popular: index < 3, // Первые 3 предложения помечаем как популярные
            yearBuilt: complex.yearBuilt,
            pricePerSqm: Math.floor(Math.random() * 100000) + 80000,
            features: ['Парковка', 'Детская площадка'],
            status: complex.status
          }));
          
          setOffers(transformedOffers);
        } else {
          setError('Ошибка получения данных');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  // Фильтрация предложений на основе выбранных фильтров
  const filteredOffers = useMemo(() => {
    return offers.filter(offer => {
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
  }, [offers, selectedRegion, selectedCity]);

  if (loading) {
    return (
      <CarouselWrapper>
        <LoadingMessage>Загрузка предложений...</LoadingMessage>
      </CarouselWrapper>
    );
  }

  if (error) {
    return (
      <CarouselWrapper>
        <ErrorMessage>Ошибка: {error}</ErrorMessage>
      </CarouselWrapper>
    );
  }

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