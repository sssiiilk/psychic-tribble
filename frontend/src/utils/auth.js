// Утилиты для работы с авторизацией

export const AUTH_EVENTS = {
  STATE_CHANGE: 'authStateChange'
};

export const AuthService = {
  // Проверка авторизации
  isAuthenticated() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return !!(token && user);
  },

  // Получение данных пользователя
  getUser() {
    try {
      const userData = localStorage.getItem('user');
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Ошибка получения данных пользователя:', error);
      return null;
    }
  },

  // Получение токена
  getToken() {
    return localStorage.getItem('token');
  },

  // Сохранение данных авторизации
  setAuthData(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.emitAuthChange();
  },

  // Очистка данных авторизации
  clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.emitAuthChange();
  },

  // Отправка события об изменении авторизации
  emitAuthChange() {
    window.dispatchEvent(new Event(AUTH_EVENTS.STATE_CHANGE));
  },

  // Подписка на изменения авторизации
  onAuthChange(callback) {
    const handler = () => callback();
    
    // Слушаем наши кастомные события
    window.addEventListener(AUTH_EVENTS.STATE_CHANGE, handler);
    
    // Также слушаем изменения в localStorage (для синхронизации между вкладками)
    window.addEventListener('storage', (e) => {
      if (e.key === 'token' || e.key === 'user') {
        handler();
      }
    });

    // Возвращаем функцию для отписки
    return () => {
      window.removeEventListener(AUTH_EVENTS.STATE_CHANGE, handler);
      window.removeEventListener('storage', handler);
    };
  }
};

// Хук для React компонентов
export const useAuth = (callback) => {
  if (typeof callback === 'function') {
    return AuthService.onAuthChange(callback);
  }
  
  return {
    isAuthenticated: AuthService.isAuthenticated(),
    user: AuthService.getUser(),
    token: AuthService.getToken()
  };
}; 