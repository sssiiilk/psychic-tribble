import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  overflow: hidden;
  width: 290px;
  min-width: 260px;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 0 auto;
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1.1/1;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const Content = styled.div`
  padding: 24px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.h3`
  font-size: 2rem;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 700;
  margin: 0 0 8px 0;
`;

const Price = styled.div`
  font-size: 1.3rem;
  font-family: 'Acrom', Arial, sans-serif;
  margin-bottom: 18px;
  letter-spacing: 1px;
`;

const Group = styled.button`
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 2px;
  background: none;
  border: none;
  padding: 0;
  text-align: left;
  color: #9B1743;
  cursor: pointer;
  transition: color 0.2s;
  font-family: 'Acrom', Arial, sans-serif;
  
  &:hover {
    color: #7a1234;
    text-decoration: underline;
  }
`;

const Desc = styled.div`
  font-size: 1.1rem;
  margin-bottom: 2px;
`;

const City = styled.div`
  font-size: 1.1rem;
  margin-bottom: 18px;
`;

const Button = styled.button`
  background: #fff;
  color: #5a7c85;
  border: 2px solid #5a7c85;
  border-radius: 20px;
  padding: 12px 24px;
  font-size: 14px;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 600;
  cursor: pointer;
  margin-top: auto;
  transition: all 0.2s;
  width: 100%;
  
  &:hover {
    background: #5a7c85;
    color: #fff;
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  background: #e6f3e6;
  color: #38646b;
  font-size: 1rem;
  font-family: 'Acrom', Arial, sans-serif;
  border-radius: 16px;
  padding: 4px 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const CardWrapper = styled.div`
  position: relative;
`;

const OfferCard = ({
  img,
  title,
  price,
  group,
  desc,
  city,
  popular
}) => {
  const navigate = useNavigate();

  const handleDeveloperClick = () => {
    // Перенаправляем на профиль застройщика
    navigate('/developer-dashboard', { 
      state: { 
        developerName: group,
        fromOffer: true 
      } 
    });
  };

  const handleDetailsClick = () => {
    // Перенаправляем на страницу деталей квартиры
    // Используем закодированный title как id для маршрута
    const propertyId = encodeURIComponent(title.replace(/\s+/g, '-').toLowerCase());
    navigate(`/property/${propertyId}`, {
      state: {
        title,
        price,
        group,
        desc,
        city,
        img,
        popular
      }
    });
  };

  return (
    <CardWrapper>
      {popular && <Badge>💡 Популярно</Badge>}
      <Card>
        <ImageWrapper>
          <Img src={img} alt={title} />
        </ImageWrapper>
        <Content>
          <Title>{title}</Title>
          <Price>{price}</Price>
          <Group onClick={handleDeveloperClick}>{group}</Group>
          <Desc>{desc}</Desc>
          <City>{city}</City>
          <Button onClick={handleDetailsClick}>Подробнее</Button>
        </Content>
      </Card>
    </CardWrapper>
  );
};

export default OfferCard; 