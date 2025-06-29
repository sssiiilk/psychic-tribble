import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
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

const Title = styled.h1`
  font-size: 2.5rem;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
`;

const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const Sidebar = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 30px;
  height: fit-content;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const FiltersRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
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
  
  &:focus {
    outline: none;
  }
`;

const SearchInput = styled.input`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px 12px;
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

const SearchButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: #666;
  
  &:hover {
    color: #38646b;
  }
`;

const SearchInputContainer = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

const FilterSection = styled.div`
  margin-bottom: 30px;
`;

const FilterTitle = styled.h3`
  font-size: 1.1rem;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FilterOption = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  color: #555;
  cursor: pointer;
  
  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`;

const PriceInput = styled.input`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 14px;
  font-family: 'Acrom', Arial, sans-serif;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: #5a7c85;
  }
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PropertyCard = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0,0,0,0.12);
  }
`;

const PropertyImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

const PropertyImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('${props => props.backgroundImage}');
  background-size: cover;
  background-position: center;
`;

const PropertyInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PropertyTitle = styled.h3`
  font-size: 1.2rem;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 700;
  color: #333;
  margin: 0;
`;

const PropertyDeveloper = styled.div`
  color: #999;
  font-size: 0.9rem;
  font-family: 'Acrom', Arial, sans-serif;
  margin: 0;
`;

const PropertyLocation = styled.div`
  color: #999;
  font-size: 0.9rem;
  font-family: 'Acrom', Arial, sans-serif;
  margin: 0;
  line-height: 1.4;
`;

const PropertyPrice = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #333;
  font-family: 'Acrom', Arial, sans-serif;
  margin: 8px 0 4px 0;
`;

const PropertyType = styled.div`
  color: #999;
  font-size: 0.9rem;
  font-family: 'Acrom', Arial, sans-serif;
  margin: 0 0 16px 0;
`;

const FavoriteButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 1.2rem;
  transition: all 0.2s;
  
  &:hover {
    background: rgba(255, 255, 255, 1);
    color: #e74c3c;
  }
  
  &.active {
    color: #e74c3c;
    background: rgba(255, 255, 255, 1);
  }
`;

const DetailsButton = styled.button`
  background: #6b8d95;
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 12px 24px;
  font-size: 0.95rem;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  
  &:hover {
    background: #5a7c85;
    transform: translateY(-1px);
  }
`;

const SaveButton = styled.button`
  background: #6b8d95;
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 12px 24px;
  font-size: 0.95rem;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  margin-top: 20px;
  
  &:hover {
    background: #5a7c85;
    transform: translateY(-1px);
  }
`;

const allProperties = [
  {
    id: 1,
    title: 'ЖК "Жилой комплекс"',
    developer: 'ООО "Застройщик"',
    location: 'Краснодарский край\nг. Краснодар',
    price: '180 000 ₽',
    pricePerSqm: 180000,
    type: 'квартира',
    region: 'krasnodar',
    city: 'krasnodar',
    yearBuilt: 2025,
    features: ['metro', 'school'],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    title: 'ЖК "Вектор Жизни"',
    developer: 'ООО "Застройщик"',
    location: 'Краснодарский край\nг. Краснодар',
    price: '180 000 ₽',
    pricePerSqm: 180000,
    type: 'квартира',
    region: 'krasnodar',
    city: 'krasnodar',
    yearBuilt: 2026,
    features: ['park'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    title: 'ЖК "Лесные Террасы"',
    developer: 'ООО "ГеоСтрой"',
    location: 'Краснодарский край\nг. Сочи',
    price: '220 000 ₽',
    pricePerSqm: 220000,
    type: 'квартира',
    region: 'krasnodar',
    city: 'sochi',
    yearBuilt: 2027,
    features: ['park', 'school'],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 4,
    title: 'ЖК "Московские высоты"',
    developer: 'ООО "МосСтрой"',
    location: 'Московская область\nг. Москва',
    price: '320 000 ₽',
    pricePerSqm: 320000,
    type: 'квартира',
    region: 'moscow',
    city: 'moscow',
    yearBuilt: 2025,
    features: ['metro'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 5,
    title: 'Коттеджный поселок "Дубрава"',
    developer: 'ООО "Домстрой"',
    location: 'Ленинградская область\nг. Санкт-Петербург',
    price: '150 000 ₽',
    pricePerSqm: 150000,
    type: 'дом',
    region: 'spb',
    city: 'spb',
    yearBuilt: 2026,
    features: ['park'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }
];

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedExtra, setSelectedExtra] = useState('');
  const [propertyType, setPropertyType] = useState({ apartments: true, houses: false });
  const [yearFilter, setYearFilter] = useState({ y2025: true, y2026: true, y2027: true });
  const [maxPrice, setMaxPrice] = useState('');
  const [favorites, setFavorites] = useState(new Set());
  const navigate = useNavigate();

  // Очищаем выбранный город при смене региона
  useEffect(() => {
    setSelectedCity('');
  }, [selectedRegion]);

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const handleDetailsClick = (property) => {
    navigate(`/property-details/${property.id}`);
  };

  const handleSaveFilters = () => {
    const filters = {
      propertyType,
      yearFilter,
      maxPrice,
      selectedRegion,
      selectedCity,
      selectedExtra,
      searchQuery
    };
    
    // Сохраняем фильтры в localStorage
    localStorage.setItem('savedFilters', JSON.stringify(filters));
    
    // Показываем уведомление пользователю
    alert('Фильтры сохранены!');
  };

  // Фильтрация недвижимости
  const filteredProperties = useMemo(() => {
    return allProperties.filter(property => {
      // Фильтр по региону
      if (selectedRegion && property.region !== selectedRegion) {
        return false;
      }
      
      // Фильтр по городу
      if (selectedCity && property.city !== selectedCity) {
        return false;
      }
      
      // Фильтр по дополнительным критериям
      if (selectedExtra && !property.features.includes(selectedExtra)) {
        return false;
      }
      
      // Фильтр по типу объектов
      if (!propertyType.apartments && property.type === 'квартира') {
        return false;
      }
      if (!propertyType.houses && property.type === 'дом') {
        return false;
      }
      
      // Фильтр по году сдачи
      const yearMatch = (yearFilter.y2025 && property.yearBuilt === 2025) ||
                       (yearFilter.y2026 && property.yearBuilt === 2026) ||
                       (yearFilter.y2027 && property.yearBuilt === 2027);
      if (!yearMatch) {
        return false;
      }
      
      // Фильтр по максимальной цене
      if (maxPrice) {
        const maxPriceNum = parseInt(maxPrice.replace(/\s/g, ''));
        if (property.pricePerSqm > maxPriceNum) {
          return false;
        }
      }
      
      // Фильтр по поисковому запросу
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const searchableText = `${property.title} ${property.developer} ${property.location}`.toLowerCase();
        if (!searchableText.includes(query)) {
          return false;
        }
      }
      
      return true;
    });
  }, [selectedRegion, selectedCity, selectedExtra, propertyType, yearFilter, maxPrice, searchQuery]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Content>
          <Title>Поиск жилого комплекса</Title>
          
          <SearchContainer>
            <Sidebar>
              <FilterSection>
                <FilterTitle>Тип объектов</FilterTitle>
                <FilterGroup>
                  <FilterOption>
                    <input 
                      type="checkbox" 
                      checked={propertyType.apartments}
                      onChange={(e) => setPropertyType({...propertyType, apartments: e.target.checked})}
                    />
                    Квартиры
                  </FilterOption>
                  <FilterOption>
                    <input 
                      type="checkbox" 
                      checked={propertyType.houses}
                      onChange={(e) => setPropertyType({...propertyType, houses: e.target.checked})}
                    />
                    Дома
                  </FilterOption>
                </FilterGroup>
              </FilterSection>

              <FilterSection>
                <FilterTitle>Год сдачи</FilterTitle>
                <FilterGroup>
                  <FilterOption>
                    <input 
                      type="checkbox" 
                      checked={yearFilter.y2025}
                      onChange={(e) => setYearFilter({...yearFilter, y2025: e.target.checked})}
                    />
                    2025
                  </FilterOption>
                  <FilterOption>
                    <input 
                      type="checkbox" 
                      checked={yearFilter.y2026}
                      onChange={(e) => setYearFilter({...yearFilter, y2026: e.target.checked})}
                    />
                    2026
                  </FilterOption>
                  <FilterOption>
                    <input 
                      type="checkbox" 
                      checked={yearFilter.y2027}
                      onChange={(e) => setYearFilter({...yearFilter, y2027: e.target.checked})}
                    />
                    2027
                  </FilterOption>
                </FilterGroup>
              </FilterSection>

              <FilterSection>
                <FilterTitle>Цена за кв.м</FilterTitle>
                <div>
                  <div style={{ marginBottom: '8px', fontSize: '0.9rem', color: '#666' }}>Не более</div>
                  <PriceInput 
                    type="text" 
                    placeholder="₽"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
              </FilterSection>
              
              <SaveButton onClick={handleSaveFilters}>
                Сохранить
              </SaveButton>
            </Sidebar>

            <MainContent>
              <div>
                <FiltersRow>
                  <Select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
                    <option value="">Выберите регион</option>
                    <option value="krasnodar">Краснодарский край</option>
                    <option value="moscow">Московская область</option>
                    <option value="spb">Ленинградская область</option>
                  </Select>
                  <Select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                    <option value="">Выберите город</option>
                    {selectedRegion === 'krasnodar' && (
                      <>
                        <option value="krasnodar">Краснодар</option>
                        <option value="sochi">Сочи</option>
                        <option value="anapa">Анапа</option>
                      </>
                    )}
                    {selectedRegion === 'moscow' && (
                      <option value="moscow">Москва</option>
                    )}
                    {selectedRegion === 'spb' && (
                      <option value="spb">Санкт-Петербург</option>
                    )}
                  </Select>
                  <Select value={selectedExtra} onChange={(e) => setSelectedExtra(e.target.value)}>
                    <option value="">Выберите ещё</option>
                    <option value="metro">Рядом с метро</option>
                    <option value="park">Рядом с парком</option>
                    <option value="school">Рядом со школой</option>
                  </Select>
                </FiltersRow>

                <SearchInputContainer>
                  <SearchInput 
                    type="text" 
                    placeholder='Например "Хочу квартиру в жк с детским садом, школой и фитнесом. Центральный район"'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <SearchButton>🔍</SearchButton>
                </SearchInputContainer>
              </div>

              <div style={{
                marginBottom: '20px',
                fontSize: '16px',
                color: '#666',
                fontFamily: 'Acrom, Arial, sans-serif'
              }}>
                Найдено результатов: {filteredProperties.length}
              </div>

              {filteredProperties.length === 0 ? (
                <div style={{ 
                  textAlign: 'center', 
                  padding: '60px 20px',
                  fontSize: '18px',
                  color: '#666',
                  fontFamily: 'Acrom, Arial, sans-serif'
                }}>
                  По вашим критериям ничего не найдено. Попробуйте изменить фильтры.
                </div>
              ) : (
                <ResultsGrid>
                  {filteredProperties.map(property => (
                  <PropertyCard key={property.id}>
                    <PropertyImageContainer>
                      <PropertyImage backgroundImage={property.image} />
                      <FavoriteButton 
                        className={favorites.has(property.id) ? 'active' : ''}
                        onClick={() => toggleFavorite(property.id)}
                      >
                        ♥
                      </FavoriteButton>
                    </PropertyImageContainer>
                    <PropertyInfo>
                      <PropertyTitle>{property.title}</PropertyTitle>
                      <PropertyDeveloper>{property.developer}</PropertyDeveloper>
                      <PropertyLocation>
                        {property.location.split('\n').map((line, index) => (
                          <div key={index}>{line}</div>
                        ))}
                      </PropertyLocation>
                      <PropertyPrice>Цена за кв.м. {property.price}</PropertyPrice>
                      <PropertyType>Тип объектов ЖК {property.type}</PropertyType>
                      <DetailsButton onClick={() => handleDetailsClick(property)}>Подробнее</DetailsButton>
                    </PropertyInfo>
                  </PropertyCard>
                ))}
                </ResultsGrid>
              )}
            </MainContent>
          </SearchContainer>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default SearchPage; 