import { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #9B1743 0%, #7a1234 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;


const FormWrapper = styled.div`
  background: rgba(255, 255, 255, 0.98);
  padding: 48px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 480px;
  
  @media (max-width: 600px) {
    padding: 32px 24px;
    margin: 0 16px;
  }
`;

const Title = styled.h1`
  color: #9B1743;
  font-size: 32px;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 700;
  text-align: center;
  margin: 0 0 32px 0;
  
  @media (max-width: 600px) {
    font-size: 28px;
    margin-bottom: 24px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: #333;
  font-size: 16px;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 400;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 14px;
  font-family: 'Acrom', Arial, sans-serif;
  transition: border-color 0.2s;
  background: #fff;

  &:focus {
    outline: none;
    border-color: #5a7c85;
  }

  &::placeholder {
    color: #999;
  }
`;

const SubmitButton = styled.button`
  background: #9B1743;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 16px;
  font-size: 18px;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 12px;

  &:hover:not(:disabled) {
    background: #7a1234;
    transform: translateY(-2px);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const LinkText = styled.p`
  text-align: center;
  color: #666;
  font-family: 'Acrom', Arial, sans-serif;
  margin-top: 24px;
`;

const Link = styled.button`
  background: none;
  border: none;
  color: #9B1743;
  font-family: 'Acrom', Arial, sans-serif;
  font-weight: 700;
  cursor: pointer;
  text-decoration: underline;
  
  &:hover {
    color: #7a1234;
  }
`;

const ErrorMessage = styled.div`
  background: #ffe6e6;
  color: #d32f2f;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #ffcdd2;
  font-family: 'Acrom', Arial, sans-serif;
  margin-bottom: 16px;
`;

const SuccessMessage = styled.div`
  background: #e8f5e8;
  color: #2e7d32;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #c8e6c9;
  font-family: 'Acrom', Arial, sans-serif;
  margin-bottom: 16px;
`;

const LoginForm = ({ onSwitchToRegister, onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const data = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).then(response => response.json());

      if (data.success) {
        setSuccess(data.message);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        
        window.dispatchEvent(new Event('authStateChange'));
        
        setTimeout(() => {
          onLoginSuccess(data.user);
        }, 1000);
      } else {
        setError(data.message || 'Произошла ошибка при входе');
      }
    } catch (error) {
      setError('Ошибка соединения с сервером');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormContainer>
      <FormWrapper>
        <Title>Вход в CLICKHOUSE</Title>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
        
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Введите ваш email"
              required
            />
          </InputGroup>

          <InputGroup>
            <Label>Пароль</Label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Введите ваш пароль"
              required
            />
          </InputGroup>

          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? 'Выполняется вход...' : 'Войти'}
          </SubmitButton>
        </Form>

        <LinkText>
          Нет аккаунта?{' '}
          <Link type="button" onClick={onSwitchToRegister}>
            Зарегистрироваться
          </Link>
        </LinkText>
      </FormWrapper>
    </FormContainer>
  );
};

export default LoginForm; 