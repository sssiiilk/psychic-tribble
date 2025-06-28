import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HeaderWrapper = styled.header`
  width: 100%;
  background: rgba(255,255,255,0.98);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0 0 0;
  gap: 10vw;
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0;
    padding: 16px 0 0 0;
    align-items: stretch;
  }
`;

const NavGroup = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 12px;
    width: 100%;
    align-items: stretch;
  }
`;

const NavButton = styled.button`
  background: #9B1743;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 12px 48px;
  font-size: 18px;
  font-family: 'League Spartan', Arial, sans-serif;
  margin-bottom: 20px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #7a1234;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 8px;
    padding: 12px 0;
    font-size: 16px;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Проверяем авторизацию при загрузке компонента
  useEffect(() => {
    checkAuthStatus();
    
    // Слушаем изменения в localStorage
    const handleStorageChange = () => {
      checkAuthStatus();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Также слушаем кастомное событие для изменений авторизации
    window.addEventListener('authStateChange', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('authStateChange', handleStorageChange);
    };
  }, []);

  const checkAuthStatus = () => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setIsAuthenticated(true);
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error('Ошибка парсинга данных пользователя:', error);
        setUser(null);
      }
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const handlePersonalCabinetClick = () => {
    navigate('/developer-dashboard');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/auth');
  };

  const handleLogoutClick = () => {
    // Очищаем localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Обновляем состояние
    setIsAuthenticated(false);
    setUser(null);
    
    // Отправляем событие об изменении состояния авторизации
    window.dispatchEvent(new Event('authStateChange'));
    
    // Перенаправляем на главную страницу
    navigate('/');
  };

  return (
    <HeaderWrapper>
      <NavButton onClick={handleLogoClick}>Логотип</NavButton>
      <NavGroup>
        <NavButton onClick={handlePersonalCabinetClick}>Личный кабинет</NavButton>
        <NavButton>Поиск недвижимости</NavButton>
      </NavGroup>
      {isAuthenticated ? (
        <NavButton onClick={handleLogoutClick}>
          Выход {user?.name && `(${user.name})`}
        </NavButton>
      ) : (
        <NavButton onClick={handleLoginClick}>Войти</NavButton>
      )}
    </HeaderWrapper>
  );
};

export default Header; 