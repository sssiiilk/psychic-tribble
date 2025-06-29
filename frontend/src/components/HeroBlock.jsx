import styled from 'styled-components';
import bgMain from '../assets/bgMain.png';

const Background = styled.div`
  min-height: 100vh;
  width: 100%;
  min-width: 0;
  background: url(${bgMain}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
`;

const Centered = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 64px;
  font-family: 'Acrom', Arial, sans-serif;
  margin: 0 0 16px 0;
  text-shadow: 0 4px 24px rgba(0,0,0,0.5);
`;

const Subtitle = styled.h2`
  color: #fff;
  font-size: 48px;
  font-family: 'Acrom', Arial, sans-serif;
  margin: 0 0 8px 0;
  text-shadow: 0 4px 24px rgba(0,0,0,0.5);
`;

const Subtitle2 = styled.h3`
  color: #fff;
  font-size: 48px;
  font-family: 'Acrom', Arial, sans-serif;
  margin: 0;
  text-shadow: 0 4px 24px rgba(0,0,0,0.5);
`;

const HeroBlock = () => (
  <Background>
    <Centered>
      <Title>CLICKHOUSE</Title>
      <Subtitle>Честная</Subtitle>
      <Subtitle2>недвижимость</Subtitle2>
    </Centered>
  </Background>
);

export default HeroBlock; 