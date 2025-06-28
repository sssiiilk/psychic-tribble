const API_BASE_URL = 'http://localhost:5000/api';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    // Добавляем токен авторизации если он есть
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      return { response, data };
    } catch (error) {
      throw new Error('Ошибка соединения с сервером');
    }
  }

  async login(email, password) {
    const { response, data } = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    return data;
  }

  async register(userData) {
    const { response, data } = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });

    return data;
  }

  async verifyToken() {
    const { response, data } = await this.request('/auth/verify');
    return data;
  }

  async healthCheck() {
    const { response, data } = await this.request('/health');
    return data;
  }
}

export default new ApiService(); 