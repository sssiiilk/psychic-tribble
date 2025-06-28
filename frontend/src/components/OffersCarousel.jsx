import styled from 'styled-components';
import OfferCard from './OfferCard';

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

// Пример данных (можно заменить на реальные)
const offers = [
  {
    img: 'https://i.imgur.com/8QfQF5F.png',
    title: '2-к. квартира',
    price: '15.000.000 Р',
    group: 'GROUP',
    desc: 'ЖК "Новостройки"',
    city: 'г. Краснодар',
    popular: true
  },
  {
    img: 'https://i.imgur.com/8QfQF5F.png',
    title: '2-к. квартира',
    price: '15.000.000 Р',
    group: 'GROUP',
    desc: 'ЖК "Новостройки"',
    city: 'г. Краснодар',
    popular: false
  },
  {
    img: 'https://i.imgur.com/8QfQF5F.png',
    title: '2-к. квартира',
    price: '15.000.000 Р',
    group: 'GROUP',
    desc: 'ЖК "Новостройки"',
    city: 'г. Краснодар',
    popular: false
  },
  {
    img: 'https://i.imgur.com/8QfQF5F.png',
    title: '2-к. квартира',
    price: '15.000.000 Р',
    group: 'GROUP',
    desc: 'ЖК "Новостройки"',
    city: 'г. Краснодар',
    popular: false
  }
];

const OffersCarousel = () => (
  <CarouselWrapper>
    <CardsRow>
      {offers.map((offer, idx) => (
        <OfferCard key={idx} {...offer} />
      ))}
    </CardsRow>
  </CarouselWrapper>
);

export default OffersCarousel; 