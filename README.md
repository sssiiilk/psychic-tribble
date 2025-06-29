# CLICKHOUSE - Система недвижимости

Полноценная система для работы с недвижимостью с аутентификацией пользователей.

## Структура проекта

```
psychic-tribble/
├── backend/          # Node.js + Express сервер
├── frontend/         # React приложение
└── README.md         # Этот файл
```

## Быстрый запуск

### 1. Запуск Backend

```bash
cd backend
npm install
npm run dev
```

Backend будет доступен по адресу: http://localhost:5000

### 2. Запуск Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend будет доступен по адресу: http://localhost:5173

## Функциональность

### Аутентификация
- ✅ Регистрация новых пользователей
- ✅ Вход в систему
- ✅ Сохранение пользователей в JSON файле
- ✅ JWT токены для аутентификации
- ✅ Валидация данных

### Интерфейс
- ✅ Адаптивный дизайн (Mobile-First)
- ✅ Современный UI с анимациями
- ✅ Единый стиль с основным приложением
- ✅ Обработка ошибок и успешных операций

## Технологии

### Backend
- Node.js
- Express.js
- bcryptjs (хеширование паролей)
- jsonwebtoken (JWT токены)
- express-validator (валидация)
- cors (CORS политика)

### Frontend
- React 19
- React Router DOM
- Styled Components
- Vite

## API Endpoints

- `POST /api/auth/register` - Регистрация
- `POST /api/auth/login` - Вход
- `GET /api/auth/verify` - Проверка токена
- `GET /api/health` - Проверка сервера

## Маршруты Frontend

- `/` - Главная страница
- `/auth` - Страница аутентификации (логин/регистрация)
- `/developer-dashboard` - Панель разработчика

## Использование

1. Запустите backend и frontend
2. Перейдите на http://localhost:5173
3. Нажмите "Войти" в header
4. Зарегистрируйтесь или войдите в систему
5. Данные пользователей сохраняются в `backend/data/users.json`

## Дизайн

Интерфейс соответствует корпоративному стилю CLICKHOUSE:
- Основной цвет: #9B1743
- Шрифт: League Spartan
- Адаптивный дизайн для всех устройств
- Современные анимации и переходы 