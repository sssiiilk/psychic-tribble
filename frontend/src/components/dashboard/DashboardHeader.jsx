import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 15px;
  
  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const NavButton = styled.button`
  background: #38646b;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 12px 24px;
  font-size: 14px;
  font-family: 'Acrom', Arial, sans-serif;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;
  
  &:hover {
    background: #27474b;
  }
  
  @media (max-width: 768px) {
    padding: 10px 18px;
    font-size: 13px;
  }
`;

const DashboardHeader = () => (
  <Header>
    <div></div>
    <NavButtons>
      <NavButton>Логотип</NavButton>
      <NavButton>Личный кабинет</NavButton>
      <NavButton>Поиск недвижимости</NavButton>
      <NavButton>Войти</NavButton>
    </NavButtons>
  </Header>
);

export default DashboardHeader; 