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

const RegisterForm = ({ onSwitchToLogin, onRegisterSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: ''
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

    // Валидация пароля
    if (formData.password !== formData.confirmPassword) {
      setError('Пароли не совпадают');
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Пароль должен содержать минимум 6 символов');
      setIsLoading(false);
      return;
    }

    try {
      const data = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          surname: formData.surname,
          email: formData.email,
          password: formData.password
        }),
      }).then(response => response.json());

      if (data.success) {
        setSuccess(data.message);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        // Отправляем событие об изменении состояния авторизации
        window.dispatchEvent(new Event('authStateChange'));
        
        setTimeout(() => {
          onRegisterSuccess(data.user);
        }, 1000);
      } else {
        if (data.errors && data.errors.length > 0) {
          setError(data.errors.map(err => err.msg).join(', '));
        } else {
          setError(data.message || 'Произошла ошибка при регистрации');
        }
      }
    } catch (error) {
      setError('Ошибка соединения с сервером');
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormContainer>
      <FormWrapper>
        <Title>Регистрация в CLICKHOUSE</Title>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
        
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label>Имя</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Введите ваше имя"
              required
            />
          </InputGroup>

          <InputGroup>
            <Label>Фамилия</Label>
            <Input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Введите вашу фамилию"
              required
            />
          </InputGroup>

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
              placeholder="Придумайте пароль (минимум 6 символов)"
              required
            />
          </InputGroup>

          <InputGroup>
            <Label>Подтвердите пароль</Label>
            <Input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Повторите пароль"
              required
            />
          </InputGroup>

          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? 'Выполняется регистрация...' : 'Зарегистрироваться'}
          </SubmitButton>
        </Form>

        <LinkText>
          Уже есть аккаунт?{' '}
          <Link type="button" onClick={onSwitchToLogin}>
            Войти
          </Link>
        </LinkText>
      </FormWrapper>
    </FormContainer>
  );
};

export default RegisterForm; 