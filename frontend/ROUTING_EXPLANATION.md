# 🛣️ Маршрутизация в проекте CLICKHOUSE

## 1. Основная структура (App.jsx)

```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>  {/* ← Оборачиваем приложение в роутер */}
      <Routes>       {/* ← Контейнер для маршрутов */}
        <Route path="/" element={<MainPage />} />
        <Route path="/developer-dashboard" element={<DeveloperDashboard />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Что происходит:
- **BrowserRouter** - создает контекст навигации для всего приложения
- **Routes** - контейнер, который решает какой компонент показать
- **Route** - определяет соответствие URL → Компонент

## 2. Программная навигация (useNavigate)

### В Header.jsx:
```javascript
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate(); // ← Хук для программной навигации

  const handleLogoClick = () => {
    navigate('/');  // ← Переход на главную
  };

  const handleLoginClick = () => {
    navigate('/auth');  // ← Переход на страницу входа
  };

  const handleLogoutClick = () => {
    // Очистка данных
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Переход на главную после выхода
    navigate('/');
  };

  return (
    <HeaderWrapper>
      <NavButton onClick={handleLogoClick}>Логотип</NavButton>
      <NavButton onClick={handleLoginClick}>Войти</NavButton>
    </HeaderWrapper>
  );
};
```

### В AuthPage.jsx:
```javascript
const AuthPage = () => {
  const navigate = useNavigate();

  const handleAuthSuccess = (user) => {
    console.log('Пользователь вошел в систему:', user);
    navigate('/');  // ← Перенаправление после успешного входа
  };

  return (
    <>
      <LoginForm onLoginSuccess={handleAuthSuccess} />
    </>
  );
};
```

## 3. Передача данных между страницами

### Передача состояния (в OfferCard.jsx):
```javascript
import { useNavigate } from 'react-router-dom';

const OfferCard = ({ group }) => {
  const navigate = useNavigate();

  const handleDeveloperClick = () => {
    navigate('/developer-dashboard', { 
      state: {                    // ← Передаем данные
        developerName: group,
        fromOffer: true 
      } 
    });
  };

  return (
    <Group onClick={handleDeveloperClick}>
      {group}
    </Group>
  );
};
```

### Получение данных (в DeveloperDashboard.jsx):
```javascript
import { useLocation } from 'react-router-dom';

const DeveloperDashboard = () => {
  const location = useLocation();
  
  // ← Получаем переданные данные
  const developerName = location.state?.developerName || 'CLICKHOUSE';
  const fromOffer = location.state?.fromOffer || false;

  return (
    <Container>
      <CompanyHeader>ООО "{developerName}"</CompanyHeader>
    </Container>
  );
};
```

## 4. Типы навигации в проекте

### A. Декларативная (через компоненты)
```javascript
// Не используется в текущем проекте, но возможно:
import { Link } from 'react-router-dom';

<Link to="/auth">Войти</Link>
<Link to="/developer-dashboard">Дашборд</Link>
```

### B. Программная (через хуки)
```javascript
// Используется везде в проекте
const navigate = useNavigate();

// Простой переход
navigate('/auth');

// Переход с данными
navigate('/developer-dashboard', { 
  state: { developerName: 'ДОН-Строй' } 
});

// Переход с заменой истории (кнопка "Назад" не сработает)
navigate('/auth', { replace: true });
```

## 5. Обработка состояния авторизации

### Проверка авторизации в Header.jsx:
```javascript
const [isAuthenticated, setIsAuthenticated] = useState(false);

useEffect(() => {
  checkAuthStatus();
  
  // Слушаем изменения авторизации
  window.addEventListener('authStateChange', checkAuthStatus);
  
  return () => {
    window.removeEventListener('authStateChange', checkAuthStatus);
  };
}, []);

const checkAuthStatus = () => {
  const token = localStorage.getItem('token');
  setIsAuthenticated(!!token);
};
```

## 6. URL структура проекта

| URL | Компонент | Описание |
|-----|-----------|----------|
| `/` | MainPage | Главная страница с предложениями |
| `/auth` | AuthPage | Вход/Регистрация |
| `/developer-dashboard` | DeveloperDashboard | Профиль застройщика |

## 7. Особенности реализации

### Без вложенных маршрутов:
```javascript
// Простая плоская структура
<Routes>
  <Route path="/" element={<MainPage />} />
  <Route path="/auth" element={<AuthPage />} />
  <Route path="/developer-dashboard" element={<DeveloperDashboard />} />
</Routes>
```

### Без параметров в URL:
```javascript
// Данные передаются через state, а не через URL
// НЕ: /developer-dashboard/don-stroy
// А: /developer-dashboard + state: { developerName: 'ДОН-Строй' }
```

### Без защищенных маршрутов:
```javascript
// Все маршруты доступны без авторизации
// Логика авторизации только в UI компонентах
```

## 8. Жизненный цикл навигации

1. **Пользователь кликает** → кнопку/ссылку
2. **Вызывается** → navigate('/new-route')
3. **React Router** → обновляет URL
4. **Routes** → находит подходящий Route
5. **Рендерится** → новый компонент
6. **useLocation/useNavigate** → доступны в новом компоненте

## 9. Преимущества текущего подхода

✅ **Простота** - минимум настроек
✅ **SPA опыт** - нет перезагрузки страниц  
✅ **Передача данных** - через state
✅ **История браузера** - работают кнопки Назад/Вперед
✅ **Программная навигация** - полный контроль

## 10. Возможные улучшения

🔧 **Параметры в URL**: `/developer-dashboard/:name`
🔧 **Защищенные маршруты**: Проверка авторизации
🔧 **Вложенные маршруты**: `/dashboard/projects`, `/dashboard/stats`
🔧 **Lazy loading**: Динамическая загрузка компонентов
🔧 **Breadcrumbs**: Навигационные крошки 