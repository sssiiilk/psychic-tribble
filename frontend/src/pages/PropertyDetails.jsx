import styled from 'styled-components';
import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import GlobalStyle from '../components/GlobalStyle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import zhkImg from '../assets/zhkImg.png';

const Container = styled.div`
  width: 60%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 95%;
    margin: 20px auto;
  }
`;

const HeroSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const BackButton = styled.button`
  background: #38646b;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 12px 24px;
  font-size: 16px;
  font-family: 'Acrom', Arial, sans-serif;
  cursor: pointer;
  margin-bottom: 30px;
  transition: background 0.2s;
  
  &:hover {
    background: #27474b;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: #333;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const MainImage = styled.img`
  width: 100%;
  aspect-ratio: 1.1 / 1;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    aspect-ratio: 1 / 1;
  }
`;

const InfoSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const InfoBlock = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 1px solid #e0e0e0;
`;

const InfoTitle = styled.h3`
  font-size: 16px;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: #666;
`;

const InfoText = styled.p`
  font-size: 18px;
  line-height: 1.4;
  margin: 6px 0;
  color: #333;
  font-weight: 600;
`;

const BadgeContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const Badge = styled.span`
  background: #4ade80;
  color: #065f46;
  font-size: 14px;
  font-family: 'Acrom', Arial, sans-serif;
  border-radius: 20px;
  padding: 8px 16px;
  font-weight: 500;
  display: inline-block;
  white-space: nowrap;
`;

const StatsTable = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

const StatsBlock = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 1px solid #e0e0e0;
  text-align: left;
`;

const StatsHeader = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #666;
  margin-bottom: 8px;
  font-family: 'Acrom', Arial, sans-serif;
`;

const StatsValue = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  font-family: 'Acrom', Arial, sans-serif;
`;

const DeveloperInfoSection = styled.div`
  margin: 40px 0 60px 0;
`;

const DeveloperInfoTitle = styled.h2`
  font-size: 32px;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 700;
  color: #333;
  margin: 0 0 40px 0;
`;

const DeveloperInfoBlocks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const DeveloperInfoBlock = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 1px solid #e0e0e0;
`;

const DeveloperBlockTitle = styled.h3`
  font-size: 18px;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 600;
  color: #666;
  margin: 0 0 25px 0;
`;

const DeveloperInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const DeveloperInfoLabel = styled.div`
  font-size: 16px;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 400;
  color: #333;
`;

const DeveloperInfoValue = styled.div`
  font-size: 16px;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 600;
  color: #333;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: #e0e0e0;
  }
`;

const MapSection = styled.div`
  margin: 60px 0 0 0;
`;

const MapTitle = styled.h2`
  font-size: 32px;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 700;
  color: #333;
  margin: 0 0 30px 0;
`;

const MapContainer = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const MapImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
`;

const ApartmentsSection = styled.div`
  background: #5a7c85;
  padding: 60px 0;
  margin-top: 40px;
`;

const ApartmentsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ApartmentsTitle = styled.h2`
  font-size: 36px;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin-bottom: 40px;
`;

const FiltersRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FilterSelect = styled.select`
  background: #fff;
  border: none;
  border-radius: 25px;
  padding: 15px 20px;
  font-size: 16px;
  font-family: 'Acrom', Arial, sans-serif;
  color: #333;
  cursor: pointer;
  appearance: none;
  
  &:focus {
    outline: none;
  }
`;

const RangeFiltersRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const RangeBlock = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 25px;
`;

const RangeTitle = styled.h3`
  font-size: 18px;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 600;
  color: #333;
  margin: 0 0 20px 0;
`;

const RangeInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`;

const RangeInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const RangeLabel = styled.label`
  font-size: 14px;
  font-family: 'Acrom', Arial, sans-serif;
  color: #666;
`;

const RangeInputField = styled.input`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 14px;
  font-family: 'Acrom', Arial, sans-serif;
  
  &:focus {
    outline: none;
    border-color: #5a7c85;
  }
`;

const RoomsBlock = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 25px;
`;

const RoomsTitle = styled.h3`
  font-size: 18px;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 600;
  color: #333;
  margin: 0 0 20px 0;
`;

const RoomsButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const RoomButton = styled.button`
  background: ${props => props.active ? '#5a7c85' : '#f5f5f5'};
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  font-family: 'Acrom', Arial, sans-serif;
  color: ${props => props.active ? '#fff' : '#666'};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #5a7c85;
    color: #fff;
  }
`;

const ApartmentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ApartmentCard = styled.div`
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
`;

const ApartmentPlan = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ApartmentInfo = styled.div`
  padding: 20px;
`;

const ApartmentTitle = styled.h3`
  font-size: 18px;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 700;
  color: #333;
  margin: 0 0 10px 0;
`;

const ApartmentPrice = styled.div`
  font-size: 20px;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
`;

const ApartmentGroup = styled.div`
  font-size: 14px;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 600;
  color: #666;
  margin-bottom: 5px;
`;

const ApartmentComplex = styled.div`
  font-size: 14px;
  font-family: 'Acrom', Arial, sans-serif;
  color: #666;
  margin-bottom: 5px;
`;

const ApartmentLocation = styled.div`
  font-size: 14px;
  font-family: 'Acrom', Arial, sans-serif;
  color: #666;
  margin-bottom: 20px;
`;

const ApartmentButton = styled.button`
  background: #fff;
  color: #5a7c85;
  border: 2px solid #5a7c85;
  border-radius: 20px;
  padding: 12px 24px;
  font-size: 14px;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s;
  
  &:hover {
    background: #5a7c85;
    color: #fff;
  }
`;

// Расширенные данные о квартирах в ЖК с полной информацией для фильтрации
const allApartmentsList = [
  {
    id: 1,
    title: '1-к. квартира',
    price: '8.500.000 ₽',
    priceNum: 8500000,
    complex: 'ЖК "Новостройки"',
    location: 'г. Краснодар',
    planImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
    rooms: 1,
    area: 42,
    floor: 3,
    yearBuilt: 2025,
    type: 'Квартира',
    finishing: 'Без отделки',
    floorRange: '1-5'
  },
  {
    id: 2,
    title: '2-к. квартира',
    price: '15.000.000 ₽',
    priceNum: 15000000,
    complex: 'ЖК "Новостройки"',
    location: 'г. Краснодар',
    planImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop&crop=center',
    rooms: 2,
    area: 68,
    floor: 7,
    yearBuilt: 2025,
    type: 'Квартира',
    finishing: 'Черновая',
    floorRange: '6-10'
  },
  {
    id: 3,
    title: '3-к. квартира',
    price: '22.000.000 ₽',
    priceNum: 22000000,
    complex: 'ЖК "Новостройки"',
    location: 'г. Краснодар',
    planImage: 'https://images.unsplash.com/photo-1560440021-33f9b867899d?w=300&h=200&fit=crop&crop=center',
    rooms: 3,
    area: 89,
    floor: 12,
    yearBuilt: 2026,
    type: 'Квартира',
    finishing: 'Чистовая',
    floorRange: '11+'
  },
  {
    id: 4,
    title: 'Студия',
    price: '6.500.000 ₽',
    priceNum: 6500000,
    complex: 'ЖК "Новостройки"',
    location: 'г. Краснодар',
    planImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
    rooms: 0,
    area: 28,
    floor: 2,
    yearBuilt: 2024,
    type: 'Студия',
    finishing: 'Без отделки',
    floorRange: '1-5'
  },
  {
    id: 5,
    title: '4-к. квартира',
    price: '32.000.000 ₽',
    priceNum: 32000000,
    complex: 'ЖК "Новостройки"',
    location: 'г. Краснодар',
    planImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300&h=200&fit=crop&crop=center',
    rooms: 4,
    area: 115,
    floor: 15,
    yearBuilt: 2026,
    type: 'Квартира',
    finishing: 'Чистовая',
    floorRange: '11+'
  },
  {
    id: 6,
    title: 'Пентхаус',
    price: '45.000.000 ₽',
    priceNum: 45000000,
    complex: 'ЖК "Новостройки"',
    location: 'г. Краснодар',
    planImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=200&fit=crop&crop=center',
    rooms: 5,
    area: 150,
    floor: 20,
    yearBuilt: 2025,
    type: 'Пентхаус',
    finishing: 'Чистовая',
    floorRange: '11+'
  }
];

// Данные о ЖК (в реальном проекте будут приходить с сервера)
const propertyData = {
  1: {
    title: 'ЖК "ЖИЛОЙ КОМПЛЕКС"',
    price: '180 000 руб.',
    image: zhkImg,
    developer: 'ООО "Застройщик"',
    experience: '15+ лет на рынке',
    location: 'Краснодар, улица. Ленина, д. 10',
    mapLink: 'Посмотреть на карте',
    rating: '4.5',
    apartmentType: '"Жилой комплекс"',
    district: 'Спальный',
    housesBuilt: '7 домов',
    housesInProgress: '6 домов',
    pricePerSqm: '180 000 руб.',
    totalApartments: '34',
    description: `ClickHouse- это твой помощник в выборе недвижимости! 
    На основе искусственного интеллекта и твоих предпочтении мы предложили наилучшую недвижимость 
    для тебя и твоей семьи, проанализировав спрос, популярность, цену, местоположение, инфраструктуру 
    и множество других показателей.`
  }
};

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = propertyData[id] || propertyData[1];

  // Состояние для фильтров квартир
  const [yearFilter, setYearFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [finishingFilter, setFinishingFilter] = useState('');
  const [floorFilter, setFloorFilter] = useState('');
  const [minArea, setMinArea] = useState('');
  const [maxArea, setMaxArea] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedRooms, setSelectedRooms] = useState(new Set());

  const handleBack = () => {
    navigate('/');
  };

  const toggleRoom = (roomCount) => {
    const newSelectedRooms = new Set(selectedRooms);
    if (newSelectedRooms.has(roomCount)) {
      newSelectedRooms.delete(roomCount);
    } else {
      newSelectedRooms.add(roomCount);
    }
    setSelectedRooms(newSelectedRooms);
  };

  // Фильтрация квартир
  const filteredApartments = useMemo(() => {
    return allApartmentsList.filter(apartment => {
      // Фильтр по году сдачи
      if (yearFilter && apartment.yearBuilt.toString() !== yearFilter) {
        return false;
      }
      
      // Фильтр по типу жилья
      if (typeFilter && apartment.type !== typeFilter) {
        return false;
      }
      
      // Фильтр по типу отделки
      if (finishingFilter && apartment.finishing !== finishingFilter) {
        return false;
      }
      
      // Фильтр по этажности
      if (floorFilter && apartment.floorRange !== floorFilter) {
        return false;
      }
      
      // Фильтр по площади
      if (minArea && apartment.area < parseInt(minArea)) {
        return false;
      }
      if (maxArea && apartment.area > parseInt(maxArea)) {
        return false;
      }
      
      // Фильтр по цене
      if (minPrice && apartment.priceNum < parseInt(minPrice.replace(/\s/g, ''))) {
        return false;
      }
      if (maxPrice && apartment.priceNum > parseInt(maxPrice.replace(/\s/g, ''))) {
        return false;
      }
      
      // Фильтр по количеству комнат
      if (selectedRooms.size > 0) {
        const roomsToCheck = apartment.rooms === 0 ? 'studio' : apartment.rooms;
        const hasMatch = Array.from(selectedRooms).some(selectedRoom => {
          if (selectedRoom === 'studio' && apartment.rooms === 0) return true;
          if (selectedRoom === '5+' && apartment.rooms >= 5) return true;
          return selectedRoom === apartment.rooms;
        });
        if (!hasMatch) {
          return false;
        }
      }
      
      return true;
    });
  }, [yearFilter, typeFilter, finishingFilter, floorFilter, minArea, maxArea, minPrice, maxPrice, selectedRooms]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <BackButton onClick={handleBack}>← Назад к объявлениям</BackButton>
        
        <Title>{property.title}</Title>
        <BadgeContainer>
          <Badge>🏢 Жилой комплекс участника Ассоциации застройщиков</Badge>
          <Badge>⭐ Рейтинг EP3 - {property.rating}</Badge>
        </BadgeContainer>

        <HeroSection>
          <LeftContent>
            <InfoText style={{fontSize: '16px', lineHeight: '1.6'}}>
              {property.description}
            </InfoText>
          </LeftContent>
          <RightContent>
            <MainImage src={property.image} alt={property.title} />
          </RightContent>
        </HeroSection>

        <InfoSection>
          <InfoBlock>
            <InfoTitle>Застройщик</InfoTitle>
            <InfoText><strong>{property.developer}</strong></InfoText>
            <InfoText style={{color: '#e74c3c', fontSize: '16px', fontWeight: '500'}}>{property.experience}</InfoText>
          </InfoBlock>

          <InfoBlock>
            <InfoTitle>Месторасположение</InfoTitle>
            <InfoText><strong>{property.location}</strong></InfoText>
            <InfoText style={{color: '#e74c3c', cursor: 'pointer', fontSize: '16px', fontWeight: '500'}}>{property.mapLink}</InfoText>
          </InfoBlock>

          <InfoBlock>
            <InfoTitle>Месторасположение</InfoTitle>
            <InfoText><strong>{property.location}</strong></InfoText>
            <InfoText style={{color: '#e74c3c', cursor: 'pointer', fontSize: '16px', fontWeight: '500'}}>{property.mapLink}</InfoText>
          </InfoBlock>
        </InfoSection>

        <StatsTable>
          <StatsBlock>
            <StatsHeader>Сдано</StatsHeader>
            <StatsValue>{property.housesBuilt}</StatsValue>
          </StatsBlock>
          <StatsBlock>
            <StatsHeader>На этапе строительства</StatsHeader>
            <StatsValue>{property.housesInProgress}</StatsValue>
          </StatsBlock>
          <StatsBlock>
            <StatsHeader>Цена за кв.м.</StatsHeader>
            <StatsValue>{property.pricePerSqm}</StatsValue>
          </StatsBlock>
          <StatsBlock>
            <StatsHeader>Продано квартир</StatsHeader>
            <StatsValue>{property.totalApartments}</StatsValue>
          </StatsBlock>
          <StatsBlock>
            <StatsHeader>Жилой комплекс</StatsHeader>
            <StatsValue>{property.apartmentType}</StatsValue>
          </StatsBlock>
          <StatsBlock>
            <StatsHeader>Тип района</StatsHeader>
            <StatsValue>{property.district}</StatsValue>
          </StatsBlock>
        </StatsTable>

      </Container>
      
      <ApartmentsSection>
        <ApartmentsContainer>
          <ApartmentsTitle>Квартиры в этом ЖК</ApartmentsTitle>
          
          <FiltersRow>
            <FilterSelect value={yearFilter} onChange={(e) => setYearFilter(e.target.value)}>
              <option value="">Срок сдачи</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </FilterSelect>
            <FilterSelect value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
              <option value="">Тип жилья</option>
              <option value="Квартира">Квартира</option>
              <option value="Студия">Студия</option>
              <option value="Пентхаус">Пентхаус</option>
            </FilterSelect>
            <FilterSelect value={finishingFilter} onChange={(e) => setFinishingFilter(e.target.value)}>
              <option value="">Тип отделки</option>
              <option value="Без отделки">Без отделки</option>
              <option value="Черновая">Черновая</option>
              <option value="Чистовая">Чистовая</option>
            </FilterSelect>
            <FilterSelect value={floorFilter} onChange={(e) => setFloorFilter(e.target.value)}>
              <option value="">Этаж</option>
              <option value="1-5">1-5</option>
              <option value="6-10">6-10</option>
              <option value="11+">11+</option>
            </FilterSelect>
          </FiltersRow>

          <RangeFiltersRow>
            <RangeBlock>
              <RangeTitle>Общая площадь</RangeTitle>
              <RangeInputs>
                <RangeInput>
                  <RangeLabel>От</RangeLabel>
                  <RangeInputField 
                    placeholder="кв.м" 
                    value={minArea}
                    onChange={(e) => setMinArea(e.target.value)}
                  />
                </RangeInput>
                <RangeInput>
                  <RangeLabel>До</RangeLabel>
                  <RangeInputField 
                    placeholder="кв.м" 
                    value={maxArea}
                    onChange={(e) => setMaxArea(e.target.value)}
                  />
                </RangeInput>
              </RangeInputs>
            </RangeBlock>

            <RangeBlock>
              <RangeTitle>Ценовой сегмент</RangeTitle>
              <RangeInputs>
                <RangeInput>
                  <RangeLabel>От</RangeLabel>
                  <RangeInputField 
                    placeholder="руб" 
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                </RangeInput>
                <RangeInput>
                  <RangeLabel>До</RangeLabel>
                  <RangeInputField 
                    placeholder="руб" 
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </RangeInput>
              </RangeInputs>
            </RangeBlock>

            <RoomsBlock>
              <RoomsTitle>Комнаты</RoomsTitle>
              <RoomsButtons>
                <RoomButton 
                  active={selectedRooms.has('studio')}
                  onClick={() => toggleRoom('studio')}
                >
                  Студия
                </RoomButton>
                <RoomButton 
                  active={selectedRooms.has(1)}
                  onClick={() => toggleRoom(1)}
                >
                  1 к.
                </RoomButton>
                <RoomButton 
                  active={selectedRooms.has(2)}
                  onClick={() => toggleRoom(2)}
                >
                  2 к.
                </RoomButton>
                <RoomButton 
                  active={selectedRooms.has(3)}
                  onClick={() => toggleRoom(3)}
                >
                  3 к.
                </RoomButton>
                <RoomButton 
                  active={selectedRooms.has(4)}
                  onClick={() => toggleRoom(4)}
                >
                  4 к.
                </RoomButton>
                <RoomButton 
                  active={selectedRooms.has('5+')}
                  onClick={() => toggleRoom('5+')}
                >
                  5+ к.
                </RoomButton>
              </RoomsButtons>
            </RoomsBlock>
          </RangeFiltersRow>

          <div style={{
            marginBottom: '30px',
            fontSize: '18px',
            color: '#333',
            fontFamily: 'Acrom, Arial, sans-serif',
            textAlign: 'center'
          }}>
            Найдено квартир: {filteredApartments.length}
          </div>

          <ApartmentsGrid>
            {filteredApartments.length === 0 ? (
              <div style={{ 
                gridColumn: '1 / -1',
                textAlign: 'center', 
                padding: '60px 20px',
                fontSize: '18px',
                color: '#666',
                fontFamily: 'Acrom, Arial, sans-serif'
              }}>
                По выбранным критериям квартиры не найдены. Попробуйте изменить фильтры.
              </div>
            ) : (
              filteredApartments.map((apartment) => (
                <ApartmentCard key={apartment.id}>
                <ApartmentPlan src={apartment.planImage} alt={`План ${apartment.title}`} />
                <ApartmentInfo>
                  <ApartmentTitle>{apartment.title}</ApartmentTitle>
                  <ApartmentPrice>{apartment.price}</ApartmentPrice>
                  <ApartmentGroup>GROUP</ApartmentGroup>
                  <ApartmentComplex>{apartment.complex}</ApartmentComplex>
                  <ApartmentLocation>{apartment.location}</ApartmentLocation>
                  <ApartmentButton>Подробнее</ApartmentButton>
                </ApartmentInfo>
              </ApartmentCard>
              ))
            )}
          </ApartmentsGrid>
        </ApartmentsContainer>
      </ApartmentsSection>
      
      <Container>
        <DeveloperInfoSection>
          <DeveloperInfoTitle>Информация о застройщике</DeveloperInfoTitle>
          <DeveloperInfoBlocks>
            <DeveloperInfoBlock>
              <DeveloperBlockTitle>Общие данные</DeveloperBlockTitle>
              <DeveloperInfoRow>
                <DeveloperInfoLabel>Название компании</DeveloperInfoLabel>
                <DeveloperInfoValue>"СтройГрад"</DeveloperInfoValue>
              </DeveloperInfoRow>
              <DeveloperInfoRow>
                <DeveloperInfoLabel>Дата регистрации</DeveloperInfoLabel>
                <DeveloperInfoValue>21.01.2021</DeveloperInfoValue>
              </DeveloperInfoRow>
              <DeveloperInfoRow>
                <DeveloperInfoLabel>Количество сделок</DeveloperInfoLabel>
                <DeveloperInfoValue>10</DeveloperInfoValue>
              </DeveloperInfoRow>
              <DeveloperInfoRow>
                <DeveloperInfoLabel>Рейтинг EP3</DeveloperInfoLabel>
                <DeveloperInfoValue>4,5</DeveloperInfoValue>
              </DeveloperInfoRow>
            </DeveloperInfoBlock>

            <DeveloperInfoBlock>
              <DeveloperBlockTitle>Контактные данные</DeveloperBlockTitle>
              <DeveloperInfoRow>
                <DeveloperInfoLabel>Контактный номер</DeveloperInfoLabel>
                <DeveloperInfoValue>8999 999 99 99</DeveloperInfoValue>
              </DeveloperInfoRow>
              <DeveloperInfoRow>
                <DeveloperInfoLabel>Электронная почта</DeveloperInfoLabel>
                <DeveloperInfoValue>ppp@gmail.com</DeveloperInfoValue>
              </DeveloperInfoRow>
              <SocialIcons>
                <SocialIcon>📱</SocialIcon>
                <SocialIcon>📘</SocialIcon>
                <SocialIcon>📷</SocialIcon>
              </SocialIcons>
            </DeveloperInfoBlock>
          </DeveloperInfoBlocks>
        </DeveloperInfoSection>

        <MapSection>
          <MapTitle>Смотреть расположение на карте</MapTitle>
          <MapContainer>
            <MapImage src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop&crop=center" alt="Карта расположения" />
          </MapContainer>
        </MapSection>
      </Container>
      <Footer />
    </>
  );
};

export default PropertyDetails; 