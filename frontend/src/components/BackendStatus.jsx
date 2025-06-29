import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { apiRequest, API_ENDPOINTS } from '../config/api';

const StatusContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    padding: 8px 12px;
    font-size: 12px;
  }
`;

const StatusIndicator = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.status === 'connected' ? '#4CAF50' : props.status === 'connecting' ? '#FF9800' : '#F44336'};
  animation: ${props => props.status === 'connecting' ? 'pulse 1.5s infinite' : 'none'};
  
  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }
`;

const BackendStatus = () => {
  const [status, setStatus] = useState('connecting');
  const [message, setMessage] = useState('Проверка подключения...');

  useEffect(() => {
    const checkBackendStatus = async () => {
      try {
        setStatus('connecting');
        setMessage('Проверка подключения...');
        
        const response = await apiRequest(API_ENDPOINTS.HEALTH);
        
        if (response.message === 'Server is running') {
          setStatus('connected');
          setMessage('Бекенд подключен');
          
          // Скрываем сообщение через 3 секунды
          setTimeout(() => {
            setStatus('connected');
            setMessage('');
          }, 3000);
        } else {
          setStatus('error');
          setMessage('Ошибка подключения');
        }
      } catch (error) {
        setStatus('error');
        setMessage('Бекенд недоступен');
      }
    };

    checkBackendStatus();
    
    // Проверяем статус каждые 30 секунд
    const interval = setInterval(checkBackendStatus, 30000);
    
    return () => clearInterval(interval);
  }, []);

  if (status === 'connected' && !message) {
    return null;
  }

  return (
    <StatusContainer>
      <StatusIndicator status={status} />
      {message}
    </StatusContainer>
  );
};

export default BackendStatus; 