// Конфигурация API
export const API_BASE_URL = 'https://psychic-tribble.onrender.com';

// Эндпоинты API
export const API_ENDPOINTS = {
  // Аутентификация
  AUTH: {
    REGISTER: '/api/auth/register',
    LOGIN: '/api/auth/login',
    VERIFY: '/api/auth/verify'
  },
  // Проверка здоровья сервера
  HEALTH: '/api/health',
  // Жилые комплексы
  COMPLEXES: '/api/complexes',
  // Пользователи
  USERS: '/api/users'
};

// Функция для создания полного URL
export const createApiUrl = (endpoint) => `${API_BASE_URL}${endpoint}`;

// Функция для выполнения запросов к API
export const apiRequest = async (endpoint, options = {}) => {
  const url = createApiUrl(endpoint);
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    }
  };

  const config = {
    ...defaultOptions,
    ...options
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// Функция для авторизованных запросов
export const authorizedApiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem('authToken');
  
  const authOptions = {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': token ? `Bearer ${token}` : ''
    }
  };

  return apiRequest(endpoint, authOptions);
}; 