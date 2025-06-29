import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalStyle from '../components/GlobalStyle';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import Footer from '../components/Footer';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSwitchToRegister = () => {
    setIsLogin(false);
  };

  const handleSwitchToLogin = () => {
    setIsLogin(true);
  };

  const handleAuthSuccess = (user) => {
    console.log('Пользователь вошел в систему:', user);
    // Перенаправляем на главную страницу или дашборд
    navigate('/');
  };

  return (
    <>
      <GlobalStyle />
      {isLogin ? (
        <LoginForm 
          onSwitchToRegister={handleSwitchToRegister}
          onLoginSuccess={handleAuthSuccess}
        />
      ) : (
        <RegisterForm 
          onSwitchToLogin={handleSwitchToLogin}
          onRegisterSuccess={handleAuthSuccess}
        />
      )}
      <Footer />
    </>
  );
};

export default AuthPage; 