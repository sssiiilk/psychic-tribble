import { useState, useEffect } from 'react';
import { apiRequest, authorizedApiRequest, API_ENDPOINTS } from '../config/api';

// Хук для получения жилых комплексов
export const useComplexes = () => {
  const [complexes, setComplexes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComplexes = async () => {
      try {
        setLoading(true);
        const response = await apiRequest(API_ENDPOINTS.COMPLEXES);
        if (response.success) {
          setComplexes(response.data);
        } else {
          setError('Ошибка получения данных');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComplexes();
  }, []);

  return { complexes, loading, error };
};

// Хук для получения комплексов по статусу
export const useComplexesByStatus = (status) => {
  const [complexes, setComplexes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComplexes = async () => {
      if (!status) return;
      
      try {
        setLoading(true);
        const response = await apiRequest(`${API_ENDPOINTS.COMPLEXES}/status/${status}`);
        if (response.success) {
          setComplexes(response.data);
        } else {
          setError('Ошибка получения данных');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComplexes();
  }, [status]);

  return { complexes, loading, error };
};

// Хук для получения комплексов по застройщику
export const useComplexesByDeveloper = (developer) => {
  const [complexes, setComplexes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComplexes = async () => {
      if (!developer) return;
      
      try {
        setLoading(true);
        const response = await apiRequest(`${API_ENDPOINTS.COMPLEXES}/developer/${developer}`);
        if (response.success) {
          setComplexes(response.data);
        } else {
          setError('Ошибка получения данных');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComplexes();
  }, [developer]);

  return { complexes, loading, error };
};

// Хук для аутентификации
export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await authorizedApiRequest(API_ENDPOINTS.AUTH.VERIFY);
        if (response.success) {
          setUser(response.user);
        } else {
          localStorage.removeItem('authToken');
        }
      } catch (error) {
        localStorage.removeItem('authToken');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await apiRequest(API_ENDPOINTS.AUTH.LOGIN, {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });

      if (response.success) {
        localStorage.setItem('authToken', response.token);
        setUser(response.user);
        return { success: true };
      } else {
        return { success: false, message: response.message };
      }
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const register = async (userData) => {
    try {
      const response = await apiRequest(API_ENDPOINTS.AUTH.REGISTER, {
        method: 'POST',
        body: JSON.stringify(userData)
      });

      if (response.success) {
        localStorage.setItem('authToken', response.token);
        setUser(response.user);
        return { success: true };
      } else {
        return { success: false, message: response.message };
      }
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  return {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user
  };
}; 