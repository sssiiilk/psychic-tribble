import styled from 'styled-components';

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
  font-family: 'League Spartan', Arial, sans-serif;
  font-weight: 700;
  margin: 0 0 8px 0;
`;

const Price = styled.div`
  font-size: 1.3rem;
  font-family: 'League Spartan', Arial, sans-serif;
  margin-bottom: 18px;
  letter-spacing: 1px;
`;

const Group = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 2px;
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
  background: #38646b;
  color: #fff;
  border: none;
  border-radius: 16px;
  padding: 12px 0;
  font-size: 1.1rem;
  font-family: 'League Spartan', Arial, sans-serif;
  cursor: pointer;
  margin-top: auto;
  transition: background 0.2s;
  width: 100%;
  &:hover {
    background: #27474b;
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  background: #e6f3e6;
  color: #38646b;
  font-size: 1rem;
  font-family: 'League Spartan', Arial, sans-serif;
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
}) => (
  <CardWrapper>
    {popular && <Badge>💡 Популярно</Badge>}
    <Card>
      <ImageWrapper>
        <Img src={img} alt={title} />
      </ImageWrapper>
      <Content>
        <Title>{title}</Title>
        <Price>{price}</Price>
        <Group>{group}</Group>
        <Desc>{desc}</Desc>
        <City>{city}</City>
        <Button>Подробнее</Button>
      </Content>
    </Card>
  </CardWrapper>
);

export default OfferCard; 